
const videoData = [
    { duration: '02:19', info: 'Sa Cr pa ng highschool nag kantotan' },
    { duration: '03:54', info: 'Ganda ng hugis ng yung katawan' },
    { duration: '02:05', info: 'Dumalaw yung GF ni construction worker part 1' },
    { duration: '04:13', info: 'Dumalaw yung GF ni construction worker part 2' },
    { duration: '04:51', info: 'Nahuli yung mag klasmate na nagkantotan sa classroom' },
    { duration: '07:19', info: 'Di na inabotan nang bahay yung kalibugan' },
    { duration: '05:17', info: 'Nag cutting class para mag kantutan' },
    { duration: '06:15', info: 'linabasan kasi Umuulan kaya di makalabas' },
    { duration: '08:22', info: 'leaked video ng mag jowa' },
    { duration: '01:38', info: 'naiwan mag isa sa bahay' },
    { duration: '05:14', info: 'Wala ng hubad hubad, kantot na kaagad.' },
    { duration: '10:47', info: 'Pa music ka muna para di marinig yung ungol' },
    { duration: '02:53', info: 'Wait lang muna baby nag quicky lang si mommy at daddy.' },
    { duration: '04:31', info: 'Baby face lang pero meron nang malalaking kabundokan sa probinsya.' },
    { duration: '02:08', info: 'Ako muna mag drive baby alam ko na pagod ka galing trabaho.' },
    { duration: '01:16', info: 'Iba yung pinag aralan ng mag classmate.' },
    { duration: '02:01', info: 'Kaya kuna to babe higa ka lang dyan.' },
    { duration: '01:00', info: 'Nakabored na sa TikTok kaya lipat tayo sa OnlyFans.' },
    { duration: '01:05', info: 'Masage ko lang to saglit.' },
    { duration: '04:17', info: 'Lf kasabay maligo.' },
    { duration: '04:55', info: 'Nadala ni captain-ball sa kwarto si cheerleader.' },
    { duration: '01:09', info: 'Nag practice kasi gawin daw siyang muse.' },
 
    // Add more video data as needed 
];

const videoAds = [
    { adS: 'https://recutt.com/Vf13J/84723416'},
    { adS: 'https://urlef.com/RpxUA/84723416'},
    { adS: 'https://cutpu.com/8dPJo/84723416'},
    { adS: 'https://shrtq.com/Xr9Co/84723416'},
    { adS: 'https://moviesx.me/eFrnJ/84723416'},
    { adS: 'https://watch.moviesx.me/BMOwC/84723416'},
    { adS: 'https://paypou.com/teRkB/84723416'},
    { adS: 'https://recutt.com/vHn/78784625'},
    { adS: 'https://urlef.com/Ag0/78784625'},
    { adS: 'https://cutpu.com/a3Q/78784625'},
    { adS: 'https://shrtq.com/c1d/78784625'},
    { adS: 'https://moviesx.me/Cbr/78784625'},
    { adS: 'https://watch.moviesx.me/2wH/78784625'},
    { adS: 'https://paypou.com/1md/78784625'},
    { adS: 'https://recutt.com/uy7Q0/81008132'},
    { adS: 'https://urlef.com/vEIfu/81008132'},
    { adS: 'https://cutpu.com/34TLl/81008132'},
    { adS: 'https://shrtq.com/pZv5C/81008132'},
    { adS: 'https://moviesx.me/uxacB/81008132'},
    { adS: 'https://watch.moviesx.me/fxv3w/81008132'},
    { adS: 'https://paypou.com/LCvt7/81008132'},
    { adS: 'https://recutt.com/Vf13J/84723416'},
    { adS: 'https://urlef.com/RpxUA/84723416'},
    { adS: 'https://cutpu.com/8dPJo/84723416'},
    { adS: 'https://shrtq.com/Xr9Co/84723416'},
    { adS: 'https://moviesx.me/eFrnJ/84723416'},
    { adS: 'https://watch.moviesx.me/BMOwC/84723416'},
    { adS: 'https://paypou.com/teRkB/84723416'},
    { adS: 'https://recutt.com/vHn/78784625'},
    { adS: 'https://urlef.com/Ag0/78784625'},
    { adS: 'https://cutpu.com/a3Q/78784625'},
    { adS: 'https://shrtq.com/c1d/78784625'},
    { adS: 'https://moviesx.me/Cbr/78784625'},
    { adS: 'https://watch.moviesx.me/2wH/78784625'},
    { adS: 'https://paypou.com/1md/78784625'},
    { adS: 'https://recutt.com/uy7Q0/81008132'},
    { adS: 'https://urlef.com/vEIfu/81008132'},
    { adS: 'https://cutpu.com/34TLl/81008132'},
    { adS: 'https://shrtq.com/pZv5C/81008132'},
    { adS: 'https://moviesx.me/uxacB/81008132'},
    { adS: 'https://watch.moviesx.me/fxv3w/81008132'},
    { adS: 'https://paypou.com/LCvt7/81008132'},
    { adS: 'https://recutt.com/Vf13J/84723416'},
    { adS: 'https://urlef.com/RpxUA/84723416'},
    { adS: 'https://cutpu.com/8dPJo/84723416'},
    { adS: 'https://shrtq.com/Xr9Co/84723416'},
    { adS: 'https://moviesx.me/eFrnJ/84723416'},
    { adS: 'https://watch.moviesx.me/BMOwC/84723416'},
    { adS: 'https://paypou.com/teRkB/84723416'},
    { adS: 'https://recutt.com/vHn/78784625'},
    { adS: 'https://urlef.com/Ag0/78784625'},
    { adS: 'https://cutpu.com/a3Q/78784625'},
    { adS: 'https://shrtq.com/c1d/78784625'},
    { adS: 'https://moviesx.me/Cbr/78784625'},
    { adS: 'https://watch.moviesx.me/2wH/78784625'},
    { adS: 'https://paypou.com/1md/78784625'},
    { adS: 'https://recutt.com/uy7Q0/81008132'},
    { adS: 'https://urlef.com/vEIfu/81008132'},
    { adS: 'https://cutpu.com/34TLl/81008132'},
    { adS: 'https://shrtq.com/pZv5C/81008132'},
    { adS: 'https://moviesx.me/uxacB/81008132'},
    { adS: 'https://watch.moviesx.me/fxv3w/81008132'},
    { adS: 'https://paypou.com/LCvt7/81008132'},
    
  
]; 

const adsLength = videoAds.length;
const totalVideos = videoData.length;
const videosPerPage = 20;

function generateVideoUrl() {
    const videoUrl = [];
    for (let i = totalVideos; i > 0 ; i--) {
        videoUrl.push({
            src: `assets/clips/clip${i}.mp4`,
            videoSrc: `assets/videos/video${i}.mp4`
        });
    }
    return videoUrl;
}
