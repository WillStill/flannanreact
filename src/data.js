// Islands
import _BronaCleit from './images/BronaCleit.jpg'
import _EileanGhobha from './images/EileanGhobha.jpg'
import _EileanMor from './images/EileanMor.jpg'
import _EileanTaighe from './images/EileanTaighe.jpg'
import _Roaireim from './images/Roaireim.jpg'
import _SgeirTomain from './images/SgeirTomain.jpg'
import _Soraidh from './images/Soraidh.jpg'

// Gallery
import _EileanMorCove from './images/EileanMorCove.jpg'
import _EileanGhobhaandRoareim from './images/EileanGhobhaandRoareim.jpg'
import _EileanMorTip from './images/EileanMorTip.jpg'
import _Eilean_a_Ghobha_and_Roareim from './images/Eilean_a_Ghobha_and_Roareim.jpg'
import _FlannanMap from './images/FlannanMap.jpg'
import _OldShieling from './images/OldShieling.jpg'
import _Path from './images/Path.jpg'
import _RoundingBronaCleit from './images/RoundingBronaCleit.jpg'
import _SoraidhWater from './images/SoraidhWater.jpg'

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
                name: 'Eilean Mòr',
                enName: '(“Big Isle”)',
                desc: 'Eilean Mòr remains the last inhabited island in the St Flannan archipelago, with a population of one lighthouse keeper. The lighthouse is the only modern infrastructure found on the archipelago. The building pokes its head above the peak of the island, surrounded by sheer walls and steep heaths. The lighthouse itself towers above a stone chapel found down the hill, sometimes confused for an open mausoleum. The eastern side of Eilean Mòr has a small cove.',
                size: '43 acres',
                imageURL: _EileanMor,
                bgImageURL: _EileanMorTip
            },
            {
                id: 1,
                name: 'Eilean Taighe',
                enName: '(“House Isle”)',
                desc: 'Eilean Taighe is located south of Eilean Mòr, separated only by rocky outcroppings and sea. As the name implies, the island holds a majority of the bothies found across the archipelago. Again, the stone bothies are often confused for open graves of residents in the 7th century. The grassy ledges make homes for the Fulmars spread across the Northern Isles.',
                size: '',
                imageURL: _EileanTaighe,
                bgImageURL: _Path
            }
        ]
    },
    {'Southern Isles':
        [
            {
                id: 2,
                name: 'Soraidh',
                enName: '',
                desc: 'The Soraidh isle is the most eastward reaching of the Southern group. North of Sgeir Tomain, this grass-topped isle is residence to the flocks of birds that call it home. Common puffins claim the rocky cliff sides whereas petrels and gulls nest in the tall grasses. At times, onlookers can spot a goldeneye duck that calls the island home.',
                size: '',
                imageURL: _Soraidh,
                bgImageURL: _SoraidhWater
            },
            {
                id: 3,
                name: 'Sgeir Tomain',
                enName: '',
                desc: 'Much like its northern sibling, Sgeir Tomain is home to an assortment of birds. A weathered circular stone foundation lingers on a flat patch of land. Storm Petrels use the surrounding stone debris as shelters, burrowing between the rocks.',
                size: '',
                imageURL: _SgeirTomain,
                bgImageURL: _EileanMorCove
            }
        ]
    },
    {'Western Isles':
        [
            {
                id: 4,
                name: 'Eilean a\' Gobha',
                enName: '(“Isle of the Blacksmith”)',
                desc: 'Fitting for the name given to it, Eilean a\' Gobha holds the more recently constructed bothy, occupied by a smith during the construction of the lighthouse. The bothy now remains unoccupied, with most possessions having been left behind to collect dust. The island lies southeast of Roaireim, and is aptly described as being a grass-topped plateau.',
                size: '',
                imageURL: _EileanGhobha,
                bgImageURL: _OldShieling
            },
            {
                id: 5,
                name: 'Roaireim',
                enName: '',
                desc: 'The island of Roaireim contains the remnants of a broch, or a stone roundhouse. The half-fallen monument was more recently converted into a workshop for a smith during the construction of the Lighthouse. The island includes a natural stone arch, where a colony of gannets take hold.',
                size: '',
                imageURL: _Roaireim,
                bgImageURL: _EileanGhobhaandRoareim
            },
            {
                id: 6,
                name: 'Bròna Cleit',
                enName: '(“Sad Sunk Rock”)',
                desc: 'An island of rock, Bròna Cleit juts into the sky as a place for Seabirds. Gulls and Petrels make use of the nearby waters for fish.',
                size: '',
                imageURL: _BronaCleit,
                bgImageURL: _RoundingBronaCleit
            }
        ]
    }
]