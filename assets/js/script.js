
// These correspond to the image file names
const air_albatross = "air-albatross";
const air_bald_eagle = "air-bald-eagle";
const air_bat = "air-bat";
const air_bumblebee = "air-bumblebee";
const air_hummingbird = "air-hummingbird";
const air_kestrel = "air-kestrel";
const air_peregrine_falcon = "air-peregrine-falcon";
const air_pigeon = "air-pigeon";
const air_raven = "air-raven";
const air_stork = "air-stork";
const air_swift = "air-swift";
const air_woodpecker = "air-woodpecker";

const land_anteater = "land-anteater";
const land_beaver = "land-beaver";
const land_camel = "land-camel";
const land_civet = "land-civet";
const land_elephant = "land-elephant";
const land_giraffe = "land-giraffe";
const land_koala = "land-koala";
const land_lynx = "land-lynx";
const land_meerkat = "land-meerkat";
const land_porcupine = "land-porcupine";
const land_sloth = "land-sloth";
const land_wombat = "land-wombat";

const ocean_beluga_whale = "ocean-beluga-whale";
const ocean_blob_fish = "ocean-blob-fish";
const ocean_clownfish = "ocean-clownfish";
const ocean_coconut_crab = "ocean-coconut-crab";
const ocean_cuttlefish = "ocean-cuttlefish";
const ocean_great_white_shark = "ocean-great-white-shark";
const ocean_jellyfish = "ocean-jellyfish";
const ocean_manta_ray = "ocean-manta-ray";
const ocean_orca = "ocean-orca";
const ocean_sea_urchin = "ocean-sea-urchin";
const ocean_seahorse = "ocean-seahorse";
const ocean_starfish = "ocean-starfish";

const animalNameMap = new Map([
    [air_albatross, "Albatross"],
    [air_bald_eagle, "Bald Eagle"],
    [air_bat, "Bat"],
    [air_bumblebee, "Bumblebee"],
    [air_hummingbird, "Hummingbird"],
    [air_kestrel, "Kestrel"],
    [air_peregrine_falcon, "Peregrine Falcon"],
    [air_pigeon, "Pigeon"],
    [air_raven, "Raven"],
    [air_stork, "Stork"],
    [air_swift, "Swift"],
    [air_woodpecker, "Woodpecker"],
    [land_anteater, "Anteater"],
    [land_beaver, "Beaver"],
    [land_camel, "Camel"],
    [land_civet, "Civet"],
    [land_elephant, "Elephant"],
    [land_giraffe, "Giraffe"],
    [land_koala, "Koala"],
    [land_lynx, "Lynx"],
    [land_meerkat, "Meerkat"],
    [land_porcupine, "Porcupine"],
    [land_sloth, "Sloth"],
    [land_wombat, "Wombat"],
    [ocean_beluga_whale, "Beluga Whale"],
    [ocean_blob_fish, "Blob Fish"],
    [ocean_clownfish, "Clownfish"],
    [ocean_coconut_crab, "Coconut Crab"],
    [ocean_cuttlefish, "Cuttlefish"],
    [ocean_great_white_shark, "Great White Shark"],
    [ocean_jellyfish, "Jellyfish"],
    [ocean_manta_ray, "Manta Ray"],
    [ocean_orca, "Orca"],
    [ocean_sea_urchin, "Sea Urchin"],
    [ocean_seahorse, "Seahorse"],
    [ocean_starfish, "Starfish"]
]);

const questions = {
    // Sea animal questions
    sea: [
        // Easy questions
        [
            {
                "id": 1,
                "question": "I am bright orange with white stripes, and I love to hide safely inside the stinging tentacles of sea anemones. Who am I?",
                "options": [ocean_seahorse, ocean_clownfish, ocean_cuttlefish, ocean_beluga_whale, ocean_manta_ray, ocean_orca],
                "animalName": ocean_clownfish
            },
            {
                "id": 2,
                "question": "I am a totally white whale with a round forehead. I love to make loud chirping sounds, which earned me the nickname 'canary of the sea'! Who am I?",
                "options": [ocean_orca, ocean_great_white_shark, ocean_beluga_whale, ocean_manta_ray, ocean_cuttlefish, ocean_starfish],
                "animalName": ocean_beluga_whale
            },
            {
                "id": 3,
                "question": "I am a massive crab that lives on land. I am so strong that I can climb up trees and use my heavy claws to crack open hard coconuts! Who am I?",
                "options": [ocean_sea_urchin, ocean_coconut_crab, ocean_starfish, ocean_jellyfish, ocean_blob_fish, ocean_seahorse],
                "animalName": ocean_coconut_crab
            },
            {
                "id": 4,
                "question": "I have a see-through body that looks like jelly. I don't have a brain, and my long tentacles can give a nasty sting! Who am I?",
                "options": [ocean_jellyfish, ocean_blob_fish, ocean_sea_urchin, ocean_starfish, ocean_clownfish, ocean_great_white_shark],
                "animalName": ocean_jellyfish
            },
            {
                "id": 5,
                "question": "I look like a round ball covered in sharp, pointy needles. Predators leave me alone because I am way too prickly to eat! Who am I?",
                "options": [ocean_starfish, ocean_sea_urchin, ocean_seahorse, ocean_blob_fish, ocean_coconut_crab, ocean_cuttlefish],
                "animalName": ocean_sea_urchin
            },
            {
                "id": 6,
                "question": "I swim upright instead of sideways. I use my curly tail to hold onto seaweed, and the daddies are the ones who carry the eggs! Who am I?",
                "options": [ocean_seahorse, ocean_clownfish, ocean_manta_ray, ocean_cuttlefish, ocean_orca, ocean_beluga_whale],
                "animalName": ocean_seahorse
            },
            {
                "id": 7,
                "question": "I am a famous hunter with a powerful grey body, a big fin on my back, and rows of sharp teeth that grow back if I lose them! Who am I?",
                "options": [ocean_orca, ocean_great_white_shark, ocean_beluga_whale, ocean_manta_ray, ocean_jellyfish, ocean_sea_urchin],
                "animalName": ocean_great_white_shark
            },
            {
                "id": 8,
                "question": "In the deep ocean, I look like a normal fish. But when I am brought up to the surface, I turn into a pink, gooey, grumpy-looking blob! Who am I?",
                "options": [ocean_blob_fish, ocean_cuttlefish, ocean_jellyfish, ocean_clownfish, ocean_starfish, ocean_coconut_crab],
                "animalName": ocean_blob_fish
            }
        ],
        // Medium questions
        [
            {
                "id": 1,
                "question": "I can change the shape of my forehead to alter the sounds I produce, almost like a built‑in voice‑changer. Who am I?",
                "options": [ocean_beluga_whale, ocean_blob_fish, ocean_clownfish, ocean_manta_ray, ocean_orca, ocean_cuttlefish],
                "animalName": ocean_beluga_whale
            },
            {
                "id": 2,
                "question": "My body has almost no muscle because I rely entirely on deep‑sea pressure to maintain my shape. Who am I?",
                "options": [ocean_blob_fish, ocean_seahorse, ocean_starfish, ocean_jellyfish, ocean_manta_ray, ocean_coconut_crab],
                "animalName": ocean_blob_fish
            },
            {
                "id": 3,
                "question": "I live in a strict social hierarchy where only one female exists, and everyone else stays male unless she dies. Who am I?",
                "options": [ocean_clownfish, ocean_seahorse, ocean_manta_ray, ocean_cuttlefish, ocean_beluga_whale, ocean_orca],
                "animalName": ocean_clownfish
            },
            {
                "id": 4,
                "question": "I can smell food from extremely far away using antennae that work almost like a highly sensitive nose. Who am I?",
                "options": [ocean_coconut_crab, ocean_manta_ray, ocean_starfish, ocean_sea_urchin, ocean_blob_fish, ocean_jellyfish],
                "animalName": ocean_coconut_crab
            },
            {
                "id": 5,
                "question": "I can regrow lost arms and heal injuries incredibly fast thanks to advanced skin‑cell regeneration. Who am I?",
                "options": [ocean_cuttlefish, ocean_clownfish, ocean_manta_ray, ocean_orca, ocean_seahorse, ocean_jellyfish],
                "animalName": ocean_cuttlefish
            },
            {
                "id": 6,
                "question": "Scientists still aren’t sure if I sleep — I may rest half my brain at a time while still swimming. Who am I?",
                "options": [ocean_great_white_shark, ocean_manta_ray, ocean_cuttlefish, ocean_sea_urchin, ocean_blob_fish, ocean_orca],
                "animalName": ocean_great_white_shark
            },
            {
                "id": 7,
                "question": "Some of my relatives can revert to a younger life stage instead of dying, effectively resetting their age. Who am I?",
                "options": [ocean_jellyfish, ocean_starfish, ocean_blob_fish, ocean_sea_urchin, ocean_manta_ray, ocean_clownfish],
                "animalName": ocean_jellyfish
            },
            {
                "id": 8,
                "question": "I have one of the largest brain‑to‑body ratios of any fish, giving me surprisingly advanced problem‑solving abilities. Who am I?",
                "options": [ocean_manta_ray, ocean_orca, ocean_beluga_whale, ocean_cuttlefish, ocean_seahorse, ocean_blob_fish],
                "animalName": ocean_manta_ray
            },
            {
                "id": 9,
                "question": "Different groups of my species have unique traditions and hunting styles passed down through generations. Who am I?",
                "options": [ocean_orca, ocean_beluga_whale, ocean_manta_ray, ocean_clownfish, ocean_cuttlefish, ocean_jellyfish],
                "animalName": ocean_orca
            },
            {
                "id": 10,
                "question": "I have no eyes, yet I can detect light using sensors spread across my entire body. Who am I?",
                "options": [ocean_sea_urchin, ocean_starfish, ocean_blob_fish, ocean_jellyfish, ocean_manta_ray, ocean_coconut_crab],
                "animalName": ocean_sea_urchin
            },
            {
                "id": 11,
                "question": "I am the only animal where the males become pregnant and give birth, carrying the developing young in a specialised pouch. Who am I?",
                "options": [ocean_seahorse, ocean_clownfish, ocean_manta_ray, land_koala, air_pigeon, land_meerkat],
                "animalName": ocean_seahorse
            },
            {
                "id": 12,
                "question": "I don’t have a brain — instead, each of my arms has its own mini‑control centre that helps me coordinate movement. Who am I?",
                "options": [ocean_starfish, ocean_sea_urchin, ocean_jellyfish, ocean_blob_fish, ocean_manta_ray, ocean_coconut_crab],
                "animalName": ocean_starfish
            }
        ],
        // Hard questions
        [
            {
                "id": 1,
                "question": "I can change the internal pressure of my skull to reshape a fatty organ in my head, letting me alter sound direction with extreme precision. Who am I?",
                "options": [ocean_beluga_whale, ocean_orca, ocean_manta_ray, ocean_cuttlefish, ocean_great_white_shark, ocean_blob_fish],
                "animalName": ocean_beluga_whale
            },
            {
                "id": 2,
                "question": "My tissues are less dense than seawater, allowing me to float without effort — but this same adaptation makes me collapse into a shapeless mass at the surface. Who am I?",
                "options": [ocean_blob_fish, ocean_jellyfish, ocean_starfish, ocean_sea_urchin, ocean_manta_ray, ocean_coconut_crab],
                "animalName": ocean_blob_fish
            },
            {
                "id": 3,
                "question": "I coat myself in a special mucus that chemically disguises me so other creatures don’t recognise me as prey or a threat. Who am I?",
                "options": [ocean_clownfish, ocean_seahorse, ocean_cuttlefish, ocean_manta_ray, ocean_beluga_whale, ocean_jellyfish],
                "animalName": ocean_clownfish
            },
            {
                "id": 4,
                "question": "I can detect scents through the air using receptors normally found in aquatic species, giving me an unusually powerful sense of smell. Who am I?",
                "options": [ocean_coconut_crab, ocean_manta_ray, ocean_sea_urchin, ocean_blob_fish, ocean_starfish, ocean_great_white_shark],
                "animalName": ocean_coconut_crab
            },
            {
                "id": 5,
                "question": "I can regenerate lost arms and close wounds extremely fast thanks to advanced skin‑cell regeneration. Who am I?",
                "options": [ocean_cuttlefish, ocean_starfish, ocean_seahorse, ocean_manta_ray, ocean_blob_fish, ocean_jellyfish],
                "animalName": ocean_cuttlefish
            },
            {
                "id": 6,
                "question": "I have sensors that detect temperature changes of less than a single degree, helping me track hidden prey over long distances. Who am I?",
                "options": [ocean_great_white_shark, ocean_manta_ray, ocean_orca, ocean_cuttlefish, ocean_blob_fish, ocean_sea_urchin],
                "animalName": ocean_great_white_shark
            },
            {
                "id": 7,
                "question": "I can store memories without a brain by using chemical changes in my nerve net to retain patterns. Who am I?",
                "options": [ocean_jellyfish, ocean_starfish, ocean_blob_fish, ocean_sea_urchin, ocean_manta_ray, ocean_clownfish],
                "animalName": ocean_jellyfish
            },
            {
                "id": 8,
                "question": "I can recognise myself in a mirror — a test most animals fail — suggesting unusually advanced cognitive ability. Who am I?",
                "options": [ocean_manta_ray, ocean_orca, ocean_beluga_whale, ocean_cuttlefish, ocean_seahorse, ocean_blob_fish],
                "animalName": ocean_manta_ray
            },
            {
                "id": 9,
                "question": "I can teach hunting techniques to younger members of my group, and these learned behaviours can persist for generations. Who am I?",
                "options": [ocean_orca, ocean_beluga_whale, ocean_manta_ray, ocean_great_white_shark, ocean_cuttlefish, ocean_jellyfish],
                "animalName": ocean_orca
            },
            {
                "id": 10,
                "question": "I move all my limbs using a hydraulic system powered entirely by water pressure, without any muscles involved. Who am I?",
                "options": [ocean_sea_urchin, ocean_starfish, ocean_blob_fish, ocean_jellyfish, ocean_coconut_crab, ocean_seahorse],
                "animalName": ocean_sea_urchin
            },
            {
                "id": 11,
                "question": "I have bony plates instead of scales, giving me natural armour that bends but doesn’t break under pressure. Who am I?",
                "options": [ocean_seahorse, ocean_cuttlefish, ocean_clownfish, ocean_manta_ray, ocean_blob_fish, ocean_starfish],
                "animalName": ocean_seahorse
            },
            {
                "id": 12,
                "question": "I can sense chemical trails in the water and follow them with surprising accuracy, even though I have no brain. Who am I?",
                "options": [ocean_starfish, ocean_sea_urchin, ocean_jellyfish, ocean_blob_fish, ocean_manta_ray, ocean_coconut_crab],
                "animalName": ocean_starfish
            }
        ]
    ],
    // Land animal questions
    land: [
        // Easy questions
        [
            {
                "id": 1,
                "question": "I have an incredibly long neck and a blue tongue that helps me reach juicy leaves at the very top of trees! Who am I?",
                "options": [land_elephant, land_giraffe, land_camel, land_sloth, land_meerkat, land_wombat],
                "animalName": land_giraffe
            },
            {
                "id": 2,
                "question": "I am a giant animal with huge floppy ears and a long trunk that I use like a nose, a straw, and a hand! Who am I?",
                "options": [land_camel, land_anteater, land_elephant, land_beaver, land_lynx, land_civet],
                "animalName": land_elephant
            },
            {
                "id": 3,
                "question": "I move incredibly slowly through the trees, hanging upside down from branches with my long, curved claws. Who am I?",
                "options": [land_porcupine, land_sloth, land_wombat, land_koala, land_meerkat, land_giraffe],
                "animalName": land_sloth
            },
            {
                "id": 4,
                "question": "I am covered in thousands of sharp, stiff quills that protect me from predators if they get too close! Who am I?",
                "options": [land_beaver, land_anteater, land_porcupine, land_civet, land_elephant, land_lynx],
                "animalName": land_porcupine
            },
            {
                "id": 5,
                "question": "I live in the hot desert and carry humps on my back to store fat, which helps me survive long trips without water! Who am I?",
                "options": [land_wombat, land_camel, land_meerkat, land_giraffe, land_sloth, land_koala],
                "animalName": land_camel
            },
            {
                "id": 6,
                "question": "I love to stand tall on my hind legs to watch out for danger while my family group plays and digs in the ground! Who am I?",
                "options": [land_meerkat, land_beaver, land_civet, land_anteater, land_lynx, land_elephant],
                "animalName": land_meerkat
            },
            {
                "id": 7,
                "question": "I am an expert builder! I use my large, orange front teeth to chew down trees and make dams across rivers. Who am I?",
                "options": [land_wombat, land_porcupine, land_beaver, land_sloth, land_camel, land_koala],
                "animalName": land_beaver
            },
            {
                "id": 8,
                "question": "I have a very long, sticky tongue and a tube-shaped snout that is perfect for slurping up thousands of bugs a day! Who am I?",
                "options": [land_civet, land_anteater, land_lynx, land_elephant, land_giraffe, land_meerkat],
                "animalName": land_anteater
            }
        ],
        // Medium questions
        [
            {
                "id": 1,
                "question": "My poop is perfectly cube‑shaped — scientists only recently discovered how I form the edges. Who am I?",
                "options": [land_wombat, land_sloth, land_porcupine, land_meerkat, land_lynx, land_koala],
                "animalName": land_wombat
            },
            {
                "id": 2,
                "question": "I have extra neck vertebrae that let me turn my head almost all the way around. Who am I?",
                "options": [land_sloth, land_civet, land_giraffe, land_elephant, land_camel, land_beaver],
                "animalName": land_sloth
            },
            {
                "id": 3,
                "question": "I can make my quills vibrate to produce a warning sound before I even raise them. Who am I?",
                "options": [land_porcupine, land_wombat, land_anteater, land_koala, land_meerkat, land_lynx],
                "animalName": land_porcupine
            },
            {
                "id": 4,
                "question": "I have a special 'sentinel call' that only the lookout in my group uses. Who am I?",
                "options": [land_meerkat, land_sloth, land_beaver, land_civet, land_giraffe, land_elephant],
                "animalName": land_meerkat
            },
            {
                "id": 5,
                "question": "My ear tufts help me judge the direction of sound in deep snow. Who am I?",
                "options": [land_lynx, land_camel, land_wombat, land_porcupine, land_koala, land_anteater],
                "animalName": land_lynx
            },
            {
                "id": 6,
                "question": "I have fingerprints so similar to humans they once confused crime‑scene investigators. Who am I?",
                "options": [land_koala, land_sloth, land_civet, land_giraffe, land_elephant, land_beaver],
                "animalName": land_koala
            },
            {
                "id": 7,
                "question": "I have the same number of neck bones as humans — even though my neck is over 2 metres long. Who am I?",
                "options": [land_giraffe, land_elephant, land_camel, land_wombat, land_meerkat, land_civet],
                "animalName": land_giraffe
            },
            {
                "id": 8,
                "question": "I can detect storms from miles away by sensing vibrations through my feet. Who am I?",
                "options": [land_elephant, land_giraffe, land_beaver, land_sloth, land_civet, land_anteater],
                "animalName": land_elephant
            },
            {
                "id": 9,
                "question": "I produce a natural perfume ingredient called civetone — even though I’m not actually a cat. Who am I?",
                "options": [land_civet, land_meerkat, land_lynx, land_wombat, land_beaver, land_anteater],
                "animalName": land_civet
            },
            {
                "id": 10,
                "question": "I have oval‑shaped red blood cells that help me survive extreme dehydration. Who am I?",
                "options": [land_camel, land_elephant, land_giraffe, land_beaver, land_sloth, land_porcupine],
                "animalName": land_camel
            },
            {
                "id": 11,
                "question": "My teeth are naturally orange because they contain iron that makes them incredibly strong. Who am I?",
                "options": [land_beaver, land_wombat, land_lynx, land_koala, land_meerkat, land_anteater],
                "animalName": land_beaver
            },
            {
                "id": 12,
                "question": "I have no teeth at all — just a long sticky tongue that can flick 150 times per minute. Who am I?",
                "options": [land_anteater, land_civet, land_sloth, land_beaver, land_porcupine, land_koala],
                "animalName": land_anteater
            }
        ],
        // Hard questions
        [
            {
                "id": 1,
                "question": "My poop is perfectly cube-shaped — scientists only recently discovered how I form the edges. Who am I?",
                "options": [land_wombat, land_sloth, land_porcupine, land_meerkat, land_lynx, land_koala],
                "animalName": land_wombat
            },
            {
                "id": 2,
                "question": "I only wee about once a week, and I climb all the way down to the ground to do it. Who am I?",
                "options": [land_sloth, land_civet, land_giraffe, land_elephant, land_camel, land_beaver],
                "animalName": land_sloth
            },
            {
                "id": 3,
                "question": "My pupils change shape depending on the season, helping me hunt in near-total darkness. Who am I?",
                "options": [land_lynx, land_camel, land_wombat, land_porcupine, land_koala, land_anteater],
                "animalName": land_lynx
            },
            {
                "id": 4,
                "question": "My skin on the head is so tight that it barely moves when I run, helping me stay balanced. Who am I?",
                "options": [land_giraffe, land_elephant, land_camel, land_wombat, land_meerkat, land_civet],
                "animalName": land_giraffe
            },
            {
                "id": 5,
                "question": "I have a special dark patch around my eyes that works like built-in sunglasses, letting me stare directly at the sun. Who am I?",
                "options": [land_meerkat, land_sloth, land_beaver, land_civet, land_giraffe, land_elephant],
                "animalName": land_meerkat
            },
            {
                "id": 6,
                "question": "I have fingerprints so similar to humans they once confused crime-scene investigators. Who am I?",
                "options": [land_koala, land_sloth, land_civet, land_giraffe, land_elephant, land_beaver],
                "animalName": land_koala
            },
            {
                "id": 7,
                "question": "My stomach acts like a biological grinder because I swallow sand and soil to help break down my food. Who am I?",
                "options": [land_anteater, land_civet, land_sloth, land_beaver, land_porcupine, land_koala],
                "animalName": land_anteater
            },
            {
                "id": 8,
                "question": "My blood cells can stretch like rubber bands so I don’t get thick blood when dehydrated. Who am I?",
                "options": [land_camel, land_elephant, land_giraffe, land_beaver, land_sloth, land_porcupine],
                "animalName": land_camel
            },
            {
                "id": 9,
                "question": "My poo is used to make one of the most expensive coffees in the world…who am I?",
                "options": [land_civet, land_meerkat, land_lynx, land_wombat, land_beaver, land_anteater],
                "animalName": land_civet
            },
            {
                "id": 10,
                "question": "I produce a natural chemical that smells so much like vanilla that humans once used it as an ingredient in ice cream. Who am I?",
                "options": [land_beaver, land_wombat, land_lynx, land_koala, land_meerkat, land_anteater],
                "animalName": land_beaver
            },
            {
                "id": 11,
                "question": "I can digest plants so fibrous and chemically defended that almost no other mammal can survive eating them. Who am I?",
                "options": [land_porcupine, land_wombat, land_anteater, land_koala, land_meerkat, land_lynx],
                "animalName": land_porcupine
            },
            {
                "id": 12,
                "question": "I have Meissner-like corpuscles in my feet, allowing me to detect low-frequency vibrations through the ground long before you can hear them. Who am I?",
                "options": [land_elephant, land_giraffe, land_beaver, land_sloth, land_civet, land_anteater],
                "animalName": land_elephant
            }
        ]
    ],
    // Air animal questions
    air: [
        [
            {
                "id": 1,
                "question": "I am a super-fast hunter! I am the fastest bird in the whole world, diving through the sky like a rocket to catch my food. Who am I?",
                "options": [air_albatross, air_peregrine_falcon, air_pigeon, air_hummingbird, air_raven, air_woodpecker],
                "animalName": air_peregrine_falcon
            },
            {
                "id": 2,
                "question": "I am tiny, colorful, and I can flap my wings so fast they make a buzzing sound. I can even fly backwards and upside down! Who am I?",
                "options": [air_bumblebee, air_bat, air_hummingbird, air_kestrel, air_swift, air_stork],
                "animalName": air_hummingbird
            },
            {
                "id": 3,
                "question": "I am not a bird at all—I am a mammal! I have furry wings, I hang upside down to sleep, and I fly around at night. Who am I?",
                "options": [air_bald_eagle, air_bat, air_bumblebee, air_raven, air_swift, air_pigeon],
                "animalName": air_bat
            },
            {
                "id": 4,
                "question": "I use my strong, pointy beak like a jackhammer to tap-tap-tap on tree trunks to find tasty bugs hidden inside the wood. Who am I?",
                "options": [air_woodpecker, air_albatross, air_peregrine_falcon, air_kestrel, air_stork, air_bumblebee],
                "animalName": air_woodpecker
            },
            {
                "id": 5,
                "question": "I have a famous white head and a bright yellow beak. I am a large bird of prey that loves to scoop fish right out of the water! Who am I?",
                "options": [air_pigeon, air_raven, air_bald_eagle, air_swift, air_albatross, air_bat],
                "animalName": air_bald_eagle
            },
            {
                "id": 6,
                "question": "I am a fuzzy, black-and-yellow insect. I fly from flower to flower collecting sweet nectar and pollen to help plants grow. Who am I?",
                "options": [air_hummingbird, air_bumblebee, air_bat, air_woodpecker, air_stork, air_kestrel],
                "animalName": air_bumblebee
            },
            {
                "id": 7,
                "question": "I am a giant seabird with the biggest wingspan of any bird alive! I can glide over the ocean waves for hours without flapping my wings once. Who am I?",
                "options": [air_swift, air_peregrine_falcon, air_albatross, air_pigeon, air_raven, air_bald_eagle],
                "animalName": air_albatross
            },
            {
                "id": 8,
                "question": "I am a large, tall bird with very long legs and a big beak. I am famous for building massive stick nests on top of chimneys and poles! Who am I?",
                "options": [air_kestrel, air_stork, air_woodpecker, air_hummingbird, air_bat, air_bumblebee],
                "animalName": air_stork
            }
        ],
        // Medium questions
        [
            {
                "id": 1,
                "question": "I can glide for hours without flapping my wings, using air currents to travel enormous distances. Who am I?",
                "options": [air_albatross, air_swift, air_stork, air_raven, air_kestrel, air_bald_eagle],
                "animalName": air_albatross
            },
            {
                "id": 2,
                "question": "I build nests so large and heavy that they can weigh more than a grown human. Who am I?",
                "options": [air_bald_eagle, air_stork, air_raven, air_pigeon, air_kestrel, air_woodpecker],
                "animalName": air_bald_eagle
            },
            {
                "id": 3,
                "question": "I am the only mammal capable of true powered flight. Who am I?",
                "options": [air_bat, air_swift, air_hummingbird, air_kestrel, air_raven, air_pigeon],
                "animalName": air_bat
            },
            {
                "id": 4,
                "question": "I beat my wings in a special pattern that lets me fly even though my body is unusually heavy for my size. Who am I?",
                "options": [air_bumblebee, air_hummingbird, air_swift, air_pigeon, air_raven, air_woodpecker],
                "animalName": air_bumblebee
            },
            {
                "id": 5,
                "question": "I can hover in mid‑air and even fly backwards thanks to my unique wing rotation. Who am I?",
                "options": [air_hummingbird, air_kestrel, air_swift, air_bumblebee, air_pigeon, air_stork],
                "animalName": air_hummingbird
            },
            {
                "id": 6,
                "question": "I can stay perfectly still in the air while hunting by adjusting tiny movements in my wings and tail. Who am I?",
                "options": [air_kestrel, air_hummingbird, air_swift, air_raven, air_bald_eagle, air_stork],
                "animalName": air_kestrel
            },
            {
                "id": 7,
                "question": "I am the fastest animal on Earth, reaching extreme speeds during a special hunting dive. Who am I?",
                "options": [air_peregrine_falcon, air_swift, air_bald_eagle, air_kestrel, air_raven, air_stork],
                "animalName": air_peregrine_falcon
            },
            {
                "id": 8,
                "question": "I produce a nutrient‑rich ‘milk’ in my throat to feed my young, helping them grow unusually fast. Who am I?",
                "options": [air_pigeon, air_raven, air_bald_eagle, air_swift, air_stork, air_woodpecker],
                "animalName": air_pigeon
            },
            {
                "id": 9,
                "question": "I can solve puzzles, use tools, and even plan ahead — abilities once thought to belong only to primates. Who am I?",
                "options": [air_raven, air_pigeon, air_bald_eagle, air_kestrel, air_swift, air_stork],
                "animalName": air_raven
            },
            {
                "id": 10,
                "question": "I communicate using loud clattering sounds made entirely with my beak, which can be heard from long distances and used in complex social interactions.",
                "options": [air_stork, air_albatross, air_swift, air_raven, air_bald_eagle, air_pigeon],
                "animalName": air_stork
            },
            {
                "id": 11,
                "question": "I can stay in the air for months at a time, even sleeping while flying. Who am I?",
                "options": [air_swift, air_albatross, air_hummingbird, air_kestrel, air_raven, air_bumblebee],
                "animalName": air_swift
            },
            {
                "id": 12,
                "question": "My brain has special shock‑absorbing adaptations. Who am I?",
                "options": [air_woodpecker, air_raven, air_pigeon, air_kestrel, air_stork, air_bald_eagle],
                "animalName": air_woodpecker
            }
        ],
        // Hard questions
        [
            {
                "id": 1,
                "question": "I can fall asleep while gliding for hours over the ocean, waking only to adjust my wings. Who am I?",
                "options": [air_albatross, air_pigeon, air_raven, air_bumblebee, air_woodpecker, air_stork],
                "animalName": air_albatross
            },
            {
                "id": 2,
                "question": "I can spot prey from nearly two miles away thanks to extreme long‑distance vision. Who am I?",
                "options": [air_bald_eagle, air_pigeon, air_raven, air_stork, air_bumblebee, air_woodpecker],
                "animalName": air_bald_eagle
            },
            {
                "id": 3,
                "question": "I can produce ultrasonic calls so loud they exceed the volume of a jet engine, yet humans hear none of it. Who am I?",
                "options": [air_bat, air_pigeon, air_raven, air_stork, air_bumblebee, air_hummingbird],
                "animalName": air_bat
            },
            {
                "id": 4,
                "question": "I generate so much heat during flight that I must constantly cool myself to avoid overheating. Who am I?",
                "options": [air_bumblebee, air_pigeon, air_raven, air_stork, air_woodpecker, air_swift],
                "animalName": air_bumblebee
            },
            {
                "id": 5,
                "question": "My wings beat so fast they create tiny tornado‑like vortices that help keep me airborne. Who am I?",
                "options": [air_hummingbird, air_pigeon, air_raven, air_stork, air_bumblebee, air_woodpecker],
                "animalName": air_hummingbird
            },
            {
                "id": 6,
                "question": "I can see ultraviolet patterns on animals that humans cannot detect, giving me a secret visual world. Who am I?",
                "options": [air_kestrel, air_pigeon, air_raven, air_stork, air_bumblebee, air_woodpecker],
                "animalName": air_kestrel
            },
            {
                "id": 7,
                "question": "My bones act like built‑in air brakes, stopping me from breaking apart when I dive at extreme speeds. Who am I?",
                "options": [air_peregrine_falcon, air_pigeon, air_raven, air_stork, air_bumblebee, air_woodpecker],
                "animalName": air_peregrine_falcon
            },
            {
                "id": 8,
                "question": "My babies have a unique name — they’re called squabs — and they stay hidden so well that most people never see them. Who am I?",
                "options": [air_pigeon, air_raven, air_bumblebee, air_stork, air_swift, air_hummingbird],
                "animalName": air_pigeon
            },
            {
                "id": 9,
                "question": "After leaving the nest, I often return in later years to help my parents raise their next chicks — a rare family teamwork behaviour. Who am I?",
                "options": [air_raven, air_pigeon, air_bumblebee, air_stork, air_swift, air_hummingbird],
                "animalName": air_raven
            },
            {
                "id": 10,
                "question": "I communicate by loudly clattering my beak because I barely have the ability to make normal bird calls. Who am I?",
                "options": [air_stork, air_pigeon, air_raven, air_bumblebee, air_swift, air_woodpecker],
                "animalName": air_stork
            },
            {
                "id": 11,
                "question": "I spend so much of my life flying that my legs are almost useless for walking. Who am I?",
                "options": [air_swift, air_pigeon, air_raven, air_bumblebee, air_stork, air_hummingbird],
                "animalName": air_swift
            },
            {
                "id": 12,
                "question": "I slam my head into solid wood up to 20 times a second without brain damage thanks to shock‑absorbing tissue. Who am I?",
                "options": [air_woodpecker, air_pigeon, air_raven, air_bumblebee, air_stork, air_swift],
                "animalName": air_woodpecker
            }
        ]
    ]
};

const bonusQuestions = [
    {
        "id": 1,
        "question": "I can sleep while flying for hours over the open ocean, gliding thousands of miles without landing. Who am I?",
        "options": [air_albatross, air_swift, air_bald_eagle, land_camel, ocean_manta_ray, land_koala],
        "animalName": air_albatross
    },
    {
        "id": 2,
        "question": "My bite is so powerful it can crush bones and split open frozen carcasses, thanks to reinforced jaw muscles. Who am I?",
        "options": [land_lynx, land_civet, land_meerkat, air_peregrine_falcon, ocean_orca, land_porcupine],
        "animalName": land_lynx
    },
    {
        "id": 3,
        "question": "I can change the colour and pattern of my skin in less than a second, even mimicking moving stripes and ripples. Who am I?",
        "options": [ocean_cuttlefish, ocean_clownfish, ocean_manta_ray, land_civet, air_kestrel, land_sloth],
        "animalName": ocean_cuttlefish
    },
    {
        "id": 4,
        "question": "I can rotate my stomach inside out to clean it, then pull it back in again without injury. Who am I?",
        "options": [ocean_sea_urchin, ocean_starfish, ocean_manta_ray, land_porcupine, air_stork, land_wombat],
        "animalName": ocean_sea_urchin
    },
    {
        "id": 5,
        "question": "I can squeeze my entire body through a hole the size of a coin because I have no hard shell or bones. Who am I?",
        "options": [ocean_blob_fish, ocean_cuttlefish, ocean_coconut_crab, land_meerkat, air_swift, land_koala],
        "animalName": ocean_blob_fish
    },
    {
        "id": 6,
        "question": "A famous luxury perfume — including the original Chanel No. 5 — once relied on a naturally produced scent from me, valued for its warm, musky sweetness. Who am I?",
        "options": [land_civet, land_meerkat, land_koala, air_pigeon, land_porcupine, air_bumblebee],
        "animalName": land_civet
    }
];

const themeNameMap = new Map([
    ["sea", "Sea"],
    ["land", "Land"],
    ["air", "Air"]
]);

const difficultyNames = ["Easy", "Medium", "Hard"];

const difficultyMap = new Map([
    ["easy", 0],
    ["medium", 1],
    ["hard", 2]
]);

// Game state
let currentTheme = "";
let currentDifficultyIndex = 0;
let currentQuestions = [];
let currentQuestionIndex = 0;
let currentScore;

/**
 *
 * @param {*} bound - The maximum return value + 1
 * @returns An integer between 0 and bound-1
 */
function randomInteger(bound) {
    return Math.floor(Math.random() * bound);
}

/**
 *
 * @param {*} as - an array to copy and shuffle
 * @returns a shuffled, shallow copy of the array
 */
function shuffle(as) {
    let bs = Array.from(as);

    function swap(j, k) {
        const temp = bs[j];
        bs[j] = bs[k];
        bs[k] = temp;
    }

    for (let i = bs.length - 1; i > 0; --i) {
        const source = randomInteger(i + 1);
        swap(source, i);
    }

    return bs;
}

function showSection(id) {
    const sections = ["hero", "set-selection", "difficulty-selection", "landing-stats", "landing-stats", "game-section", "round-complete-section"];
    for (const section of sections) {
        if (section === id) {
            document.getElementById(section).classList.remove("hidden");
        }
    }
    for (const section of sections) {
        if (section !== id) {
            document.getElementById(section).classList.add("hidden");
        }
    }
}

function displayQuestion(parent, question) {
    document.getElementById("question-count").textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;

    const progressBar = parent.querySelector(".progress-bar");
    const percent = 100 * (currentQuestionIndex + 1) / currentQuestions.length;
    progressBar.style.width = `${percent}%`;
    progressBar.setAttribute("aria-valuenow", percent);

    parent.querySelector(".clue-text").textContent = question.question;

    document.getElementById("score-value").textContent = currentScore;

    // Shuffle the options so they are displayed in a different order each time
    const options = shuffle(question.options);

    const buttons = parent.querySelectorAll(".answer-option-btn");
    for (let i = 0; i !== buttons.length; ++i) {
        const button = buttons[i];
        const creature = options[i];
        button.dataset.answer = creature;
        const url = `./assets/images/${creature.replace("-", "/")}.webp`;
        button.querySelector("img").src = url;
        button.querySelector(".answer-name").textContent = animalNameMap.get(creature);
    }
}

function initialiseListeners(parent) {
    const buttons = parent.querySelectorAll(".answer-option-btn");
    for (const button of buttons) {
        button.addEventListener("click", answerClick);
    }
    const difficultyButtons = document.querySelectorAll("#difficulty-selection button");
    for (const button of difficultyButtons) {
        button.addEventListener("click", clickDifficulty)
    }
    const themes = document.querySelectorAll(".theme-card");
    for (const theme of themes) {
        theme.addEventListener("click", clickTheme);
    }
    document.getElementById("play-again-btn").addEventListener("click", () => { startGame(currentTheme); });
    document.getElementById("choose-set-btn").addEventListener("click", () => { showSection("difficulty-selection"); });
    document.getElementById("restart-btn").addEventListener("click", () => { startGame(currentTheme); });
}

function clickTheme(e) {
    const cardElement = e.currentTarget;
    startGame(cardElement.dataset.set);
}

function clickDifficulty(e) {
    const button = e.currentTarget;
    currentDifficultyIndex = difficultyMap.get(button.dataset.difficulty);
    showSection("set-selection");
}

function answerClick(e) {
    if (currentQuestionIndex < currentQuestions.length) {
        const button = e.currentTarget;
        const answer = button.dataset.answer;
        if (answer === currentQuestions[currentQuestionIndex].animalName) {
            correctAnswer(button);
        } else {
            wrongAnswer(button);
        }
    }
}

function wrongAnswer(button) {
    showFeedback(button, "answer-incorrect");
}

function correctAnswer(button) {
    currentScore++;
    document.getElementById("score-value").textContent = currentScore;
    showFeedback(button, "answer-correct");
}

function showFeedback(button, feedbackClass) {
    const buttons = button.parentElement.parentElement.querySelectorAll("button");
    for (const but of buttons) {
        but.setAttribute("disabled", "");
    }
    button.classList.add(feedbackClass);
    window.setTimeout(() => {
        button.classList.remove(feedbackClass);
        for (const but of buttons) {
            but.removeAttribute("disabled");
        }
        nextQuestion();
    }, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex === currentQuestions.length) {
        gameOver();
    } else {
        displayQuestion(document.getElementById("game-section"), currentQuestions[currentQuestionIndex]);
    }
}

function gameOver() {
    document.getElementById("final-score").textContent = `${currentScore * 10}`;
    document.getElementById("final-correct").textContent = `${currentScore} / ${currentQuestions.length}`;
    showSection("round-complete-section");
}

function startGame(theme) {
    document.getElementById("theme-value").textContent = themeNameMap.get(theme);
    document.getElementById("difficulty-value").textContent = difficultyNames[currentDifficultyIndex];

    currentTheme = theme;
    currentQuestions = shuffle(questions[theme][currentDifficultyIndex]).slice(0, 8);
    currentQuestionIndex = 0;
    currentScore = 0;

    displayQuestion(document.getElementById("game-section"), currentQuestions[currentQuestionIndex]);

    showSection("game-section");
}

initialiseListeners(document.getElementById("game-section"));
showSection("difficulty-selection");
