# NightSteed Admob Plugin

## Install
```
cordova plugin add https://github.com/NightSteedSC/nightsteed-ads-admob.git
```

## Configuring AdMob
```
NightSteed.Ad.AdMob.configure({
    android: {
        appId: "ca-app-pub-3940256099942544~3347511713",
        banner: "ca-app-pub-3940256099942544/6300978111",
        interstitial: "ca-app-pub-3940256099942544/1033173712",
        rewardedVideo: "ca-app-pub-3940256099942544/5224354917",
        personalizedAdsConsent: false,
    },
    ios: {
        appId: "ca-app-pub-3940256099942544~3347511713",
        banner: "ca-app-pub-3940256099942544/6300978111",
        interstitial: "ca-app-pub-3940256099942544/1033173712",
        rewardedVideo: "ca-app-pub-3940256099942544/5224354917",
        personalizedAdsConsent: false,
    }
});
```

## Creating Banner, Interstitial and Rewarded Video
```
var banner = NightSteed.Ad.AdMob.createBanner();
var interstitial = NightSteed.Ad.AdMob.createInterstitial();
var rewardedVideo = NightSteed.Ad.AdMob.createRewardedVideo();
```

```
var banner = NightSteed.Ad.AdMob.createBanner("ca-app-pub-3940256099942544/6300978111");
var interstitial = NightSteed.Ad.AdMob.createInterstitial("ca-app-pub-3940256099942544/1033173712");
var rewardedVideo = NightSteed.Ad.AdMob.createRewardedVideo("ca-app-pub-3940256099942544/5224354917");
```

## Banners
### Listening to banner events

```
banner.on("load", function(){
   console.log("Banner loaded " + banner.width, banner.height);
});

banner.on("fail", function(){
   console.log("Banner failed to load");
});

banner.on("show", function(){
   console.log("Banner shown a modal content");
});

banner.on("dismiss", function(){
   console.log("Banner dismissed the modal content");
});

banner.on("click", function(){
   console.log("Banner clicked");
});
```

### Life Cycle Events
First thing you have to do after creating a banner is to listen to its life cycle events:

- load: A banner has been loaded and is ready to be shown.
- fail: The banner load has failed so there is no ad available to be shown at the moment.
- show: The banner has been showed probably as consequence of calling the “show” method.
- dismiss: The banner has been collapsed.
- click: The user has clicked on the banner.

### Showing/hiding a banner

```
banner.show();
banner.hide();
```

## Interstitials
### Creating an interstitial

```
var interstitial = NightSteed.Ad.AdMob.createInterstitial();
```

### Listening to interstitial events

```
interstitial.on("load", function(){
    console.log("Interstitial loaded");
});

interstitial.on("fail", function(error){
    console.log("Interstitial failed: " + JSON.stringify(error));
});

interstitial.on("show", function(){
    console.log("Interstitial shown");
});

interstitial.on("dismiss", function(){
    console.log("Interstitial dismissed");
});

interstitial.on("click", function(){
   console.log("Interstitial clicked");
});
```

### Life Cycle Events
First thing you have to do after creating an interstitial is to listen to its life cycle  events:

- load: An interstitial has been loaded and is ready to be shown.
- fail: The interstitial load has failed so there is no ad available to be shown at the moment.
- show: The interstitial has been showed probably as consequence of calling the “show” method.
- dismiss: The interstitial has been closed by the user.
- click: The user has clicked on the interstitial.

### Showing an interstitial

```
interstitial.show()
```

## Rewarded Videos
### Creating a rewarded video
```
var interstitial = NightSteed.Ad.AdMob.createRewardedVideo();
```

### Listening to rewarded videos events
```
rewardedVideo.on("load", function(){
    console.log("Rewarded video loaded");
});

rewardedVideo.on("fail", function(error){
    console.log("Rewarded video failed: " + JSON.stringify(error));
});

rewardedVideo.on("show", function(){
    console.log("Rewarded video shown");
});

rewardedVideo.on("dismiss", function(){
    console.log("Rewarded video dismissed");
});

rewardedVideo.on("reward", function(reward, error){
    if (!error) {
      console.log("amount: " + reward.amount);
      console.log("currency: " + reward.currency);
      console.log("itemKey: " + reward.itemKey);
    } else {
      console.log("error: " + JSON.stringify(error));
    }
});

rewardedVideo.on("click", function(){
   console.log("Rewarded video clicked");
});
```
### Life Cycle Events
First thing you have to do after creating a rewarded video is to listen to its life cycle  events:

- load: A rewarded video has been loaded and is ready to be shown.
- fail: The rewarded video load has failed so there is no ad available to be shown at the moment.
- show: The rewarded video has been showed probably as consequence of calling the “show” method.
- dismiss: The rewarded video has been closed by the user.
- reward: The user has watched enough to receive the reward. But an error not captured by fail could have occurred.
- click: The user has clicked on the rewarded video.


### Showing a rewarded video
```
rewardedVideo.show()
```

## User Consent
Because of EU General Data Protection Regulation, personalized content can be provided only by explicit consent of the user.
It is the developer's responsibility to ask the consent eligible for the GDPR requirements.
Consent for personalized ads can be set:
```
NightSteed.Ad.setConsent(false);
```

- true - user consent granted.