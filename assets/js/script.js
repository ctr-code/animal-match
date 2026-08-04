
// These correspond to the image file names
const air_albatross = "air-albatross";
const air_bald_eagle = "air-bald-eagle";
const air_bat = "air-bat";
const air_bumblebee = "air-bumblebee";
const air_hummingbird = "air-hummingbird";
const air_kestrel = "air-kestrel";
const air_peregrine_falcon = "air-peregrin-falcon";
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
    sea: [
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
    // Land animal questions
    land: [
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
    // Air animal questions
    air: [
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
    ]
};

    }
    }
    }
