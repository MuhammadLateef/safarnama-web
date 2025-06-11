import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Hunza from "../assets/hunza/altitfort.jpeg";
import Hunza2 from "../assets/hunza/passuglacier.JPG";
import Hunza3 from "../assets/hunza/hunzaboritelake.JPG";
import Nagar from "../assets/nagar/rakaposhi1.jpg";
import Nagar1 from "../assets/nagar/hoparglacier1.jpg";
import Nagar2 from "../assets/nagar/rushLake2.jpg"
import Gilgit from "../assets/gilgit/Tormik_valley.jpeg";
import Gilgit5 from "../assets/gilgit/Tormik2.jpeg";
import Astore from "../assets/astore/minimarg.jpeg";
import Ghanche6 from "../assets/ghanche/khaplu7.png";
import khaplu1 from "../assets/ghanche/khaplu1.jpeg";
import khaplu2 from "../assets/ghanche/khaplu2.jpeg";
import Ghizer4 from "../assets/ghizer/phander-valley.jpg";
import Ghizer5 from "../assets/ghizer/phander-lake.jpg";
import Shigar from "../assets/shigar/shigar-fort.jpg";
import Shigar2 from "../assets/shigar/askole-village.jpg";
import Shigar5 from "../assets/shigar/Baltoro-Glacier.jpg";
import kharmang from "../assets/kharmang/Manthokha-waterfall.jpg";
import kharmang2 from "../assets/kharmang/ghanduslake.JPG";
import kharmang3 from "../assets/kharmang/Khamosh-Waterfall.jpg";
import Diamer from "../assets/diamer/fairy-meadows1.jpeg";
import Diamer2 from "../assets/diamer/fairy-meadows2.jpeg";
import Roundu from "../assets/roundu/tormik-valley.png"
import Deosai1 from "../assets/deosai/deosai1.png";
import Deosai2 from "../assets/deosai/deosai2.png";
import Deosai3 from "../assets/deosai/deosai3.png";

import {
    BashoImage3, BashoImage4, BashoImage5, BilamikValley1,
    BilamikValley2,

} from "../Index"
// You would typically fetch this data from an API
export const destinationData = {
    hunza: {
        title: "Hunza Valley",
        mainImage: Hunza,
        images: [Hunza3, Hunza2], // Add more images as needed
        history: `Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan. 
              The Hunza valley is situated at an elevation of 2,438 meters. 
              The territory of Hunza was an independent principality for centuries, ruled by the Mirs of Hunza.
              It was only in 1891 that the British gained control of Hunza and the neighboring valley of Nagar.
              Surrounded by some of the highest peaks in the world, Hunza is known for its scenic beauty, 
              long life expectancy of its residents, and the hospitality of the people.
              The valley is also famous for its apricot orchards, terraced fields, and historic landmarks like
              Baltit Fort and Altit Fort.`,
        attractions: [
            "Baltit Fort - A 700-year-old fort that once served as the residence of the Mir of Hunza",
            "Altit Fort - One of the oldest monuments in Gilgit-Baltistan, dating back over 1000 years",
            "Attabad Lake - A beautiful turquoise lake formed after a landslide in 2010",
            "Eagle's Nest - A viewpoint offering panoramic views of Hunza Valley",
            "Karimabad Bazaar - A marketplace famous for local handicrafts and gemstones",
            "Karimabad",
            "Borith Lake",
            "Khunjerab Pass",
            "Shimshal Pass",
            "Passu Cones",
            "Duiker Eagle Nest",
            "Husseini Suspension Bridge"
        ],
        culture: `The people of Hunza, known as Hunzakuts, speak Burushaski, Shina, and Wakhi languages.
             The majority of the population follows Ismaili Islam. The culture is rich with traditional
             music, dance, and festivals. The traditional Hunza house is made of stone and mud, with wooden
             frames. The cuisine includes chapati bread, fresh and dried fruits, especially apricots, and dishes
             made from buckwheat.`
    },
    nagar: {
        title: "Rakaposhi Base Camp",
        mainImage: Nagar,
        images: [Nagar1, Nagar2],
        history: `Nagar Valley, located in Gilgit-Baltistan, was formerly a princely state that existed until 1974.
             It shares its borders with the Hunza Valley and was historically its rival. The valley has a rich
             history of local rule under the Mirs of Nagar before coming under British influence in the late 19th century.`,
        attractions: [
            "Rakaposhi View Point - Offering stunning views of the mighty Rakaposhi peak",
            "Hopar Glacier - A beautiful glacier with nearby traditional villages",
            "Rush Lake - One of the highest alpine lakes in the world",
            "Traditional Nagar Villages - Experience the local lifestyle and architecture"
        ],
        culture: `The people of Nagar primarily speak Burushaski and practice Shia Islam. The traditional lifestyle
             revolves around agriculture and livestock. The valley is known for its skilled craftsmen who
             create beautiful wood carvings and traditional textiles.`
    },
    // Add similar detailed information for other destinations
    gilgit: {
        title: "Tormik valley",
        mainImage: Gilgit,
        images: [Gilgit, Gilgit5],
        history: `Tormik Valley is around a 3.5-hour drive from Jaglot-Skardu Road (JSR). From there, a scenic lake located deep in the valley requires a 3-hour hike to reach. It’s an ideal destination for nature lovers and trekking enthusiasts. Tormik is a panoramic valley located in the Subdivision Roundu of Skardu District. It lies along the Gilgit-Skardu link road, near the Subdivision Roundu headquarters, Dambudas. `,
        attractions: [
            "Stak Valley Skardu",
            "Roundu Valley Skardu - Gilgit Baltistan",
            "Bilamik Valley - The Best Tourist Destination in Skardu",
        ],
        culture: `The valley is famous for its lush green and breathtaking high-altitude area known as “Broq” in the local Balti language. Broq features beautiful green meadows, freshwater streams, springs, and forests filled with various types of plants.`
    },
    skardu: {
        title: "Skardu Valley",
        mainImage: BashoImage3,
        images: [BashoImage4, BashoImage5],
        history: `Skardu is the capital of Baltistan division and was part of the ancient kingdom of Little Tibet.
             The valley has been an important center for Tibetan Buddhism and later Islamic culture. It served
             as a gateway to the high mountains of the Karakoram range.`,
        attractions: [
            "Skardu Fort (Kharpocho) - An ancient fort overlooking the Skardu town",
            "Shangrila Resort - A beautiful resort with the famous Heart-Shaped Shangrila Lake",
            "Katpana Cold Desert - One of the highest cold deserts in the world",
            "Satpara Lake - A natural lake that supplies water to Skardu town"
        ],
        culture: `The people of Skardu primarily speak Balti, which is related to Tibetan, and practice Islam.
             The culture bears strong influences from Tibet, with unique architecture, cuisine, and traditional sports.`
    },
    astore: {
        title: "Minimarg valley",
        mainImage: Astore,
        images: [Astore],
        history: `Minimarg Astore Valley is located in Gilgit-Baltistan and was historically part of the state of Kashmir.
             It served as an important route connecting Kashmir and Gilgit. The valley has witnessed various
             cultural influences throughout its history.`,
        attractions: [
            "Rama Lake - A stunning alpine lake surrounded by meadows and forests",
            "Rama Meadows - Lush green meadows ideal for camping and experiencing nature",
            "Astore River - Known for trout fishing",
            "Chilam Chauki - A viewpoint offering panoramic views of the surrounding mountains"
        ],
        culture: `The people of Astore primarily speak Shina and practice Islam. The valley has a traditional
             lifestyle centered around agriculture and livestock. The locals are known for their hospitality
             and traditional music.`
    },
    "deosai-national-park": {
        title: "Deosai National Park",
        mainImage: Deosai1,
        images: [Deosai1, Deosai2, Deosai3],
        history: `Deosai National Park, known as the "Land of Giants" in local folklore, is one of the highest
             plateaus in the world. The park was established in 1993 primarily to protect the endangered
             Himalayan brown bear. The plateau has remained relatively untouched by human influence due to
             its harsh climate and remote location.`,
        attractions: [
            "Sheosar Lake - A pristine alpine lake at the heart of the plateau",
            "Himalayan Brown Bear - A chance to spot the endangered species in its natural habitat",
            "Wildflower Meadows - In summer, the plateau transforms into a carpet of colorful wildflowers",
            "Bird Watching - Home to numerous high-altitude bird species"
        ],
        culture: `While uninhabited due to harsh conditions, Deosai has cultural significance in local folklore
             and traditions. Nomadic herders from surrounding valleys bring their livestock to graze on the
             plateau during the brief summer months.`
    },
    ghanche: {
        title: "Ghanche District",
        mainImage: Ghanche6, // Using placeholder image, replace with actual Ghanche image
        images: [Ghanche6, khaplu1, khaplu2], // Add actual images when available
        history: `Ghanche is the easternmost district of Gilgit-Baltistan, Pakistan, bordering India.
             It was established as a district in 1977 and includes the historic Baltistan region.
             The name "Ghanche" comes from the Balti language, meaning "glacier," reflecting the 
             district's numerous glaciers and snow-capped mountains.`,
        attractions: [
            "Khaplu Palace - A restored former palace and fort of the Raja of Khaplu",
            "Hushe Valley - Gateway to famous peaks including K7, Masherbrum, and Laila Peak",
            "Chaqchan Mosque - One of the oldest mosques in the region dating to the 15th century",
            "Machulu Village - Traditional village with historic architecture",
            "Thalle Valley - Known for its natural beauty and traditional settlements"
        ],
        culture: `The people of Ghanche primarily speak Balti, a language related to Tibetan. 
             The district is known for its unique blend of Tibetan and Central Asian cultural influences.
             Traditional music, dance, and polo are important cultural elements. The architecture 
             features stone and wood buildings with distinctive Tibetan-influenced design elements.`
    },

    ghizer: {
        title: "Phander Valley",
        mainImage: Ghizer4, // Using placeholder image, replace with actual Ghizer image
        images: [Ghizer4, Ghizer5], // Add actual images when available
        history: `Ghizer district, located in the western part of Gilgit-Baltistan, derives its name 
             from the Gupis-Yasin valley. It was established as a separate district in 1974.
             The district has served as an important trade route connecting Gilgit with Chitral
             and has been influenced by various cultures throughout its history.`,
        attractions: [
            "Phander Lake - A stunning lake known for its turquoise waters",
            "Shandur Pass - Home to the highest polo ground in the world",
            "Yasin Valley - Known for its lush landscapes and historical significance",
            "Gupis Fort - A historic fort with strategic importance",
            "Ishkoman Valley - Famous for trout fishing and natural beauty"
        ],
        culture: `The people of Ghizer speak various languages including Khowar, Shina, and Burushaski.
             The district has diverse cultural influences due to its location as a crossroads between
             different regions. Traditional music, handicrafts, and the annual Shandur Polo Festival
             are significant cultural elements of the region.`
    },

    shigar: {
        title: "Shigar Fort",
        mainImage: Shigar,
        images: [Shigar, Shigar2, Shigar5], // Add actual images when available
        history: `Shigar district was formerly a small kingdom ruled by the Amacha dynasty before
             becoming part of the state of Jammu and Kashmir. It became a separate district in 2015.
             The valley has been an important stopping point for mountaineers heading to the Karakoram
             ranges and has a rich history of exploration and mountaineering expeditions.`,
        attractions: [
            "Shigar Fort (Fong-Khar Palace) - A 400-year-old fort restored as a heritage hotel",
            "Amburiq Mosque - One of the oldest wooden mosques in the region",
            "Askole Village - The last settlement before the wilderness of the Karakoram",
            "Shigar Cold Desert - A unique landscape of sand dunes surrounded by mountains",
            "Baltoro Glacier - One of the longest glaciers outside the polar regions"
        ],
        culture: `The people of Shigar speak Balti and practice Islam. The district has preserved
             traditional architectural styles with intricate wood carvings. The region is known
             for its unique cultural practices, traditional music, and handicrafts including
             woodwork and stone carving.`
    },

    kharmang: {
        title: "Manthoka waterfall",
        mainImage: kharmang, // Using placeholder image, replace with actual Kharmang image
        images: [kharmang3, kharmang2], // Add actual images when available
        history: `Kharmang district, located along the Line of Control with India, was established
             as a separate district in 2015. Historically, it was part of the Baltistan region and
             has archaeological sites showing Buddhist influence before the region converted to Islam
             in the 14th century.`,
        attractions: [
            "Manthoka Waterfall",
            "Khamosh Waterfall",
            "Mehdiabad - Administrative center with beautiful surroundings",
            "Olding Village - Known for traditional architecture and lifestyle",
            "Kharmang River Valley - Offering beautiful landscapes and hiking opportunities",
            "Ancient Buddhist rock carvings and petroglyphs",
            "Traditional agricultural terraces and irrigation systems"
        ],
        culture: `The residents of Kharmang primarily speak Balti and practice Islam. The district
             maintains traditional farming practices and architectural styles. The culture reflects
             strong influences from both Tibetan traditions and Islamic practices, creating a unique
             cultural identity.`
    },

    roundu: {
        title: "Tormik Valley",
        mainImage: BilamikValley2,
        images: [BilamikValley1,
            BilamikValley2,
            Roundu], // Add actual images when available
        history: `Roundu district, located along the banks of the Indus River, was established
             as a separate district in 2015. The area has historically been significant for its
             strategic location along ancient trade routes and has preserved many traditional
             aspects of life due to its relative isolation.`,
        attractions: [
            "Tormik Valley - Known for its untouched natural beauty",
            "Dambudas - Administrative center with scenic surroundings",
            "Stak Nala - A beautiful valley with traditional villages",
            "Roundu River - Offering fishing and rafting opportunities",
            "Traditional wooden mosques and cultural heritage sites"
        ],
        culture: `The people of Roundu primarily speak Shina and Balti languages and practice Islam.
             The district is known for its preserved traditional lifestyle, agricultural practices,
             and architectural styles that have remained relatively unchanged over generations.`
    },

    diamer: {
        title: "Fairy Meadows National Park",
        mainImage: Diamer, // Using placeholder image, replace with actual Diamer image
        images: [Diamer, Diamer2], // Add actual images when available
        history: `Fairy Meadows National Park is a breathtaking alpine destination located in the Diamer District of Gilgit-Baltistan, Pakistan, near the base camp of the mighty Nanga Parbat, the world’s ninth-highest mountain. Renowned for its lush green meadows, panoramic mountain views, and peaceful atmosphere, Fairy Meadows is one of the most Instagrammable tourist spots in Northern Pakistan.

This scenic valley is accessible via a jeep track from Raikot Bridge on the Karakoram Highway (KKH), followed by a short trek, making it a favorite among hiking and adventure lovers. The area offers unmatched views of Nanga Parbat's north face, making it a dream location for camping, landscape photography, drone videography, and nature retreats.

Whether you're planning a honeymoon in the mountains, an adventure-filled travel vlog, or a wedding shoot amidst nature, Fairy Meadows National Park delivers an unforgettable experience in the heart of Pakistan’s natural beauty.`,
        attractions: [
            "Fairy Meadows - A scenic meadow offering spectacular views of Nanga Parbat",
            "Nanga Parbat - The ninth highest mountain in the world at 8,126 meters",
            "Babusar Pass - A high mountain pass connecting Gilgit-Baltistan with Khyber Pakhtunkhwa",
            "Chilas - Administrative center with ancient rock carvings",
            "Thalichi Valley - Known for its natural beauty and traditional lifestyle"
        ],
        culture: `The people of Diamer primarily speak Shina and Kohistani languages and practice Islam.
             The district has a strong tribal structure and traditional lifestyle. The region is known
             for its unique cultural practices, traditional music, and handicrafts. The culture reflects
             influences from neighboring regions while maintaining its distinct identity.`
    }
};

const DestinationDetail = () => {
    const { slug } = useParams();
    const [destination, setDestination] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating data fetch
        setTimeout(() => {
            if (destinationData[slug]) {
                setDestination(destinationData[slug]);
            }
            setLoading(false);
        }, 300);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
        );
    }

    if (!destination) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-800">Destination Not Found</h1>
                <p className="text-gray-600 mt-4">The destination you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative h-[550px] w-full overflow-hidden">
                <img
                    src={destination.mainImage}
                    alt={destination.title}
                    className="w-full h-full object-cover mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="container mx-auto max-w-[90%] pb-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">{destination.title}</h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto max-w-[90%] py-12">
                {/* History Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">History</h2>
                    <p className="text-gray-700 leading-relaxed">{destination.history}</p>
                </div>

                {/* Gallery Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {destination.images.map((image, index) => (
                            <div key={index} className="relative rounded-md overflow-hidden shadow hover:shadow-sm">
                                <div className="group transition-transform duration-200 hover:scale-105">
                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                                    <div className="aspect-[3/2]">
                                        <img
                                            src={image}
                                            alt={`${destination.title} - ${index + 1}`}
                                            className="w-full h-full object-cover transition duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>

                {/* Attractions Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Attractions</h2>
                    <ul className="space-y-2">
                        {destination.attractions.map((attraction, index) => (
                            <li key={index} className="flex items-start">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 mr-3 mt-1">
                                    {index + 1}
                                </span>
                                <span className="text-gray-700">{attraction}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Culture Section */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Culture</h2>
                    <p className="text-gray-700 leading-relaxed">{destination.culture}</p>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetail;