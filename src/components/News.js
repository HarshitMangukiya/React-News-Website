import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';

  const News=(props)=> {

    // articles=[
    //     {
    //       "source": {
    //         "id": "reuters",
    //         "name": "Reuters"
    //       },
    //       "author": null,
    //       "title": "EXCLUSIVE Senior EU officials were targeted with Israeli spyware-sources - Reuters",
    //       "description": "Senior officials at the European Commission were targeted last year with spy software designed by an Israeli surveillance firm, according to two EU officials and documentation reviewed by Reuters.",
    //       "url": "https://www.reuters.com/technology/exclusive-senior-eu-officials-were-targeted-with-israeli-spyware-sources-2022-04-11/",
    //       "urlToImage": "https://www.reuters.com/resizer/kQ7wKGYm9yU8m93bgf_AcSbDWog=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/J4TKUFTXRNINTCKMVP4ANTTILU.jpg",
    //       "publishedAt": "2022-04-11T05:12:00Z",
    //       "content": "BRUSSELS/WASHINGTON - April 11 (Reuters) - Senior officials at the European Commission were targeted last year with spy software designed by an Israeli surveillance firm, according to two EU official… [+4462 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": "reuters",
    //         "name": "Reuters"
    //       },
    //       "author": null,
    //       "title": "Breakingviews - Shanghai Covid crisis puts China tech on eggshells - Reuters.com",
    //       "description": "Financial elites are confronting a once-unthinkable problem in modern China’s wealthiest city: widespread food shortages. Officials in Shanghai have called  on Meituan <a href=\"https://www.reuters.com/companies/3690.HK\" target=\"_blank\">(3690.HK)</a> and other…",
    //       "url": "https://www.reuters.com/breakingviews/shanghai-covid-crisis-puts-china-tech-eggshells-2022-04-11/",
    //       "urlToImage": "https://www.reuters.com/resizer/bcPhYZp2XkKDWbzWPTXdnZFNFts=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZTS73O4MNNIONM3LK5TFGD25Y4.jpg",
    //       "publishedAt": "2022-04-11T02:25:00Z",
    //       "content": "HONG KONG, April 11 (Reuters Breakingviews) - Financial elites are confronting a once-unthinkable problem in modern Chinas wealthiest city: widespread food shortages. Officials in Shanghai have calle… [+3343 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Hipertextual"
    //       },
    //       "author": "José María López",
    //       "title": "¿Es el teclado Dvorak el más rápido del mundo?",
    //       "description": "Una búsqueda rápida en internet de quién es la persona más rápida del mundo escribiendo con teclado nos mostrará con seguridad el nombre de Barbara Blackburn. Muchos artículos afirman que es, o fue, la mecanógrafa más rápida. Fallecida en 2008, su momento de …",
    //       "url": "https://hipertextual.com/2022/04/teclado-dvorak-record-guinness",
    //       "urlToImage": "https://i0.wp.com/hipertextual.com/wp-content/uploads/2022/03/pexels-pixabay-261510-typewriter-green-desktop-scaled.jpeg?fit=2560%2C1920&quality=50&strip=all&ssl=1",
    //       "publishedAt": "2022-04-11T03:20:00Z",
    //       "content": "Una búsqueda rápida en internet de quién es la persona más rápida del mundo escribiendo con teclado nos mostrará con seguridad el nombre de Barbara Blackburn. Muchos artículos afirman que es, o fue, … [+10470 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "heise online"
    //       },
    //       "author": "Martin Franz",
    //       "title": "Elektroauto MG5 Electric im ersten Fahrbericht: Allein gegen die E-SUVs",
    //       "description": "Derzeit bietet nur MG einen Kombi mit Elektroantrieb an. Bei einer ersten Probefahrt wollten wir wissen, ob das allein reicht, um auf dem Markt zu bestehen.",
    //       "url": "https://www.heise.de/tests/Elektroauto-MG5-Electric-im-ersten-Fahrbericht-Allein-gegen-die-E-SUVs-6655980.html",
    //       "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/4/4/3/8/5/2/01-c3127292d98cbeec.jpg",
    //       "publishedAt": "2022-04-11T05:29:00Z",
    //       "content": "Manch einer mag daran verzweifeln: Nach den Vans scheinen Kombis die nächsten Opfer der SUV-Welle zu werden. Die nimmt mit tiefergelegten Coupes, deren Dachlinien ebenfalls abgesenkt wurden, inzwisch… [+5246 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Yanko Design"
    //       },
    //       "author": "Sarang Sheth",
    //       "title": "The only Apple charger you need – the MagEZ Slider wirelessly charges ALL your Apple gadgets and even has a detachable power bank",
    //       "description": "The only Apple charger you need – the MagEZ Slider wirelessly charges ALL your Apple gadgets and even has a detachable power bankThis might just be the one charger to rule them all… Meet the PITAKA MagEZ Slider. It’s a charger. No, wait. It’s a wireless charg…",
    //       "url": "https://www.yankodesign.com/2022/04/10/the-only-apple-charger-you-need-the-magez-slider-wirelessly-charges-all-your-apple-gadgets-and-even-has-a-detachable-power-bank/",
    //       "urlToImage": "https://www.yankodesign.com/images/design_news/2022/04/clutter-free_while_charging_iPhone_Apple_Watch_AirPods_hero.jpg",
    //       "publishedAt": "2022-04-11T01:44:40Z",
    //       "content": "This might just be the one charger to rule them all…\r\nMeet the PITAKA MagEZ Slider. It’s a charger. No, wait. It’s a wireless charger. Uh, hold on. It’s a wireless charger with MagSafe capabilities. … [+3596 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Applesfera.com"
    //       },
    //       "author": "David Bernal Raspall",
    //       "title": "Seis consejos imprescindibles para hacer las mejores fotos con nuestro iPhone",
    //       "description": "La fotografía móvil va sustituyendo a la que realizamos con cámaras profesionales de forma inexorable. Es mucho lo que podemos hacer con las cámaras que llevamos en el bolsillo y con algunos consejos y trucos podemos darle aún una vuelta de tuerca más a los r…",
    //       "url": "https://www.applesfera.com/tutoriales/seis-consejos-imprescindibles-para-hacer-mejores-fotos-nuestro-iphone",
    //       "urlToImage": "https://i.blogs.es/494e48/hero/840_560.jpeg",
    //       "publishedAt": "2022-04-11T06:01:46Z",
    //       "content": "La fotografía móvil va sustituyendo a la que realizamos con cámaras profesionales de forma inexorable. Es mucho lo que podemos hacer con las cámaras que llevamos en el bolsillo y con algunos consejos… [+4525 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Golem.de"
    //       },
    //       "author": "Andreas Donath",
    //       "title": "iOS-Firmware: Apple Studio Display hat nach Update Probleme",
    //       "description": "Im Apple Studio Display arbeitet iOS, das nach einem Update Probleme macht. Nutzer wurden aufgefordert, ihr Display zur Reparatur zu bringen. (Display, Apple)",
    //       "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fios-firmware-apple-studio-display-hat-nach-update-probleme-2204-164532-rss.html&referer=https%3A%2F%2Ft.co%2Fbe2c2976ca",
    //       "urlToImage": null,
    //       "publishedAt": "2022-04-11T05:23:02Z",
    //       "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Les Numériques"
    //       },
    //       "author": "Victor Berghe",
    //       "title": "Actualité : Après Samsung, Google rejoint iFixit pour vous aider à réparer vous-même votre Pixel",
    //       "description": "Après Samsung, c’est au tour de Google de s’allier au programme de réparation DIY en partenariat avec iFixit. L'idée est de favoriser la réparation des smartphones.",
    //       "url": "https://www.lesnumeriques.com/telephone-portable/apres-samsung-google-rejoint-ifixit-pour-vous-aider-a-reparer-vous-meme-votre-pixel-n180301.html",
    //       "urlToImage": "https://dyw7ncnq1en5l.cloudfront.net/optim/news/18/180301/e2e6e280-google-rejoint-samsung-et-ifixit-pour-reparer-vous-meme-votre-pixel__1200_630__overflow.jpeg",
    //       "publishedAt": "2022-04-11T05:28:00Z",
    //       "content": "Après Samsung, cest au tour de Google de sallier au programme de réparation DIY en partenariat avec iFixit. L'idée est de favoriser la réparation des smartphones.\r\nEt si les constructeurs de smartpho… [+1978 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Cnbeta.com"
    //       },
    //       "author": "ugmbbc",
    //       "title": "武汉首家苹果Apple Store零售店即将开业 面积880平米",
    //       "description": "武汉果粉翘首以盼，Apple Store湖北首店终于要来了。4月11日，在苹果官网Apple Store搜索中，输入武汉，就会弹出“即将推出”的网页，显示其位于湖北省武汉市江汉区解放大道690号武汉国际广场购物中心C座2F。 阅读全文",
    //       "url": "https://www.cnbeta.com/articles/tech/1256785.htm",
    //       "urlToImage": "https://static.cnbetacdn.com/thumb/article/2022/0411/3bd3eedcab65e77.png",
    //       "publishedAt": "2022-04-11T01:32:18Z",
    //       "content": "Apple Store411Apple Store690C2F"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Quartz India"
    //       },
    //       "author": "Ananya Bhattacharya",
    //       "title": "You are not imagining it. Indian-origin CEOs indeed are everywhere",
    //       "description": "Google's Sundar Pichai and Microsoft's Satya Nadella are joined buy more Indian origin leaders like Raj Subramaniam, Leena Nair, and Arvind Krishna at the top.",
    //       "url": "https://qz.com/india/2148535/indian-origin-ceos-leading-american-companies/",
    //       "urlToImage": "https://cms.qz.com/wp-content/uploads/2022/03/2021-05-18T000000Z_1543221236_RC2HIN9OMT3X_RTRMADP_3_GOOGLE-DEVELOPERS-e1649644545234.jpg?quality=75&strip=all&w=1200&h=630&crop=1",
    //       "publishedAt": "2022-04-11T03:31:39Z",
    //       "content": "These days, if you fling a stone into Silicon Valley, you are most likely to hit an Indian-origin CEO.\r\nUntil a decade ago, there was only a handful of them, mostly in consumer goods, tech, and finan… [+7528 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": "al-jazeera-english",
    //         "name": "Al Jazeera English"
    //       },
    //       "author": "Al Jazeera",
    //       "title": "Hong Kong journalist arrested for alleged sedition: Reports",
    //       "description": "Allan Au faces up to one year in prison if found guilty under colonial-era law.",
    //       "url": "https://www.aljazeera.com/news/2022/4/11/hong-kong-journalist-arrested-for-alleged-sedition-reports",
    //       "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/01/2022-01-02T150342Z_1307213292_RC22OR9JBAPQ_RTRMADP_3_HONGKONG-SECURITY.jpg?resize=1200%2C630",
    //       "publishedAt": "2022-04-11T03:32:02Z",
    //       "content": "Hong Kong police have arrested veteran journalist Allan Au on charges of sedition, according to local media, making him the latest government critic to face possible jail time.\r\nCable channel Now TV … [+1651 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "GSMArena.com"
    //       },
    //       "author": "Prasad",
    //       "title": "OnePlus Bullets Wireless Z2 review",
    //       "description": "The Bullets Wireless Z2 is the latest pair of in-ear wireless earbuds from OnePlus. Unlike many of the company's recent launches, the Bullets Wireless Z2 return to the neckband design that the company started with in 2018. The Bullets Wireless Z2 is an entry-…",
    //       "url": "https://www.gsmarena.com/oneplus_bullets_wireless_z2_review-news-53903.php",
    //       "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/04/bullets-wireless-z2-review/-952x498w6/gsmarena_000.jpg",
    //       "publishedAt": "2022-04-11T02:44:01Z",
    //       "content": "The Bullets Wireless Z2 is the latest pair of in-ear wireless earbuds from OnePlus. Unlike many of the company's recent launches, the Bullets Wireless Z2 return to the neckband design that the compan… [+7517 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Deadline"
    //       },
    //       "author": "Erik Pedersen",
    //       "title": "Samuel L. Jackson & Walter Mosley Stayed Course For A Decade To Make ‘Last Days of Ptolemy Grey’ As TV Series: ‘Movies Are Short Stories; This Is A Novel” – Contenders TV",
    //       "description": "When it came to bringing The Last Days of Ptolemy Grey from the pages of Walter Mosley’s novel to screens on Apple TV+, the writer and star Samuel L. Jackson agree that the long haul – with over a decade of development – due to their commitment to telling the…",
    //       "url": "https://deadline.com/2022/04/samuel-l-jackson-walter-mosley-last-days-of-ptolemy-grey-video-interview-contenders-tv-1234999694/",
    //       "urlToImage": "https://deadline.com/wp-content/uploads/2022/04/The-Last-Days-of-Ptolemy-Grey-Contenders-TV-1.jpg?w=1024",
    //       "publishedAt": "2022-04-11T01:03:20Z",
    //       "content": "When it came to bringing The Last Days of Ptolemy Grey from the pages of Walter Mosley’s novel to screens on Apple TV+, the writer and star Samuel L. Jackson agree that the long haul – with over a de… [+3957 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Deadline"
    //       },
    //       "author": "Alexandra Del Rosario",
    //       "title": "‘Abbott Elementary’ EP Says Star & Creator Quinta Brunson Is “A Lifelong Student Of Comedy” – Contenders TV",
    //       "description": "Quinta Brunson said she knew that she and executive producers Randall Einhorn and Patrick Schumacker had something special with Abbott Elementary. Since it premiered, the ABC comedy has made waves on social media and gained a passionate following. “[The recep…",
    //       "url": "https://deadline.com/2022/04/abbott-elementary-quinta-brunson-video-interview-contenders-tv-1234998283/",
    //       "urlToImage": "https://deadline.com/wp-content/uploads/2022/04/1390731557.jpg?w=1024",
    //       "publishedAt": "2022-04-11T00:19:38Z",
    //       "content": "Quinta Brunson said she knew that she and executive producers Randall Einhorn and Patrick Schumacker had something special with Abbott Elementary. Since it premiered, the ABC comedy has made waves on… [+2351 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Deadline"
    //       },
    //       "author": "dmorgan1201",
    //       "title": "Elizabeth Holmes’ Texts Provided Inside Information For The Second Half of Hulu’s ‘The Dropout’ – Contenders TV",
    //       "description": "Amanda Seyfried, Naveen Andrews and creator Elizabeth Meriwether were filming the Hulu series The Dropout while subject Elizabeth Holmes was on trial. During a Contenders TV panel Sunday at the Paramount Theatre, they recalled following the trial closely as t…",
    //       "url": "https://deadline.com/2022/04/the-dropout-hulu-amanda-seyfried-naveen-andrews-interview-contenders-tv-1234999693/",
    //       "urlToImage": "https://deadline.com/wp-content/uploads/2022/04/dropout-e1649638569108.jpg?w=1024",
    //       "publishedAt": "2022-04-11T00:56:55Z",
    //       "content": "Amanda Seyfried, Naveen Andrews and creator Elizabeth Meriwether were filming the Hulu series The Dropoutwhile subject Elizabeth Holmes was on trial. During a Contenders TV panel Sunday at the Paramo… [+2468 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Deadline"
    //       },
    //       "author": "Valerie Complex",
    //       "title": "‘Women Of The Movement’ Star Adrienne Warren On Mamie Till-Mobley’s Legacy; Creator Marissa Jo Cerar Teases Potential Season 2 – Contenders TV",
    //       "description": "In one of Contenders TV’s most emotional panels, Deadline TV reporter Alexandra Del Rosario spoke with creator/showrunner Marissa Jo Cerar and Tony-winning actress Adrienne Warren about the ABC limited series Women of the Movement. Inspired by the book Emmett…",
    //       "url": "https://deadline.com/2022/04/showrunner-marissa-jo-cerar-and-actress-adrienne-warren-1234999550/",
    //       "urlToImage": "https://deadline.com/wp-content/uploads/2022/04/1390728861-e1649638407674.jpg?w=1024",
    //       "publishedAt": "2022-04-11T01:10:13Z",
    //       "content": "In one of Contenders TV’s most emotional panels, Deadline TV reporter Alexandra Del Rosario spoke with creator/showrunner Marissa Jo Cerar and Tony-winning actress Adrienne Warren about the ABC limit… [+3273 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Nextpit.de"
    //       },
    //       "author": "Benjamin Lucks",
    //       "title": "S22-Serie mit Speaker-Fauxpas: Vorsicht vor Druck- & Temperaturwechseln",
    //       "description": "Nutzer des Galaxy S22 berichten über Probleme mit den Lautsprechern des Flaggschiffs. Grund dafür sind offenbar Druck- und Temperaturunterschiede.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
    //       "url": "https://www.nextpit.de/galaxy-s22-mit-speaker-problemen-vorsicht-bei-druck-und-hitze",
    //       "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Samsung_Galaxy_S22/NextPit_Samsung_Galaxy_S22.jpg",
    //       "publishedAt": "2022-04-11T05:00:00Z",
    //       "content": "Nutzt Ihr ein Gerät aus Samsungs Galaxy-S22-Serie, müsst Ihr Euch beim nächsten Flug eventuell auf knarzende Lautsprecher einstellen. Denn im Netz tauchen Berichte darüber auf, dass Samsungs neuestes… [+1629 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Deadline"
    //       },
    //       "author": "Erik Pedersen",
    //       "title": "‘Pam & Tommy’s Lily James & Sebastian Stan Sweated The Details While Seth Rogen Played Against Type – Contenders TV",
    //       "description": "For Pam & Tommy‘s Lily James and Sebastian Stan, capturing the essences of Pamela Anderson and Tommy Lee, in the public eye and privately, while also re-creating their uber-famous images were the central challenges of the Hulu miniseries. Conversely, Seth Rog…",
    //       "url": "https://deadline.com/2022/04/pam-and-tommy-lily-james-sebastian-stan-seth-rogen-contenders-tv-1234999719/",
    //       "urlToImage": "https://deadline.com/wp-content/uploads/2022/04/Pam-Tommy-Contenders-TV.jpg?w=1024",
    //       "publishedAt": "2022-04-11T01:39:12Z",
    //       "content": "For Pam &amp; Tommy‘s Lily James and Sebastian Stan, capturing the essences of Pamela Anderson and Tommy Lee, in the public eye and privately, while also re-creating their uber-famous images were the… [+4221 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Himasoku.com"
    //       },
    //       "author": "himasoku123",
    //       "title": "アマゾンプライムの会員誘導って強引すぎね？あれ規約キチっと読まないと誰でも会員になりそう",
    //       "description": "51: ごーまる(長野県) [US] 2022/04/11(月) 07:15:56.40 ID:bRB1ZpDW0\n 退会するの大変なんだよなしつこくて \n\n\n\n\n\n\n5: 損保ジャパンダ(大阪府) [FR] 2022/04/11(月) 06:25:58.66 ID:AUgMaF820\n 情弱か？ \n13: はのちゃん(長野県) [ﾆﾀﾞ] 2022/04/11(月) 06:38:50.70 I...",
    //       "url": "http://himasoku.com/archives/52182098.html",
    //       "urlToImage": "https://livedoor.blogimg.jp/himasoku123/imgs/c/7/c792fb20-s.png",
    //       "publishedAt": "2022-04-11T03:54:54Z",
    //       "content": "3\r\n6\r\n32\r\n3: () [] 2022/04/11() 06:23:57.68 ID:GHud/lfD0\r\n46: () [JP] 2022/04/11() 07:11:27.76 ID:on16PNAH0\r\n6: () [US] 2022/04/11() 06:29:24.82 ID:QdMkMyAL0\r\n7: () [US] 2022/04/11() 06:32:19.62 ID:u… [+2994 chars]"
    //     },
    //     {
    //       "source": {
    //         "id": null,
    //         "name": "Appbank.net"
    //       },
    //       "author": "岩佐",
    //       "title": "iPhoneの新OSに「AR/VRヘッドセット」登場の予兆、2022年末に登場の可能性ありと経済紙記者が予測",
    //       "description": "» 次世代のスティーブ・ジョブズと賞賛された女性起業家のヤバすぎる正体 Appleは現在、新たな製品ラインナップとして「AR/VRヘッドセット」の開発に取り組んでいると伝えられています。このデバイスの",
    //       "url": "https://www.appbank.net/2022/04/11/technology/2220379.php",
    //       "urlToImage": "https://www.appbank.net/wp-content/uploads/2022/04/2022-0408-AR-Headset-thumb-1.jpeg",
    //       "publishedAt": "2022-04-11T02:48:19Z",
    //       "content": "» \r\nAppleAR/VR\r\n*Category\r\n Technology*SourceAppleinsiders ,Aderosa\r\nAppleinsidersApple\r\n6AppleWWDC 22WWDC 2022Apple\r\nAR/VRWWDC 202220222023\r\nWWDC 2022iOS 16iPhoneAppleAR/VRiOSiOS 16\r\nAppleWWDC 2022i… [+37 chars]"
    //     }
    //   ]

    // static defaultProps = {
    // country:'in'
    // }
   
    const[articles,setArticles]=useState([]);
    // const[loading,setLoading]=useState(true);
    const[page,setPage]=useState(1);


    const capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const update= async ()=>{
      props.setprogress(10);
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=5fb8ec8e9c62448291b558c5204e70c7&page=1`;
      let data=await fetch(url);
      props.setprogress(30);
      let parsedData=await data.json();
      props.setprogress(70);
      console.log(parsedData);
      setArticles(parsedData.articles)
      // setLoading(false)
      props.setprogress(100);
    }

    useEffect(()=>{
      document.title=`${capitalizeFirstLetter(props.category)}-NewsSurat`;
      update();
    },[])

    const handleprevclick= async ()=>{
    console.log("next");
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=5fb8ec8e9c62448291b558c5204e70c7&page=${page}`;
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    setPage(page-1)
    console.log(url);
    setArticles(parsedData.articles)
    }

    const handlenextclick= async ()=>{
      console.log("prr");
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=5fb8ec8e9c62448291b558c5204e70c7&page=${page}`;
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      setPage(page+1)
      console.log(url);
      setArticles(parsedData.articles)

    }

    return (
      <div className='container my-3'>
          <h1 className='text-center'>News Surat - Top Headlines from {capitalizeFirstLetter(props.category)}</h1>
          
        <div className='row'>
        {articles.map((element)=>{
                    return <div className='col-md-4 my-3' key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} 
                    imageUrl={element.urlToImage?element.urlToImage:"https://www.appbank.net/wp-content/uploads/2022/04/2022-0408-AR-Headset-thumb-1.jpeg"} 
                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
              })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handleprevclick}>&laquo; Previous</button>
          <button type="button" className="btn btn-dark" onClick={handlenextclick}>Next &raquo;</button>
        </div>
      </div>
    )
  
}

News.defaultProps={
  country:'in',
  category:'general',
}

News.propTypes={
  country:PropTypes.string,
  category:PropTypes.string,
}
export default News
