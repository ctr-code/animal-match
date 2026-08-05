;; GIMP Script-Fu: Convert all PNG files in a folder to WebP
;; Preserves transparency when the source PNG has an alpha channel.
;;
;; Install note:
;; - Make sure the GIMP WebP plug-in is installed in your GIMP build.
;; - This script saves each output next to its source file with a .webp extension.

(define (script-fu-png-folder-to-webp in-dir)
  (let* ((pattern (string-append in-dir "/*.png"))
         (png-files (cadr (file-glob pattern 1))))
    (if (null? png-files)
        (begin
          (gimp-message (string-append "No PNG files found in " in-dir))
          #f)
        (let loop ((files png-files)
                   (count 0))
          (if (null? files)
              (begin
                (gimp-message (string-append "Finished converting "
                                             (number->string count)
                                             " PNG file(s) to WebP."))
                #t)
              (let* ((input-file (car files))
                     (image (car (gimp-file-load RUN-NONINTERACTIVE input-file input-file)))
                     (layer (car (gimp-image-get-active-layer image)))
                     (output-file (string-append (substring input-file 0 (- (string-length input-file) 4)) ".webp")))
                (file-webp-save RUN-NONINTERACTIVE image layer output-file output-file
                    0  ; preset (default 0)
                    0  ; lossless
                    80 ; quality
                    90 ; alpha-quality
                    0  ; animation
                    0  ; anim-loop
                    0  ; minimum-size for animation      
                    0  ; key-frame-distance
                    0  ; iptc
                    0  ; exif
                    0  ; xmp
                    0  ; delay for untimestamped animations
                    0  ; force-delay
                )
                (gimp-image-delete image)
                (loop (cdr files) (+ count 1))))))))

(script-fu-register
  "script-fu-png-folder-to-webp"
  "PNG folder -> WebP"
  "Convert all PNG files in a folder to WebP while preserving transparency."
  "Copilot"
  "Copilot"
  "2026-08-05"
  ""
  SF-DIRNAME "in-dir" "Input folder" "")

(script-fu-menu-register "script-fu-png-folder-to-webp"
                         "<Image>/File")
