import { Component } from "react";
import {VectorMap} from "react-jvectormap"
// import {VectorMap} from '@south-paw/react-vector-maps'
// import world from '../world.json';

class Map extends Component {
    render () {
        return (
            <section id='map'>
                <div className='row map'>
                    <h1>My FootPrint</h1>
                    
                </div>
                <div style={{height: 500}}>
                    <VectorMap map={'world_mill'}
                            backgroundColor='#383f47'
                            ref="map"
                            containerStyle={{
                                width: '100%',
                                height: '100%',
                            }}
                            markerStyle={{
                                'initial': {
                                  'fill': '#F8E23B',
                                  'stroke': '#383f47'
                                }
                            }}
                            containerClassName="map"
                            markers={{
                                // China
                                Harbin: { latLng: [45.80, 126.53], name: 'Harbin' },
                                Beijing: { latLng: [39.56, 116.2], name: 'Beijing'},
                                Huludao: {latLng: [40.71, 120.84], name: 'Huludao'},
                                Beidaihe: {latLng: [39.83, 119.48], name: 'Beidaihe'},
                                Tianjin: {latLng: [39.08, 117.20], name: 'Tianjin'},
                                Nanle: {latLng: [36.07, 115.20], name: 'Nanle'},
                                Xian: {latLng: [34.34, 108.94], name: 'Xi\'an'},
                                Taiyuan: {latLng: [37.87, 112.55], name: 'Taiyuan'},
                                Datong: {latLng: [40.076763, 113.30], name: 'Datong'},
                                Xiamen: {latLng: [24.479664, 118.089204], name: 'Xiamen'},
                                Zhanjiang: {latLng: [21.270145, 110.356639], name: 'Zhanjiang'},
                                Haikou: {latLng: [20.044412, 110.198286], name: 'Haikou'},
                                Sanya: {latLng: [18.253135, 109.511772], name: 'Sanya'},
                                Shanghai: {latLng: [ 31.230372, 121.473662], name: 'Shanghai'},
                                Zhangjiakou: {latLng: [40.768493, 114.886252], name: 'Zhangjiakou'},
                                Suzhou: {latLng: [31.2974, 120.585728], name: 'Suzhou'},
                                Jiangyin: {latLng: [31.921345, 120.286129], name: 'Jiangyin'},
                                Nanjing: {latLng: [32.05957, 118.796682], name: 'Nanjing'},
                                Wuxi: {latLng: [31.491169, 120.31191], name: 'Wuxi'},
                                Rizhao: {latLng: [35.416734, 119.526925], name: 'Rizhao'},
                                Taian: {latLng: [36.200252, 117.087614], name: 'Tai\'an'},
                                Jinan: {latLng: [36.6512, 117.120098], name: 'Jinan'},
                                Qingdao: {latLng: [36.067131, 120.382621], name: 'Qingdao'},
                                Qufu: {latLng: [35.581108, 116.986526], name: 'Qufu'},
                                Linyi: {latLng: [35.104673, 118.356414], name: 'Linyi'},
                                Penglai: {latLng: [37.810661, 120.758848], name: 'Penglai'},
                                Yantai: {latLng: [37.464539, 121.447852], name: 'Yantai'},
                                Xining: {latLng: [36.617134, 101.778223], name: 'Xining'},
                                HongKong: {latLng: [22.277468, 114.171203], name: 'Hong Kong'},
                                Chengdu: {latLng: [30.572893, 104.066794], name: 'Chengdu'},
                                Emeishan: {latLng: [29.601198, 103.484503], name: 'Emeishan'},
                                Leshan: {latLng: [29.552115, 103.765678], name: 'Leshan'},
                                Lhasa: {latLng: [29.652341, 91.172148], name: 'Lhasa'},
                                Shigatse: {latLng: [29.266869, 88.880583], name: 'Shigatse'},
                                Nyingchi: {latLng: [29.649128, 94.36149], name: 'Nyingchi'},
                                Hangzhou: {latLng: [30.24692, 120.209789], name: 'Hangzhou'},
                                Jiaxing: {latLng: [30.746191, 120.75547], name: 'Jiaxing'},
                                // Singapore
                                Singapore: {latLng: [1.18, 103.51], name: 'Singapore'},
                                // Malysia
                                Kuala_Lumpur: {latLng: [3.13829, 101.687], name: 'Kuala Lumpur'},
                                // Indonesia
                                Bintan_Island: {latLng: [1.4, 104.30], name: 'Bintan Island'},
                                // Japan
                                Tokyo: {latLng: [35.69, 139.69], name: 'Tokyo'},
                                Osaka: {latLng: [34.6936, 135.50234], name: 'Osaka'},
                                Kyoto: {latLng: [35.01, 135.46], name: 'Kyoto'},
                                Nara: {latLng: [34.41, 135.47], name: 'Nara'},
                                Fuji: {latLng: [35.21, 138.43], name: 'Fuji'},
                                // Spain
                                Barcelona: {latLng: [41.22, 2.10], name: 'Barcelona'},
                                Zaragoza: {latLng: [41.6563, -0.876566], name: 'Zaragoza'},
                                Toledo: {latLng: [39.926333798108224, -4.046461787313006], name: 'Toledo'},
                                Madrid: {latLng: [40.23, -3.43], name: 'Madrid'},
                                Sevilla: {latLng: [37.23, -5.59], name: 'Sevilla'},
                                Cordoba: {latLng: [37.974345676378675, -4.796856559091659], name: 'Cordoba'},
                                Granada: {latLng: [37.20734481434533, -3.6017719398110835], name: 'Granada'},
                                Valencia: {latLng: [39.586488992449816, -0.3463932068634069], name: 'Valencia'},
                                // Portugal
                                Porto: {latLng: [41.09, -8.37], name: 'Porto'},
                                Coimbra: {latLng: [40.2115, -8.4292], name: 'Coimbra'},
                                Lisboa: {latLng: [38.44, -9.09], name: 'Lisboa'},
                                // the US
                                LA: {latLng: [34.07309088246899, -118.28784201072273], name: 'Los Angeles'},
                                SD: {latLng: [32.7769111638869, -117.11176083658366], name: 'San Diego'},
                                Washington: {latLng: [39.19812499629712, -76.90954571841594], name: 'Washington DC'},
                                Boston: {latLng: [42.700402476626934, -71.03618812737099], name: 'Boston'},
                                NYC: {latLng: [40.87143194109128, -73.98455387572004], name: 'New York'},
                                Philadelphia: {latLng: [40.12233596954707, -75.0789835401462], name: 'Philadelphia'},
                                Atlanta : {latLng: [33.753746, -84.386330], name: 'Atlanta'}, 
                                // Canada
                                Toronto: {latLng: [43.796362799124125, -79.34859848137614], name: 'Toronto'},
                                Kingston: {latLng: [44.233334, -76.500000], name: 'Kingston'},
                                Ottawa: {latLng: [45.52434244737212, -75.65265449677402], name: 'Ottawa'},
                                Niagara_Fall: {latLng: [43.19444118713787, -79.07511703686386], name: 'Niagara Falls'},
                                Montreal: {latLng: [45.695898023715735, -73.55973152084748], name: 'Montreal'},
                                Vancouver: {latLng: [49.246292, -123.116226], name: 'Vancouver'},
                                FlowerpotIsland: {latLng: [45.302443, -81.625432], name: 'Flowerpot Island'},
                                // Korea
                                Seoul: {latLng: [37.532600, 127.024612], name: 'Seoul'},
                            }}
                    />
                </div>
            </section>
        );
    }
    
}

export default Map;