// Islands
import _BronaCleit from './images/BronaCleit.jpg'
import _EileanGhobha from './images/EileanGhobha.jpg'
import _EileanMor from './images/EileanMor.jpg'
import _EileanTaighe from './images/EileanTaighe.jpg'
import _EileanTaigheFlowers from './images/EileanTaigheFlowers.jpg'
import _Rhodorheim from './images/Roaireim.jpg'
import _RhodorheimArches from './images/RoaireimArches.jpg'
import _SgeirTomain from './images/BetweenSoraighandSgeirToman.jpg'
import _Soray from './images/Soraidh.jpg'
import _SgeirBheag from './images/neilgrandison/BigIslandLeftSgeireBheagMiddleSgeireMoireRight.jpg'
import _SgeireMoire from './images/Flannan_Isles,_waves_at_the_foot_of_Làmh_an_Sgeir_Mhòir_-_geograph.org.uk_-_3201895.jpg'


// Gallery
import _EileanMorCove from './images/EileanMorCove.jpg'
import _SealsPoolandRoareim from './images/SealspoolandRoareim.jpg'
import _EileanMorTip from './images/Flannan_Isles,_cairn_and_Roaiream_view_-_geograph.org.uk_-_3203436.jpg'
import _FlannanMap from './images/FlannanMap.jpg'
import _OldShieling from './images/OldShieling.jpg'
import _Path from './images/Path.jpg'
import _RoundingBronaCleit from './images/RoundingBronaCleit.jpg'
import _SorayWater from './images/SoraidhWater.jpg'


import _WesternIsles from './images/neilgrandison/BigIsleLookingOutRhodorheimRightBronaCleitMidEileanaGhobhaLeft.jpg'
import _SorayDistance from './images/neilgrandison/BigIlseLookingOutHouseIsleLeftSorayRight.jpg'

// const isles = [
//     'Map of Flannan Isles or Seven Hunters: A lighthouse built in 1899 stands on the peak of Eilean Mor, the largest island of the island group. FlannanMap.jpg',
//     'Eilean Mor: The largest island of the group with the lighthouse peaking over the top. EileanMor.jpg',
//     'Island Cove: A shallow cove on the side of one of the islands. EileanMorCove.jpg',
//     'Island Path: A path leading up the side of one of the islands. Most likely created during the construction of the lighthouse on Eilean Mor. Path.jpg'
// ];
//
// export default function List() {
//     const listItems = isles.map(island =>
//         <li>{island}</li>
//     );
//     return <ul>{listItems}</ul>;
// }

export const isles = [
    {'Northern Isles':
        [
            {
                id: 0,
                osname: 'Eilean Mòr',
                enName: 'Big Isle',
                aliases: '',
                desc: 'Eilean Mòr remains the last inhabited island in the St Flannan archipelago, with a population of one lighthouse keeper. The lighthouse is the only modern infrastructure found on the archipelago and towers above a small stone chapel found a little further down the hill. The building pokes its head above the dual peaks of the island, surrounded by sheer walls and steep heaths.',
                size: '43 Acres',
                category: 'Isle',

                imageURL: _EileanMor,
                imageAlt: '',
                caption: '',
                bgImageURL: _EileanMorTip
            },
            {
                id: 1,
                osname: 'Eilean Tighe',
                enName: 'House Isle',
                aliases: '',
                desc: 'Eilean Tighe is located south of Eilean Mòr, separated by the minor rocky outcroppings "Làmh na Sgeir Bheag", "Làmh na Sgeir Moire", and sea. As the name implies, the island holds the most bothies on any island found across the archipelago. Because of the collapsed stones and ruined state of the bothies, the stones are sometimes confused for graves of residents from the 7th century. The grassy ledges make homes for the Fulmars spread across the Northern Isles. The eastern side of Eilean Taighe has a small cove aptly named "Geodh\' an Truillich" (loosely translating to "Useless Cove" in english).',
                size: '',
                category: 'Isle',

                imageURL: _EileanTaigheFlowers,
                imageAlt: '',
                caption: '',
                bgImageURL: _Path
            },
            {
                id: 2,
                osname: 'Dearc na Sgeir',
                enName: '',
                aliases: '',
                desc: 'A shallow reef connects Eilean Mòr and the bare, jagged stones of Dearc na Sgeir.',
                size: '',
                category: 'Rocky Outcrop',

                imageURL: '',
                imageAlt: '',
                caption: '',
                bgImageURL: _Path
            },
            {
                id: 3,
                osname: 'Làmh a\' Sgeir Bheag',
                enName: 'The Little Hand of the Reef',
                aliases: '',
                desc: 'Surrounded by rocky shoals, Làmh a\' Sgeir Bheag is the smaller of the two sibling masses between Eilean Mòr and Eilean Taige. The closely laid reef presents a hazard to ships that dock by the eastern landing stage.',
                size: '',
                category: 'Islet',

                imageURL: _SgeirBheag,
                imageAlt: '',
                caption: '',
                bgImageURL: _Path
            },
            {
                id: 4,
                osname: 'Làmh na Sgeire Mòire',
                enName: 'The Large Hand of the Reef',
                aliases: '',
                desc: 'The larger of the two sibling land masses, Làmh na Sgeire Mòire aids in the blockage between the larger isles. Reefs part towards the southern side to form a narrow canal where light vessels may pass between Eilean Mòr and Eilean Taige.',
                size: '',
                category: 'Islet',

                imageURL: _SgeireMoire,
                imageAlt: '',
                caption: '',
                bgImageURL: _Path
            },
            {
                id: 5,
                osname: 'Hamasgeir',
                enName: '',
                aliases: 'Thama Sgeir',
                desc: 'Hamasgeir lies south of Eilean Tighe, cupped by the house isle with steep sides and topped with algae.',
                size: '',
                category: 'Islet',

                imageURL: '',
                imageAlt: '',
                caption: '',
                bgImageURL: _Path
            },
            {
                id: 6,
                osname: 'Gealtaire Beg',
                enName: '',
                aliases: 'Gealtir-Beg',
                desc: 'Gealtir-Beg is a rocky outcropping off the east coast of the "House Isle". The main landmass is slightly larger than it\'s eastern sibling "Gealtir Mor," and remains just as unprotected.',
                size: '',
                category: 'Rocky Outcrop',

                imageURL: '',
                imageAlt: '',
                caption: '',
                bgImageURL: _Path
            },
            {
                id: 7,
                osname: 'Gealtaire Mòr',
                enName: '',
                aliases: 'Gealtir-Mor',
                desc: 'Of the many lone Flannan islands that break the blue ocean against their grey, rocky cliffs, Gealtir Mòr is by far the most lonesome. Gealtir Mòr stands as the most eastern of all the Flannan Isles and far too small to offer any protection against the sea.',
                size: '',
                category: 'Rocky Outcrop',

                imageURL: '',
                imageAlt: '',
                caption: '',
                bgImageURL: _Path
            },
        ]
    },
    {'Southern Isles':
        [
            {
                id: 8,
                osname: 'Soraigh',
                enName: '',
                aliases: 'Soray',
                desc: 'The Soraigh isle is the most north-reaching of the Southern group. North of Sgeir Toman, this grass-topped isle was once residence to those that occupied the now dilapidated bothies. Now, common puffins claim the rocky cliff sides whereas petrels and gulls nest in the tall grasses and collapsed stone huts. At times, onlookers may spot a goldeneye duck that inhabits the trio of islands.',
                size: '',
                category: 'Isle',

                imageURL: _SorayDistance,
                imageAlt: '',
                caption: '',
                bgImageURL: _SorayWater
            },
            {
                id: 9,
                osname: 'Sgeir Toman',
                enName: '',
                aliases: 'Sgeir Tomain',
                desc: 'Much like its northern sibling, Sgeir Toman is home to an assortment of birds. A weathered circular stone foundation lingers on a flat patch of land next to a still-standing bothy covered in algae. Storm Petrels use the hut and surrounding stone debris as shelters, burrowing between the rocks.',
                size: '',
                category: 'Isle',

                imageURL: _SgeirTomain,
                imageAlt: '',
                caption: '',
                bgImageURL: _EileanMorCove
            },
            {
                id: 10,
                osname: 'Sgeir Righinn',
                enName: '',
                aliases: '',
                desc: 'Southernmost of the Southern isles, this isle was deemed too narrow to be of use to the islands\' former residents. Some markings are found on the northern cliff-face, but study is difficult to pursue from the rocky shoals and proximity to "Toman". It\'s a suitable rocky cliff for the common birds, with little to nothing else of note.',
                size: '',
                category: 'Isle',

                imageURL: '',
                imageAlt: '',
                caption: '',
                bgImageURL: _EileanMorCove
            }
        ]
    },
    {'Western Isles':
        [
            {
                id: 11,
                osname: 'Eilean a\' Gobha',
                enName: 'Isle of the Blacksmith',
                aliases: '',
                desc: 'Fitting for the name given to it, Eilean a\' Gobha holds two bothies, one occupied by a smith during the 7th Century. The bothy now remains unoccupied, with most possessions having been left behind to collect dust. The island lies just south of Roaiream, and is aptly described as being a grass-topped plateau.',
                size: '',
                category: 'Isle',

                imageURL: _WesternIsles,
                imageAlt: '',
                caption: '',
                bgImageURL: _OldShieling
            },
            {
                id: 12,
                osname: 'Roaiream',
                enName: '',
                aliases: 'Rhodorheim',
                desc: 'The island of Roaiream contains the remnants of a broch, or a stone roundhouse, thought to house livestock in the 7th Century. It has since partially-collapsed similarly to most of the weather-worn bothies. The south-side of the isle also forms a natural stone arch nestled between the Seal\'s Pool.',
                size: '',
                category: 'Isle',

                imageURL: _RhodorheimArches,
                imageAlt: '',
                caption: '',
                bgImageURL: '',
            },
            {
                id: 13,
                osname: 'Bròna Cleit',
                enName: 'Sad Sunk Rock',
                aliases: '',
                desc: 'An island of rock that juts into the sky for gulls, petrels, and other seabirds to fish, not much more can be said about Bròna Cleit.',
                size: '',
                category: 'Islet',

                imageURL: _BronaCleit,
                imageAlt: '',
                caption: '',
                bgImageURL: _RoundingBronaCleit
            },
            {
                id: 14,
                osname: 'Poll nan Ròn',
                enName: 'Seal\'s Pool',
                aliases: '',
                desc: 'The island of Seal\'s Pool earns its name from the pool located on its northern side. The sheer cliff sides provide shade during the day, and during low tides it becomes an opportune place for the local seals.',
                size: '',
                category: 'Islet',

                imageURL: '',
                imageAlt: '',
                caption: '',
                bgImageURL: _RoundingBronaCleit
            }
        ]
    }
]