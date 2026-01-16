/*
taken from https://www.myinstants.com/en/trending/us/

(() => {
  return Array.from(document.querySelectorAll("#instants_container .instant")).map(el => ({
    name: el.querySelector(".instant-link")?.textContent.trim(),
    color: el.querySelector(".circle")?.style.backgroundColor,
    mp3: el.querySelector("button[onclick^='play']")?.getAttribute("onclick")?.match(/'([^']+\.mp3)'/)?.[1]
  }));
})()
*/
export const sounds =
    // SPLITTER ---------------
[
    {
        "name": "FAHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "VINE BOOM SOUND",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom.mp3"
    },
    {
        "name": "Fahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhh_KcgAXfs.mp3"
    },
    {
        "name": "Among Us role reveal sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound.mp3"
    },
    {
        "name": "Fart",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/dry-fart.mp3"
    },
    {
        "name": "rizz sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-sound-effect.mp3"
    },
    {
        "name": "FAAAH",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/faaah.mp3"
    },
    {
        "name": "Anime Wow",
        "color": "rgb(255, 51, 102)",
        "mp3": "/media/sounds/anime-wow-sound-effect.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "GAY!!?!!!!!!",
        "color": "rgb(58, 227, 255)",
        "mp3": "/media/sounds/gay_81KHxBA.mp3"
    },
    {
        "name": "YOUR PHONE IS RINGING PICK IT UP NOW",
        "color": "rgb(2, 0, 23)",
        "mp3": "/media/sounds/your-phone-is-ringing-pick-it-up-now.mp3"
    },
    {
        "name": "SpongeBob Fail",
        "color": "rgb(202, 195, 26)",
        "mp3": "/media/sounds/spongebob-fail.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Dexter meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dexter-meme.mp3"
    },
    {
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applepay.mp3"
    },
    {
        "name": "Skeleton with shield",
        "color": "rgb(255, 251, 135)",
        "mp3": "/media/sounds/skeleton-with-shield.mp3"
    },
    {
        "name": "Tuco: GET OUT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuco-get-out.mp3"
    },
    {
        "name": "Chicken on tree screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chicken-on-tree-screaming.mp3"
    },
    {
        "name": "We are Charlie Kirk (song)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/we-are-charlie-kirk-song.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/metal-pipe-clang.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "I got this fahhhhhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-got-this-fahhhhhh.mp3"
    },
    {
        "name": "Smoke Detector Beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smoke-detector-beep.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "WHAT IS THIS DIDDY BLUD DOING ON THE",
        "color": "rgb(141, 114, 181)",
        "mp3": "/media/sounds/what-is-this-diddy-blud-doing-on-the.mp3"
    },
    {
        "name": "Punch Sound",
        "color": "rgb(42, 141, 255)",
        "mp3": "/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
    },
    {
        "name": "oi oi oe oi a eye eye",
        "color": "rgb(0, 255, 18)",
        "mp3": "/media/sounds/oi-oi-oe-oi-a-eye-eye.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "anime ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-ahh.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
    },
    {
        "name": "Hub Intro Sound",
        "color": "rgb(255, 150, 30)",
        "mp3": "/media/sounds/hub-intro-sound.mp3"
    },
    {
        "name": "Fart Button",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/perfect-fart.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "GopGopGop",
        "color": "rgb(255, 250, 206)",
        "mp3": "/media/sounds/gopgopgop.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "67",
        "color": "rgb(199, 255, 30)",
        "mp3": "/media/sounds/67_SQlv2Xv.mp3"
    },
    {
        "name": "Error SOUNDSS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/error_CDOxCYm.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "ACK",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ack.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "FAHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhhhh.mp3"
    },
    {
        "name": "City Boy",
        "color": "rgb(23, 15, 255)",
        "mp3": "/media/sounds/city-boy.mp3"
    },
    {
        "name": "Please Speed I Need This",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/please-speed-i-need-this.mp3"
    },
    {
        "name": "Звук фотоаппарата",
        "color": "rgb(225, 163, 255)",
        "mp3": "/media/sounds/zvuk-fotoapparata.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "yes!(lara voice)",
        "color": "rgb(41, 255, 16)",
        "mp3": "/media/sounds/yes-lara-voice.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "LIZARD BUTTON",
        "color": "rgb(127, 168, 255)",
        "mp3": "/media/sounds/lizard-button.mp3"
    },
    {
        "name": "MI BOMBO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mi-bombo.mp3"
    },
    {
        "name": "We are Charlie Kirk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirk.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "FAHHHHHHHHHHHHHHH",
        "color": "rgb(112, 84, 255)",
        "mp3": "/media/sounds/fahhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "M e o w ~",
        "color": "rgb(120, 85, 120)",
        "mp3": "/media/sounds/m-e-o-w.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "my mommy said no more skibidi toilet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-mommy-said-no-more-skibidi-toilet.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "instagram thud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect_KT89XIq.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "Pluh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pluh.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "Shut your mouth SYFM",
        "color": "rgb(116, 101, 255)",
        "mp3": "/media/sounds/shut-your-mouth-syfm.mp3"
    },
    {
        "name": "Daddyy Chill",
        "color": "rgb(255, 138, 239)",
        "mp3": "/media/sounds/daddyy-chill.mp3"
    },
    {
        "name": "let me know",
        "color": "rgb(255, 22, 208)",
        "mp3": "/media/sounds/let-me-know.mp3"
    },
    {
        "name": "Stranger Things Clock Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stranger-things-clock-sound.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "FAHHHHHHHHHHHHHHH",
        "color": "rgb(112, 84, 255)",
        "mp3": "/media/sounds/fahhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "yes!(lara voice)",
        "color": "rgb(41, 255, 16)",
        "mp3": "/media/sounds/yes-lara-voice.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "Aww",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/studio-audience-awwww-sound-fx.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "ENRIQUE!",
        "color": "rgb(45, 129, 255)",
        "mp3": "/media/sounds/enrique.mp3"
    },
    {
        "name": "FNAF Jumpscare Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "Визг свиньи",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vizg-svini.mp3"
    },
    {
        "name": "GunShottttt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshotjbudden.mp3"
    },
    {
        "name": "im bout to eat this chick fil a",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-eat-this-chick-fil-a_g0z9DeR.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "nelly ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh_gLSTOu4.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "We are charlie kirk loud asf",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirk-loud-asf.mp3"
    },
    {
        "name": "Mario Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/maro-jump-sound-effect_1.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "Звук литвина",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zvuk-litvina.mp3"
    },
    {
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "FAHHHHHHHH EARRAPE",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/fahhhhhhhh-earrape.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "ROBLOX oof",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_1.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "AAAAAAAAAAAAAAAAAAAA é lutador",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3"
    },
    {
        "name": "mr beast give me sum money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mr-beast-give-me-sum-money.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "fahhh pump sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhh-pump-sound.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "СКАЧАЙ МАКС",
        "color": "rgb(62, 30, 255)",
        "mp3": "/media/sounds/skachai-maks.mp3"
    },
    {
        "name": "Skeleton banging",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skeleton-banging.mp3"
    },
    {
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "Core Sound Effect",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/core-sound-effect.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "TheBurntPeanut Hooray",
        "color": "rgb(207, 117, 14)",
        "mp3": "/media/sounds/theburntpeanut-hooray.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "Discord Leave Noise",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/discord-leave-noise.mp3"
    },
    {
        "name": "67 kid",
        "color": "rgb(255, 190, 40)",
        "mp3": "/media/sounds/67-kid.mp3"
    },
    {
        "name": "Yozgat Yarığı",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yozgat-yarigi.mp3"
    },
    {
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "Evolution Mega Knight",
        "color": "rgb(206, 47, 255)",
        "mp3": "/media/sounds/evolution-mega-knight.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "you stupid n",
        "color": "rgb(79, 255, 126)",
        "mp3": "/media/sounds/you-stupid-n_5psLJUm.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "/media/sounds/1-108.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "/media/sounds/1-108.mp3"
    },
    {
        "name": "Evolution Mega Knight",
        "color": "rgb(206, 47, 255)",
        "mp3": "/media/sounds/evolution-mega-knight.mp3"
    },
    {
        "name": "Yozgat Yarığı",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yozgat-yarigi.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/downer_noise.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "Apple Pay Sound",
        "color": "rgb(33, 77, 255)",
        "mp3": "/media/sounds/apple-pay-sound.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "Camera Flash Sound Effect",
        "color": "rgb(255, 132, 224)",
        "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
    },
    {
        "name": "Rahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rahhh.mp3"
    },
    {
        "name": "Green Giant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ho-ho-ho-green-giant-audio-clip.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "Wrong Answer Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-buzzer.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "ЪЭХ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ekh.mp3"
    },
    {
        "name": "P diddy nooo",
        "color": "rgb(9, 10, 13)",
        "mp3": "/media/sounds/p-diddy-nooo_L7bRR59.mp3"
    },
    {
        "name": "\"Suck My Fat One\" (Stranger Things 5)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/suck-my-fat-one-stranger-things-5.mp3"
    },
    {
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "Yo phone lining",
        "color": "rgb(95, 255, 46)",
        "mp3": "/media/sounds/yo-phone-lining.mp3"
    },
    {
        "name": "Стон Артема (bass)",
        "color": "rgb(29, 255, 129)",
        "mp3": "/media/sounds/ston-artema-bass.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "Jew jew jew jew",
        "color": "rgb(98, 152, 255)",
        "mp3": "/media/sounds/jew-jew-jew-jew.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "Strawberry elephant spawn troll steal a brainrot",
        "color": "rgb(56, 242, 255)",
        "mp3": "/media/sounds/strawberry-elephant-spawn-troll-steal-a-brainrot.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "Punch Effect",
        "color": "rgb(59, 255, 0)",
        "mp3": "/media/sounds/punch_u4LmMsr.mp3"
    },
    {
        "name": "Re:Zero Return by Death",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/re-zero-return-by-death.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "minecraft eating sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nom-nom-nom_gPJiWn4.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "\"Suck My Fat One\" (Stranger Things 5)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/suck-my-fat-one-stranger-things-5.mp3"
    },
    {
        "name": "fart with extra reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
    },
    {
        "name": "Mambo曼波 诗歌剧Matikanetannhauser",
        "color": "rgb(255, 211, 172)",
        "mp3": "/media/sounds/mamboman-bo-shi-ge-ju-matikanetannhauser.mp3"
    },
    {
        "name": "Jew jew jew jew",
        "color": "rgb(98, 152, 255)",
        "mp3": "/media/sounds/jew-jew-jew-jew.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "Amongus Sus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/53b1bab6-a8c3-4a1a-82db-7110ce1c29ef_6KNDGWD.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "na na na",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/funny-sound-that-will-make-you-to-laugh_1.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/let-her-go.mp3"
    },
    {
        "name": "Strawberry elephant spawn troll steal a brainrot",
        "color": "rgb(56, 242, 255)",
        "mp3": "/media/sounds/strawberry-elephant-spawn-troll-steal-a-brainrot.mp3"
    },
    {
        "name": "Стон Артема (bass)",
        "color": "rgb(29, 255, 129)",
        "mp3": "/media/sounds/ston-artema-bass.mp3"
    },
    {
        "name": "NE DİYOOO OĞLUM",
        "color": "rgb(255, 94, 233)",
        "mp3": "/media/sounds/ne-diyooo-oglum.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "fnaf 2 scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-2-full-scream-sound.mp3"
    },
    {
        "name": "P diddy nooo",
        "color": "rgb(9, 10, 13)",
        "mp3": "/media/sounds/p-diddy-nooo_L7bRR59.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "theburntpeanut mhmm mhmm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/theburntpeanut-mhmm-mhmm.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "67 normal",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-normal.mp3"
    },
    {
        "name": "ACTUALLY GOOD FAHHHH sfx",
        "color": "rgb(255, 0, 247)",
        "mp3": "/media/sounds/actually-good-fahhhh-sfx.mp3"
    },
    {
        "name": "Fears to Fathom Notification Sound",
        "color": "rgb(10, 59, 51)",
        "mp3": "/media/sounds/fears-to-fathom-notification-sound.mp3"
    },
    {
        "name": "SUBWAY SURFERS BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers-bass-boosted.mp3"
    },
    {
        "name": "WhatsApp Bass Boosted",
        "color": "rgb(40, 39, 39)",
        "mp3": "/media/sounds/whatsapp-bass-boosted.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "Гудок поезда",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gudok-poezda.mp3"
    },
    {
        "name": "Sybau",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sybau.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "Le fart de Simon",
        "color": "rgb(75, 255, 0)",
        "mp3": "/media/sounds/le-fart-de-simon.mp3"
    },
    {
        "name": "Oh No No No Tik Tok Song Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-tik-tok-song-sound-effect.mp3"
    },
    {
        "name": "Имбо отрыжка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imbo-otryzhka.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "ahh fresh meat pursuer",
        "color": "rgb(29, 255, 150)",
        "mp3": "/media/sounds/ahh-fresh-meat-pursuer.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "TheBurntPeanut Lets ride",
        "color": "rgb(194, 146, 50)",
        "mp3": "/media/sounds/theburntpeanut-lets-ride.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "daddys home",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daddys-home.mp3"
    },
    {
        "name": "homero gimiendo",
        "color": "rgb(219, 76, 255)",
        "mp3": "/media/sounds/homero-gimiendo.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "f1 Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f1-radio_QLwLncI.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "Heyy daddyyyyy⁓ omg",
        "color": "rgb(255, 163, 186)",
        "mp3": "/media/sounds/heyy-daddyyyyy-omg.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "HOG RIDER LOUD!!",
        "color": "rgb(184, 248, 255)",
        "mp3": "/media/sounds/hog-rider-loud.mp3"
    },
    {
        "name": "Faaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/faaaa.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "Лучший рингтон на телефон.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/luchshii-rington-na-telefon.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "i farted and a poopy almost slipped out",
        "color": "rgb(152, 120, 60)",
        "mp3": "/media/sounds/i-farted-and-a-poopy-almost-slipped-out.mp3"
    },
    {
        "name": "Domer",
        "color": "rgb(66, 113, 255)",
        "mp3": "/media/sounds/domer_e4UYbjR.mp3"
    },
    {
        "name": "siyah yok edici kutu",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/siyah-yok-edici-kutu.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo3b.mp3"
    },
    {
        "name": "where are you goingg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/where-are-you-goingg.mp3"
    },
    {
        "name": "Allahumme Yarab",
        "color": "rgb(236, 255, 114)",
        "mp3": "/media/sounds/allahumme-yarab.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "italian brainrot ringtone",
        "color": "rgb(120, 38, 38)",
        "mp3": "/media/sounds/italian-brainrot-ringtone.mp3"
    },
    {
        "name": "brain fart slowed",
        "color": "rgb(141, 85, 60)",
        "mp3": "/media/sounds/brain-fart-slowed.mp3"
    },
    {
        "name": "Тёмная ночь",
        "color": "rgb(7, 0, 0)",
        "mp3": "/media/sounds/tiomnaia-noch.mp3"
    },
    {
        "name": "mi bombo duolingo",
        "color": "rgb(22, 135, 255)",
        "mp3": "/media/sounds/mi-bombo-duolingo.mp3"
    },
    {
        "name": "Звук удара по металу",
        "color": "rgb(26, 255, 0)",
        "mp3": "/media/sounds/zvuk-udara-po-metalu.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "Arc Raiders Probe",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/arc-raiders-probe.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "Cartoon Slip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoonslip.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "I got this meme sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-got-this-meme-sound.mp3"
    },
    {
        "name": "where are you goingg",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/where-are-you-goingg.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "Goo goo gagaaa",
        "color": "rgb(251, 255, 122)",
        "mp3": "/media/sounds/goo-goo-gagaaa.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "Unlocked",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/likin-park-papercut_1.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "Weird route jingle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/weird-route-jingle.mp3"
    },
    {
        "name": "flashbang cs",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flashbang-cs_qoRhxLn.mp3"
    },
    {
        "name": "Лучший рингтон на телефон.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/luchshii-rington-na-telefon.mp3"
    },
    {
        "name": "White tee RIZZ",
        "color": "rgb(227, 224, 255)",
        "mp3": "/media/sounds/white-tee-rizz_Pw3bPh4.mp3"
    },
    {
        "name": "i farted and a poopy almost slipped out",
        "color": "rgb(152, 120, 60)",
        "mp3": "/media/sounds/i-farted-and-a-poopy-almost-slipped-out.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "fahh but louder",
        "color": "rgb(0, 255, 98)",
        "mp3": "/media/sounds/fahh-but-louder.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hello",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo3b.mp3"
    },
    {
        "name": "IA IA AHH YEYE YEYE - lovely sad",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ia-ia-ahh-yeye-yeye-lovely-sad.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "formula 1 box box",
        "color": "rgb(255, 81, 81)",
        "mp3": "/media/sounds/formula-1-box-box.mp3"
    },
    {
        "name": "Tik Tok India",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panjabi-mc-mundian-tu-bach-ke-0s-16s-kfmq4pgaove_tjS6M4I.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "SPONGEBOB A FEW MOMENTS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-few-moments-later-hd.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "deniz abi kornaya bas",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deniz-abi-kornaya-bas.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toms-screams.mp3"
    },
    {
        "name": "Unlocked",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/likin-park-papercut_1.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "FNAF 2 Hallway Ambience",
        "color": "rgb(93, 255, 240)",
        "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "yippee tbh",
        "color": "rgb(30, 125, 36)",
        "mp3": "/media/sounds/yippee-tbh.mp3"
    },
    {
        "name": "Звук удара по металу",
        "color": "rgb(26, 255, 0)",
        "mp3": "/media/sounds/zvuk-udara-po-metalu.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "Service Bell (2)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stupid-f__king-bird.mp3"
    },
    {
        "name": "Hello Firtana",
        "color": "rgb(29, 55, 106)",
        "mp3": "/media/sounds/hello-firtana.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "Swoosh Sound Effects",
        "color": "rgb(64, 51, 255)",
        "mp3": "/media/sounds/swoosh-sound-effects.mp3"
    },
    {
        "name": "undertaker bell repeat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertaker-bell-repeat.mp3"
    },
    {
        "name": "FAHHHHH 3",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/fahhhhh-3.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "formula 1 box box",
        "color": "rgb(255, 81, 81)",
        "mp3": "/media/sounds/formula-1-box-box.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "Coin Mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/super-mario-coin-sound.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "Flapjack Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flap-jack-scream.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "Hornet SHAW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hollow-knight-hornet-voice-11.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "nope",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01_1.mp3"
    },
    {
        "name": "Meme Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-click.mp3"
    },
    {
        "name": "Indian under the water",
        "color": "rgb(107, 169, 220)",
        "mp3": "/media/sounds/y2mate_HOnnyD0.mp3"
    },
    {
        "name": "aaaaaaaaahhhhhhhhhhhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaaaahhhhhhhhhhhh.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "Call me a good boy",
        "color": "rgb(255, 145, 180)",
        "mp3": "/media/sounds/call-me-a-good-boy.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "You Not Worthy Of My Nut",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-not-worthy-of-my-nut.mp3"
    },
    {
        "name": "ДИМОН",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pro-metei-dimon-www.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "Coin Mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/super-mario-coin-sound.mp3"
    },
    {
        "name": "ERDAH",
        "color": "rgb(98, 136, 255)",
        "mp3": "/media/sounds/erdah.mp3"
    },
    {
        "name": "app",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aplausos_3.mp3"
    },
    {
        "name": "nope",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01_1.mp3"
    },
    {
        "name": "Steal a Brainrot - Dragon Cannelloni",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-dragon-cannelloni.mp3"
    },
    {
        "name": "Путин виноват",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/putin-vinovat.mp3"
    },
    {
        "name": "Tm reis sen tehlikesin",
        "color": "rgb(207, 255, 139)",
        "mp3": "/media/sounds/tm-reis-sen-tehlikesin.mp3"
    },
    {
        "name": "Muhehehe",
        "color": "rgb(105, 20, 88)",
        "mp3": "/media/sounds/muhehehe.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Cartoon run take off",
        "color": "rgb(51, 255, 59)",
        "mp3": "/media/sounds/take-off_2YqCEjc.mp3"
    },
    {
        "name": "nya cat girl sound",
        "color": "rgb(90, 65, 255)",
        "mp3": "/media/sounds/nya_2xyALFL.mp3"
    },
    {
        "name": "Пицца 4 сына",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pitstsa-4-syna.mp3"
    },
    {
        "name": "Hava Nagila",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hava-nagila-1-hours-0.mp3"
    },
    {
        "name": "TheBurntPeanut We did it",
        "color": "rgb(215, 135, 45)",
        "mp3": "/media/sounds/theburntpeanut-we-did-it.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "vine boom sound effect full",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect-full.mp3"
    },
    {
        "name": "I'm Very Angry goku",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-very-angry-goku.mp3"
    },
    {
        "name": "Burnt peanut make peace with your god",
        "color": "rgb(31, 136, 40)",
        "mp3": "/media/sounds/burnt-peanut-make-peace-with-your-god.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "/media/sounds/discord-kitten.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "doot doot 6 7",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/doot-doot-6-7.mp3"
    },
    {
        "name": "goopa gotta goop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goopa-gotta-goop.mp3"
    },
    {
        "name": "roblox horror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-not-open.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Call me a good boy",
        "color": "rgb(255, 145, 180)",
        "mp3": "/media/sounds/call-me-a-good-boy.mp3"
    },
    {
        "name": "Lightskin Rizz (Sin City)",
        "color": "rgb(156, 153, 207)",
        "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "magic fairy",
        "color": "rgb(136, 224, 255)",
        "mp3": "/media/sounds/magic-fairy.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "Hornet SHAW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hollow-knight-hornet-voice-11.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "Субо песня",
        "color": "rgb(100, 249, 255)",
        "mp3": "/media/sounds/subo-pesnia.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "Flapjack Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flap-jack-scream.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "doot doot 6 7",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/doot-doot-6-7.mp3"
    },
    {
        "name": "Burnt peanut make peace with your god",
        "color": "rgb(31, 136, 40)",
        "mp3": "/media/sounds/burnt-peanut-make-peace-with-your-god.mp3"
    },
    {
        "name": "Live by the Goop",
        "color": "rgb(5, 255, 251)",
        "mp3": "/media/sounds/live-by-the-goop.mp3"
    },
    {
        "name": "Why are you running?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-are.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "Meowl [Steal a Brainrot]",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowl-steal-a-brainrot.mp3"
    },
    {
        "name": "Cartoon run take off",
        "color": "rgb(51, 255, 59)",
        "mp3": "/media/sounds/take-off_2YqCEjc.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "Sparkleeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
    },
    {
        "name": "Кимпиньтяо",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kimpintiao_mN8pkFE.mp3"
    },
    {
        "name": "Tm reis sen tehlikesin",
        "color": "rgb(207, 255, 139)",
        "mp3": "/media/sounds/tm-reis-sen-tehlikesin.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "formula 1 box box",
        "color": "rgb(255, 81, 81)",
        "mp3": "/media/sounds/formula-1-box-box.mp3"
    },
    {
        "name": "Ki kore",
        "color": "rgb(255, 42, 42)",
        "mp3": "/media/sounds/ki-kore.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Nuclear Alarm Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-alarm-siren.mp3"
    },
    {
        "name": "GREEN GIANT (no HO HO HO)",
        "color": "rgb(72, 255, 35)",
        "mp3": "/media/sounds/green-giant-no-ho-ho-ho.mp3"
    },
    {
        "name": "Sad Trombone",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/sadtrombone.swf.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "Ki kore",
        "color": "rgb(255, 42, 42)",
        "mp3": "/media/sounds/ki-kore.mp3"
    },
    {
        "name": "Sad Trombone",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/sadtrombone.swf.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "Fatih sultan mehmet",
        "color": "rgb(0, 255, 14)",
        "mp3": "/media/sounds/fatih-sultan-mehmet.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "Roblox Hi Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-hi-sound.mp3"
    },
    {
        "name": "Laughing dog meme",
        "color": "rgb(139, 0, 0)",
        "mp3": "/media/sounds/laughing-dog-meme.mp3"
    },
    {
        "name": "Я насрал в турбину самолета",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ia-nasral-v-turbinu-samoleta.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "tır editli şarkı",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tir-editli-sarki.mp3"
    },
    {
        "name": "FNAF 2 Hallway Ambience",
        "color": "rgb(93, 255, 240)",
        "mp3": "/media/sounds/fnaf-2-hallway-ambience.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "Oh brother this guy STINKS spongebob",
        "color": "rgb(44, 149, 255)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "Meowl [Steal a Brainrot]",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowl-steal-a-brainrot.mp3"
    },
    {
        "name": "thank you thank you thank you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thank-you-thank-you-thank-you.mp3"
    },
    {
        "name": "HO HO GREEN GIANT",
        "color": "rgb(38, 255, 49)",
        "mp3": "/media/sounds/ho-ho-ho-green-giant-audio-clip_yJDcgA1.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "Под новый год нарёт мороз",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pod-novyi-god-nariot-moroz.mp3"
    },
    {
        "name": "Nothing beats a jet2 holiday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nothing-beats-a-jet2-holiday_IeBO1Mr.mp3"
    },
    {
        "name": "Live by the Goop",
        "color": "rgb(5, 255, 251)",
        "mp3": "/media/sounds/live-by-the-goop.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "Dame un grr troll",
        "color": "rgb(84, 255, 55)",
        "mp3": "/media/sounds/dame-un-grr-troll.mp3"
    },
    {
        "name": "Wanda nara ULTRA BOOSTED",
        "color": "rgb(79, 84, 255)",
        "mp3": "/media/sounds/wanda-nara-ultra-boosted.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "Camera shutter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/camera_zLdd1zp.mp3"
    },
    {
        "name": "RUSYADA OLANLAR ÇIHIN DERHAL ORDAN",
        "color": "rgb(132, 140, 255)",
        "mp3": "/media/sounds/rusyada-olanlar-cihin-derhal-ordan.mp3"
    },
    {
        "name": "Ağlama Hadi Oyna",
        "color": "rgb(255, 250, 77)",
        "mp3": "/media/sounds/aglama-hadi-oyna.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "wut",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/record-scratch-2.mp3"
    },
    {
        "name": "Sonic.exe scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-scream.mp3"
    },
    {
        "name": "Discord Jumpscare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-jumpscare.mp3"
    },
    {
        "name": "Muhehehe",
        "color": "rgb(105, 20, 88)",
        "mp3": "/media/sounds/muhehehe.mp3"
    },
    {
        "name": "keloğlan muhahahaha",
        "color": "rgb(70, 228, 255)",
        "mp3": "/media/sounds/keloglan-muhahahaha.mp3"
    },
    {
        "name": "Crowd cheering",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/cheering.mp3"
    },
    {
        "name": "Happy happy happy song",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/happy-happy-happy-song.mp3"
    },
    {
        "name": "ERDAH",
        "color": "rgb(98, 136, 255)",
        "mp3": "/media/sounds/erdah.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Anime punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strongpunch.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "Fatih sultan mehmet",
        "color": "rgb(0, 255, 14)",
        "mp3": "/media/sounds/fatih-sultan-mehmet.mp3"
    },
    {
        "name": "Spongebob fog horn",
        "color": "rgb(69, 47, 9)",
        "mp3": "/media/sounds/spongebob-fog-horn.mp3"
    },
    {
        "name": "frog laughing meme",
        "color": "rgb(255, 71, 224)",
        "mp3": "/media/sounds/frog-laughing-meme.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Mii Channel Music",
        "color": "rgb(213, 226, 255)",
        "mp3": "/media/sounds/mii-channel-music.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "Fahhhh",
        "color": "rgb(255, 105, 125)",
        "mp3": "/media/sounds/fahhhh.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "HI HI HI HA clash royale",
        "color": "rgb(255, 250, 76)",
        "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
    },
    {
        "name": "Смешарики Погоня",
        "color": "rgb(0, 81, 255)",
        "mp3": "/media/sounds/smeshariki-pogonia.mp3"
    },
    {
        "name": "Nothing beats a jet2 holiday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nothing-beats-a-jet2-holiday_IeBO1Mr.mp3"
    },
    {
        "name": "Screaming Goat (best)",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/screaming-goat.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "Clash Royale Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash-royale-start-up-sound.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Franklin ringtone",
        "color": "rgb(0, 131, 163)",
        "mp3": "/media/sounds/franklin-ringtone.mp3"
    },
    {
        "name": "Muhehehe",
        "color": "rgb(105, 20, 88)",
        "mp3": "/media/sounds/muhehehe.mp3"
    },
    {
        "name": "auraa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/auraa.mp3"
    },
    {
        "name": "Error glitch",
        "color": "rgb(10, 255, 38)",
        "mp3": "/media/sounds/error-glitch.mp3"
    },
    {
        "name": "Смешарики Погоня",
        "color": "rgb(0, 81, 255)",
        "mp3": "/media/sounds/smeshariki-pogonia.mp3"
    },
    {
        "name": "Nothing beats a jet2 holiday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nothing-beats-a-jet2-holiday_IeBO1Mr.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "hog rider",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hog-rider.mp3"
    },
    {
        "name": "Fnaf Ambient Noise",
        "color": "rgb(157, 20, 134)",
        "mp3": "/media/sounds/fnaf-ambience-extended_trim.mp3"
    },
    {
        "name": "Metal Pipe Falling Sound Effect",
        "color": "rgb(87, 69, 96)",
        "mp3": "/media/sounds/metal-pipe-falling-sound-effect.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "Defy Gravity x God Is Kanye",
        "color": "rgb(0, 222, 7)",
        "mp3": "/media/sounds/defy-gravity-x-god-is-kanye.mp3"
    },
    {
        "name": "Aykut elmas oç geliyor",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aykut-elmas-oc-geliyor.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/creeper.mp3"
    },
    {
        "name": "frog laughing meme",
        "color": "rgb(255, 71, 224)",
        "mp3": "/media/sounds/frog-laughing-meme.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "Fahhhh",
        "color": "rgb(255, 105, 125)",
        "mp3": "/media/sounds/fahhhh.mp3"
    },
    {
        "name": "Playboi Carti What?",
        "color": "rgb(123, 0, 0)",
        "mp3": "/media/sounds/playboi-carti-what_lCCvSas.mp3"
    },
    {
        "name": "thank you thank you thank you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thank-you-thank-you-thank-you.mp3"
    },
    {
        "name": "Wanda nara ULTRA BOOSTED",
        "color": "rgb(79, 84, 255)",
        "mp3": "/media/sounds/wanda-nara-ultra-boosted.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "Censor Beep 3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-3.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "Weiii - Daitaku Helios",
        "color": "rgb(38, 96, 255)",
        "mp3": "/media/sounds/weiii-daitaku-helios.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "Kaching Sound FX",
        "color": "rgb(255, 245, 49)",
        "mp3": "/media/sounds/kaching-sound-fx.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "Directed by Robert B Weide",
        "color": "rgb(126, 255, 165)",
        "mp3": "/media/sounds/directed-by-robert-b_voI2Z4T.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "67 sound",
        "color": "rgb(2, 255, 217)",
        "mp3": "/media/sounds/67-sound.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/creeper.mp3"
    },
    {
        "name": "help me!",
        "color": "rgb(173, 0, 0)",
        "mp3": "/media/sounds/2020-10-29-21-41-22.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "thank you thank you thank you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thank-you-thank-you-thank-you.mp3"
    },
    {
        "name": "Chicken screaming on a tree",
        "color": "rgb(255, 145, 0)",
        "mp3": "/media/sounds/chicken-screaming-on-a-tree.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "Playboi Carti What?",
        "color": "rgb(123, 0, 0)",
        "mp3": "/media/sounds/playboi-carti-what_lCCvSas.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "Unlocked",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/likin-park-papercut_1.mp3"
    },
    {
        "name": "Weiii - Daitaku Helios",
        "color": "rgb(38, 96, 255)",
        "mp3": "/media/sounds/weiii-daitaku-helios.mp3"
    },
    {
        "name": "Ağlama Hadi Oyna",
        "color": "rgb(255, 250, 77)",
        "mp3": "/media/sounds/aglama-hadi-oyna.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "Fortnite default dance bass boost",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-default-dance-bass-boosted.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "fighting sound effect",
        "color": "rgb(40, 83, 255)",
        "mp3": "/media/sounds/fighting-sound-effect.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "Scary Tiktok Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-tiktok-music.mp3"
    },
    {
        "name": "Fnaf meme Har Har",
        "color": "rgb(90, 62, 39)",
        "mp3": "/media/sounds/fnaf-meme-har-har.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "Yes King yo somebody get the door",
        "color": "rgb(224, 255, 249)",
        "mp3": "/media/sounds/yes-king-yo-somebody-get-the-door.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "Record scratch sound effect",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/record-scratch_1.mp3"
    },
    {
        "name": "Удар от взгляда Скалы",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/udar-ot-vzgliada-skaly.mp3"
    },
    {
        "name": "Get Out Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-meme.mp3"
    },
    {
        "name": "Discord Jumpscare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-jumpscare.mp3"
    },
    {
        "name": "Error glitch",
        "color": "rgb(10, 255, 38)",
        "mp3": "/media/sounds/error-glitch.mp3"
    },
    {
        "name": "question mark",
        "color": "rgb(12, 89, 255)",
        "mp3": "/media/sounds/question-mark.mp3"
    },
    {
        "name": "Weiii - Daitaku Helios",
        "color": "rgb(38, 96, 255)",
        "mp3": "/media/sounds/weiii-daitaku-helios.mp3"
    },
    {
        "name": "Clash Royale Theme Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/clash-royale-theme-song_7aLBNJ7.mp3"
    },
    {
        "name": "Под новый год нарёт мороз",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pod-novyi-god-nariot-moroz.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "Hell nah (dog)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-nah-dog_lU72pEf.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "knuckles i dont know",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knuckles-i-dont-know.mp3"
    },
    {
        "name": "Смешарики Погоня",
        "color": "rgb(0, 81, 255)",
        "mp3": "/media/sounds/smeshariki-pogonia.mp3"
    },
    {
        "name": "brain rot 67",
        "color": "rgb(0, 238, 255)",
        "mp3": "/media/sounds/brain-rot-67.mp3"
    },
    {
        "name": "aykut elmas hoş geldiniz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aykut-elmas-haber-bulteni-aclslar-audiotrimmer_W3u9wPS.mp3"
    },
    {
        "name": "Дядя Саша",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/diadia-sasha_K0Xb9eR.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "Lizard",
        "color": "rgb(11, 192, 53)",
        "mp3": "/media/sounds/lizard.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "Pan Hit",
        "color": "rgb(51, 51, 204)",
        "mp3": "/media/sounds/hitsound_2.mp3"
    },
    {
        "name": "Fnaf meme Har Har",
        "color": "rgb(90, 62, 39)",
        "mp3": "/media/sounds/fnaf-meme-har-har.mp3"
    },
    {
        "name": "cha-ching money",
        "color": "rgb(47, 138, 79)",
        "mp3": "/media/sounds/cha-ching-money.mp3"
    },
    {
        "name": "67 brain fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-brain-fart.mp3"
    },
    {
        "name": "★ i got this/fahh (Jevin and Kanz)",
        "color": "rgb(255, 46, 4)",
        "mp3": "/media/sounds/i-got-this-fahh-jevin-and-kanz.mp3"
    },
    {
        "name": "FAAHHHHHH",
        "color": "rgb(0, 255, 251)",
        "mp3": "/media/sounds/faahhhhhh.mp3"
    },
    {
        "name": "AFIA OİL ZİL SESİ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/afia-oil-zil-sesi_Gy3QZZZ.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "clap wet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clap-wet.mp3"
    },
    {
        "name": "brain rot 67",
        "color": "rgb(0, 238, 255)",
        "mp3": "/media/sounds/brain-rot-67.mp3"
    },
    {
        "name": "Raaaah skeleton",
        "color": "rgb(255, 228, 201)",
        "mp3": "/media/sounds/raaaah-skeleton.mp3"
    },
    {
        "name": "We Got Him Meme Song Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Fnaf 6 Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
    },
    {
        "name": "Shotgun Pump Reload",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/12g-pumpfull.mp3"
    },
    {
        "name": "Yes King yo somebody get the door",
        "color": "rgb(224, 255, 249)",
        "mp3": "/media/sounds/yes-king-yo-somebody-get-the-door.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "Gey",
        "color": "rgb(107, 5, 255)",
        "mp3": "/media/sounds/gey.mp3"
    },
    {
        "name": "Seinfeld Theme Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/seinfeld-theme_1.mp3"
    },
    {
        "name": "oof minecraft",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "OK - Même",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/okay-meme.mp3"
    },
    {
        "name": "Gojo domain expansion",
        "color": "rgb(217, 202, 255)",
        "mp3": "/media/sounds/rpreplay_final1623689697_mov.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "mini pekka",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mini-pekka.mp3"
    },
    {
        "name": "FAHHHH 2",
        "color": "rgb(100, 38, 255)",
        "mp3": "/media/sounds/fahhhh-2.mp3"
    },
    {
        "name": "Não sobrou nada",
        "color": "rgb(175, 175, 175)",
        "mp3": "/media/sounds/nao-sobrou-nada_fZprXSC.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "Steal a Brainrot - Garama and Mandundung",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-garama-and-mandundung.mp3"
    },
    {
        "name": "Kastamonu Taşköprü Sarımsak Geldi",
        "color": "rgb(255, 227, 216)",
        "mp3": "/media/sounds/kastamonu-taskopru-sarimsak-geldi.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "Creeper Hiss",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/creeper.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "Cash Register",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/audiojoiner120623175716.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "im spongebob",
        "color": "rgb(255, 221, 0)",
        "mp3": "/media/sounds/im-spongebob.mp3"
    },
    {
        "name": "I think I just busted",
        "color": "rgb(178, 249, 255)",
        "mp3": "/media/sounds/i-think-i-just-busted.mp3"
    },
    {
        "name": "пх",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pkh.mp3"
    },
    {
        "name": "samsung spaceline notification",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/samsung-spaceline-notification.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "Грызть какашки",
        "color": "rgb(40, 18, 18)",
        "mp3": "/media/sounds/gryzt-kakashki.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "mr krabs walking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mr-krabs-walking.mp3"
    },
    {
        "name": "Scary girl",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-girl.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "question mark",
        "color": "rgb(12, 89, 255)",
        "mp3": "/media/sounds/question-mark.mp3"
    },
    {
        "name": "take a look around you",
        "color": "rgb(60, 70, 255)",
        "mp3": "/media/sounds/take-a-look-around-you.mp3"
    },
    {
        "name": "I got him (peanut)",
        "color": "rgb(214, 165, 73)",
        "mp3": "/media/sounds/i-got-him-peanut.mp3"
    },
    {
        "name": "Fortnite default dance bass boost",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-default-dance-bass-boosted.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "Cartoon Bite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon_bite_sound_effect.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "Арматура",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/armatura_P29FH2w.mp3"
    },
    {
        "name": "Под новый год насрёт мороз 2",
        "color": "rgb(255, 91, 157)",
        "mp3": "/media/sounds/pod-novyi-god-nasriot-moroz-2.mp3"
    },
    {
        "name": "Удар от взгляда Скалы",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/udar-ot-vzgliada-skaly.mp3"
    },
    {
        "name": "Splat Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/splat-sound-effect-free-download.mp3"
    },
    {
        "name": "Talking Ben No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-ben-no.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "formula 1 radio notification",
        "color": "rgb(126, 255, 107)",
        "mp3": "/media/sounds/formula-1-radio-notification.mp3"
    },
    {
        "name": "cha-ching money",
        "color": "rgb(47, 138, 79)",
        "mp3": "/media/sounds/cha-ching-money.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "FAHHHH 2",
        "color": "rgb(100, 38, 255)",
        "mp3": "/media/sounds/fahhhh-2.mp3"
    },
    {
        "name": "aura farming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aura-farming.mp3"
    },
    {
        "name": "James Doakes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/james-doakes.mp3"
    },
    {
        "name": "Lizard",
        "color": "rgb(11, 192, 53)",
        "mp3": "/media/sounds/lizard.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "mr krabs walking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mr-krabs-walking.mp3"
    },
    {
        "name": "Cartoon Bite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon_bite_sound_effect.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "fortnite pump shotgun",
        "color": "rgb(81, 255, 41)",
        "mp3": "/media/sounds/fortnite-pump-shotgun.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "Spring lock failure",
        "color": "rgb(190, 0, 0)",
        "mp3": "/media/sounds/spring-lock-failure.mp3"
    },
    {
        "name": "Popular Riser",
        "color": "rgb(0, 213, 255)",
        "mp3": "/media/sounds/popular-riser.mp3"
    },
    {
        "name": "LIMBUS COMPANYYYY",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/limbus-companyyyy.mp3"
    },
    {
        "name": "question mark",
        "color": "rgb(12, 89, 255)",
        "mp3": "/media/sounds/question-mark.mp3"
    },
    {
        "name": "take a look around you",
        "color": "rgb(60, 70, 255)",
        "mp3": "/media/sounds/take-a-look-around-you.mp3"
    },
    {
        "name": "I got him (peanut)",
        "color": "rgb(214, 165, 73)",
        "mp3": "/media/sounds/i-got-him-peanut.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "Talking Ben No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-ben-no.mp3"
    },
    {
        "name": "Lil Jon - whaaat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lil-jon-what.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "Charley Kirkey",
        "color": "rgb(133, 137, 255)",
        "mp3": "/media/sounds/charley-kirkey.mp3"
    },
    {
        "name": "jet set radio spray 1",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-1_4CFwPkb.mp3"
    },
    {
        "name": "Грызть какашки",
        "color": "rgb(40, 18, 18)",
        "mp3": "/media/sounds/gryzt-kakashki.mp3"
    },
    {
        "name": "Keemstar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keemstar-screaming.mp3"
    },
    {
        "name": "Teleport sound",
        "color": "rgb(102, 204, 255)",
        "mp3": "/media/sounds/dbz-teleport.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "aura farming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aura-farming.mp3"
    },
    {
        "name": "AYE 67",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aye-67.mp3"
    },
    {
        "name": "fighting sound effect",
        "color": "rgb(40, 83, 255)",
        "mp3": "/media/sounds/fighting-sound-effect.mp3"
    },
    {
        "name": "67 Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/67-meme_cdLcL5q.mp3"
    },
    {
        "name": "Arc Raiders Elevator",
        "color": "rgb(0, 217, 255)",
        "mp3": "/media/sounds/arc-raiders-elevator.mp3"
    },
    {
        "name": "minecraft starting song",
        "color": "rgb(0, 255, 39)",
        "mp3": "/media/sounds/minecraft-starting-song.mp3"
    },
    {
        "name": "Knuckles-Oh No",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/oh_no_1.mp3"
    },
    {
        "name": "Kissing Sound",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/smoochykiss.mp3"
    },
    {
        "name": "yes king teach me",
        "color": "rgb(251, 255, 52)",
        "mp3": "/media/sounds/yes-king-teach-me.mp3"
    },
    {
        "name": "fire alarm chirp",
        "color": "rgb(164, 147, 255)",
        "mp3": "/media/sounds/fire-alarm-chirp.mp3"
    },
    {
        "name": "смех ребенка",
        "color": "rgb(255, 213, 0)",
        "mp3": "/media/sounds/smekh-rebenka.mp3"
    },
    {
        "name": "Nuclear Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nuclear-fart-1.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "Censor Bleep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/censored_beep-mastercard-569981218_3.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "MUSICA DE SIGMA ESTOURADO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-de-sigma-estourado.mp3"
    },
    {
        "name": "Burp & Fart",
        "color": "rgb(255, 114, 114)",
        "mp3": "/media/sounds/burp-fart.mp3"
    },
    {
        "name": "Стоп мне не приятно",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stop-mne-ne-priiatno.mp3"
    },
    {
        "name": "Arc Raiders Elevator",
        "color": "rgb(0, 217, 255)",
        "mp3": "/media/sounds/arc-raiders-elevator.mp3"
    },
    {
        "name": "Германия",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/germaniia_yYPmHKl.mp3"
    },
    {
        "name": "I got him (peanut)",
        "color": "rgb(214, 165, 73)",
        "mp3": "/media/sounds/i-got-him-peanut.mp3"
    },
    {
        "name": "sonic rings falling",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/sonic-rings-drop.mp3"
    },
    {
        "name": "Hell nah (dog)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-nah-dog_lU72pEf.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "Cartoon Slip and Fall",
        "color": "rgb(204, 255, 51)",
        "mp3": "/media/sounds/slipandfall.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "Phone Ringing",
        "color": "rgb(0, 51, 51)",
        "mp3": "/media/sounds/ringing_phone-mike_koenig-1503628110.mp3"
    },
    {
        "name": "Crowd Clap",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/applause_2.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "Fuhhhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuhhhh.mp3"
    },
    {
        "name": "Benny Hill",
        "color": "rgb(153, 0, 204)",
        "mp3": "/media/sounds/the-benny-hill-show-theme-short-sound-clip-and-quote-hark.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "Donald Trump: Fake news",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/donald-trump-fake-news-sound-effect.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "Smoke alarm beep",
        "color": "rgb(0, 26, 255)",
        "mp3": "/media/sounds/smoke-alarm-beep.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "Roblox old winning sound effect",
        "color": "rgb(255, 246, 8)",
        "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "Nuke Bomb!",
        "color": "rgb(255, 119, 8)",
        "mp3": "/media/sounds/nuke-bomb.mp3"
    },
    {
        "name": "LOUD ALARM",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/video0_k03U0Iy.mp3"
    },
    {
        "name": "Mexican trumpet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/el-batido.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "AKH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/akh.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "AFIA OIL",
        "color": "rgb(223, 255, 45)",
        "mp3": "/media/sounds/afia-oil.mp3"
    },
    {
        "name": "tezgah lan bu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tezgah-lan-bu.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Keemstar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keemstar-screaming.mp3"
    },
    {
        "name": "aw Shit here we go again",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Android Notification Bass Boosted",
        "color": "rgb(0, 255, 9)",
        "mp3": "/media/sounds/android-sound-effect-meme_tcbuori.mp3"
    },
    {
        "name": "Door Knocking (Very Realistic)",
        "color": "rgb(49, 85, 6)",
        "mp3": "/media/sounds/door-knocking-very-realistic.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "Talking Ben No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-ben-no.mp3"
    },
    {
        "name": "Hornet GIT GUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hornet_gitgud.mp3"
    },
    {
        "name": "oh my pc meme",
        "color": "rgb(114, 53, 255)",
        "mp3": "/media/sounds/oh-my-pc-meme.mp3"
    },
    {
        "name": "GET OUT - tuco",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-tuco_f3lRYvs.mp3"
    },
    {
        "name": "Whoosh Wind",
        "color": "rgb(104, 124, 255)",
        "mp3": "/media/sounds/whoosh-wind.mp3"
    },
    {
        "name": "Пердуляция",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/perduliatsiia.mp3"
    },
    {
        "name": "Where you going hemmy",
        "color": "rgb(255, 243, 198)",
        "mp3": "/media/sounds/where-you-going-hemmy_G0kcjAc.mp3"
    },
    {
        "name": "jet set radio spray 1",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-1_4CFwPkb.mp3"
    },
    {
        "name": "Система поиска пи###са",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sistema-poiska-pi-sa.mp3"
    },
    {
        "name": "Surprise Emote Animal Crossing",
        "color": "rgb(116, 89, 255)",
        "mp3": "/media/sounds/surprise-emote-animal-crossing.mp3"
    },
    {
        "name": "Entspannter Wecker",
        "color": "rgb(29, 225, 255)",
        "mp3": "/media/sounds/entspannter-wecker.mp3"
    },
    {
        "name": "CEDDIN DEDEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceddin-deden.mp3"
    },
    {
        "name": "allahu akbar",
        "color": "rgb(127, 255, 193)",
        "mp3": "/media/sounds/allahu-akbar_1E2DAiw.mp3"
    },
    {
        "name": "Among us",
        "color": "rgb(138, 255, 29)",
        "mp3": "/media/sounds/among.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "NFL theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-theme-song-hq-mp3cut_yjEDUm1.mp3"
    },
    {
        "name": "Wish I knew",
        "color": "rgb(64, 65, 65)",
        "mp3": "/media/sounds/wish-i-knew.mp3"
    },
    {
        "name": "Não sobrou nada",
        "color": "rgb(175, 175, 175)",
        "mp3": "/media/sounds/nao-sobrou-nada_fZprXSC.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "Deez Nuts Got EM AHAHAHAHA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Tuturu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuturu_1.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "Dial Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dial_up.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "wee weee weee",
        "color": "rgb(49, 255, 221)",
        "mp3": "/media/sounds/weeeee_original_1193597514938524841.mp3"
    },
    {
        "name": "goofy slip",
        "color": "rgb(255, 100, 12)",
        "mp3": "/media/sounds/goofy-slip.mp3"
    },
    {
        "name": "Minecraft Train Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-train-whistle-cave-sound.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "yes king who did that mess",
        "color": "rgb(62, 251, 255)",
        "mp3": "/media/sounds/yes-king-who-did-that-mess.mp3"
    },
    {
        "name": "Where you going hemmy",
        "color": "rgb(255, 243, 198)",
        "mp3": "/media/sounds/where-you-going-hemmy_G0kcjAc.mp3"
    },
    {
        "name": "67 Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/67-meme_cdLcL5q.mp3"
    },
    {
        "name": "eyvah tufan eyvah bass boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eyvah-tufan-eyvah-bass-boosted.mp3"
    },
    {
        "name": "mesii",
        "color": "rgb(37, 186, 255)",
        "mp3": "/media/sounds/mesii.mp3"
    },
    {
        "name": "Boxing Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boxing-bell.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "UNCLE RUCKUS POWERFUL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/powerful.mp3"
    },
    {
        "name": "Tape Rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_S1LPbpU.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "I got this! Ryuko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
    },
    {
        "name": "cha-ching money",
        "color": "rgb(47, 138, 79)",
        "mp3": "/media/sounds/cha-ching-money.mp3"
    },
    {
        "name": "w speed (fahrad)",
        "color": "rgb(144, 255, 96)",
        "mp3": "/media/sounds/w-speed-fahrad.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "abhi maza ayagga",
        "color": "rgb(255, 155, 70)",
        "mp3": "/media/sounds/abhi-maza-ayagga.mp3"
    },
    {
        "name": "Don't push the red button!",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/explosion-sound-effect.mp3"
    },
    {
        "name": "Sneaky Snitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_897.mp3"
    },
    {
        "name": "Imposter Kill (Among Us)",
        "color": "rgb(219, 64, 64)",
        "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
    },
    {
        "name": "Glass Breaking",
        "color": "rgb(0, 51, 153)",
        "mp3": "/media/sounds/broken-glass-sound-effect-high-quality.mp3"
    },
    {
        "name": "3.2.1. Go",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
    },
    {
        "name": "Wrong Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong_5.mp3"
    },
    {
        "name": "Family Feud theme - After 1st  Fast Money",
        "color": "rgb(66, 255, 200)",
        "mp3": "/media/sounds/family-feud-theme-after-1st-fast-money.mp3"
    },
    {
        "name": "Bye have a great time (Twitch sound)",
        "color": "rgb(0, 199, 255)",
        "mp3": "/media/sounds/bye-have-a-great-time-twitch-sound.mp3"
    },
    {
        "name": "aye bruh you got a phone call",
        "color": "rgb(113, 73, 3)",
        "mp3": "/media/sounds/aye-bruh-you-got-a-phone-call.mp3"
    },
    {
        "name": "Sybau sound",
        "color": "rgb(25, 0, 123)",
        "mp3": "/media/sounds/sybau-sound.mp3"
    },
    {
        "name": "Китайский гимн",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kitaiskii-gimn_RZNjKyI.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "Minecraft Train Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-train-whistle-cave-sound.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "Tape Rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_S1LPbpU.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "Fortnite gun shot sound",
        "color": "rgb(8, 133, 255)",
        "mp3": "/media/sounds/fortnite-gun-shot-sound.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "machine gun gunshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_aRsvz4g.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "I got this! Ryuko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
    },
    {
        "name": "Animatronic in door",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/animatronic-in-door.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "Clash Royale Theme Song",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/clash-royale-theme-song_7aLBNJ7.mp3"
    },
    {
        "name": "eyvah tufan eyvah bass boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eyvah-tufan-eyvah-bass-boosted.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "FNAF Balloon Boy Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo4b.mp3"
    },
    {
        "name": "UNCLE RUCKUS POWERFUL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/powerful.mp3"
    },
    {
        "name": "FNaF Open Camera Sound",
        "color": "rgb(156, 156, 156)",
        "mp3": "/media/sounds/fnaf-open-camera-sound.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mentality.mp3"
    },
    {
        "name": "cha-ching money",
        "color": "rgb(47, 138, 79)",
        "mp3": "/media/sounds/cha-ching-money.mp3"
    },
    {
        "name": "Danger Siren Alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-siren-alarm_BfknMds.mp3"
    },
    {
        "name": "Bratz Ew",
        "color": "rgb(230, 20, 255)",
        "mp3": "/media/sounds/bratz-ew.mp3"
    },
    {
        "name": "Gürkan karımı niye",
        "color": "rgb(255, 150, 45)",
        "mp3": "/media/sounds/gurkan-karimi-niye.mp3"
    },
    {
        "name": "Uyansana lan izmarit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uyansana-lan-izmarit.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "money money money money",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/money-button.mp3"
    },
    {
        "name": "Mexican trumpet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/el-batido.mp3"
    },
    {
        "name": "Bratz Ew",
        "color": "rgb(230, 20, 255)",
        "mp3": "/media/sounds/bratz-ew.mp3"
    },
    {
        "name": "yoooooooooooo",
        "color": "rgb(26, 30, 255)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4_objp8XX.mp3"
    },
    {
        "name": "Anderdingus",
        "color": "rgb(54, 150, 30)",
        "mp3": "/media/sounds/anderdingus.mp3"
    },
    {
        "name": "CEDDIN DEDEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceddin-deden.mp3"
    },
    {
        "name": "Open the noor!",
        "color": "rgb(109, 255, 37)",
        "mp3": "/media/sounds/open-the-noor.mp3"
    },
    {
        "name": "Jogo do botão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/psycho-scream-soundbible.mp3"
    },
    {
        "name": "FEIN FEIN FEIN FEIN",
        "color": "rgb(255, 154, 220)",
        "mp3": "/media/sounds/fein-fein-fein-fein.mp3"
    },
    {
        "name": "Funny sounds",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ya.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "L theme death note",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/00000000000000000.mp3"
    },
    {
        "name": "Awkward Crickets",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect_YK6dDJG.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "DDG Boom",
        "color": "rgb(89, 238, 255)",
        "mp3": "/media/sounds/ddg-boom_KZ9NU4w.mp3"
    },
    {
        "name": "Squidward Walking",
        "color": "rgb(184, 223, 211)",
        "mp3": "/media/sounds/squidward-walking.mp3"
    },
    {
        "name": "among us role reveal sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound-effect.mp3"
    },
    {
        "name": "Whoosh Wind",
        "color": "rgb(104, 124, 255)",
        "mp3": "/media/sounds/whoosh-wind.mp3"
    },
    {
        "name": "Dont shut (ARC RAIDERS)",
        "color": "rgb(53, 22, 255)",
        "mp3": "/media/sounds/dont-shut-arc-raiders.mp3"
    },
    {
        "name": "Awkward Pause (Anime Sounds)",
        "color": "rgb(79, 255, 123)",
        "mp3": "/media/sounds/awkward-pause-anime-sounds.mp3"
    },
    {
        "name": "ОХ ЗРЯ Я ТУДА ПОЛЕЗ",
        "color": "rgb(184, 255, 170)",
        "mp3": "/media/sounds/okh-zria-ia-tuda-polez.mp3"
    },
    {
        "name": "Water Flowing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flowing-water-sound-effect.mp3"
    },
    {
        "name": "Hub troll musikk tisse rassikring",
        "color": "rgb(20, 255, 230)",
        "mp3": "/media/sounds/hub-troll-musikk-tisse-rassikring.mp3"
    },
    {
        "name": "HIHI (Michael Jackson)",
        "color": "rgb(168, 168, 168)",
        "mp3": "/media/sounds/mp3download_zgIWEmK.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "NFL Draft Chime",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl-draft-chime.mp3"
    },
    {
        "name": "oi, oi oe oi a eye eye",
        "color": "rgb(18, 21, 108)",
        "mp3": "/media/sounds/oi-oi-oe-oi-a-eye-eye_tUunIyy.mp3"
    },
    {
        "name": "WTF BOOM!",
        "color": "rgb(255, 153, 204)",
        "mp3": "/media/sounds/wtf_boom.mp3"
    },
    {
        "name": "Funny sounds",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ya.mp3"
    },
    {
        "name": "Dark souls death",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/dark-souls-you-died-sound-effect_hm5sYFG.mp3"
    },
    {
        "name": "TV Static",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/tv-static-01.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "Super Mario Beedoo",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/super-mario-beedoo_F3cwLoe.mp3"
    },
    {
        "name": "FNAF Balloon Boy Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo4b.mp3"
    },
    {
        "name": "~discord kitten~",
        "color": "rgb(51, 145, 215)",
        "mp3": "/media/sounds/discord-kitten_GcQZVvU.mp3"
    },
    {
        "name": "Jackpot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slot-machine-jackpot-sound-effect.mp3"
    },
    {
        "name": "Animatronic in door",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/animatronic-in-door.mp3"
    },
    {
        "name": "GET OUT - tuco",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-tuco_f3lRYvs.mp3"
    },
    {
        "name": "among us role reveal sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound-effect.mp3"
    },
    {
        "name": "Harikitte Ikou Kitasan Black",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/harikitte-ikou-kitasan-black.mp3"
    },
    {
        "name": "Система поиска пи###са",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sistema-poiska-pi-sa.mp3"
    },
    {
        "name": "I GOTTA GET OUTTA HERE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-gotta-get-outta-here.mp3"
    },
    {
        "name": "nworldeiqwjhfsa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nworldeiqwjhfsa.mp3"
    },
    {
        "name": "tezgah lan bu",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tezgah-lan-bu.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "Come here boy",
        "color": "rgb(131, 79, 168)",
        "mp3": "/media/sounds/daequan-come-here-boy-sound-effect.mp3"
    },
    {
        "name": "Animal Crossing Isabelle Voice",
        "color": "rgb(243, 255, 75)",
        "mp3": "/media/sounds/animal-crossing-isabelle-voice-clips-no-background-music-youtubemp3free.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/booing.mp3"
    },
    {
        "name": "FNAF 3 Death Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-3-springtraps-jumpscare-brightened.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "Minecraft Train Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-train-whistle-cave-sound.mp3"
    },
    {
        "name": "Goofy ahh SpongeBob sound",
        "color": "rgb(208, 215, 0)",
        "mp3": "/media/sounds/goofy-ahh-spongebob-sound.mp3"
    },
    {
        "name": "Tom and jerry scream",
        "color": "rgb(145, 255, 126)",
        "mp3": "/media/sounds/ow2-online-audio-converter.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "I got this! Ryuko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "CSGO AWP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awp_02.mp3"
    },
    {
        "name": "2k 2k Green",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/record-online-voice-recorder_n6WcChJ.mp3"
    },
    {
        "name": "Seatbelts Everyone!",
        "color": "rgb(255, 225, 33)",
        "mp3": "/media/sounds/seatbelts-everyone.mp3"
    },
    {
        "name": "Cat club",
        "color": "rgb(255, 162, 0)",
        "mp3": "/media/sounds/cat-club.mp3"
    },
    {
        "name": "Vapur tren nerden kalkar",
        "color": "rgb(28, 175, 15)",
        "mp3": "/media/sounds/vapur-tren-nerden-kalkar.mp3"
    },
    {
        "name": "Motorola Droid DROID sound",
        "color": "rgb(36, 255, 30)",
        "mp3": "/media/sounds/motorola-droid-droid-sound.mp3"
    },
    {
        "name": "Yakup usta",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yakup-usta.mp3"
    },
    {
        "name": "orhann",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/orhann.mp3"
    },
    {
        "name": "Air Horn (club sample)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/air-horn-club-sample_1.mp3"
    },
    {
        "name": "Oh Hell No (Vine)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
    },
    {
        "name": "Cartoon running",
        "color": "rgb(255, 193, 0)",
        "mp3": "/media/sounds/cartoon-running-sound-effect-online-audio-converter.mp3"
    },
    {
        "name": "Kitchen Nightmare Dramatic Sound Effect",
        "color": "rgb(106, 0, 0)",
        "mp3": "/media/sounds/kitchen-nightmare-dramatic-sound-effect.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "Tape Rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_S1LPbpU.mp3"
    },
    {
        "name": "Correct sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-correct.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "Slap mario Terminal montage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap_mario-online-audio-converter.mp3"
    },
    {
        "name": "clock tick",
        "color": "rgb(255, 242, 0)",
        "mp3": "/media/sounds/clock-tick.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "Indian Christmas 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-christmas-2-0.mp3"
    },
    {
        "name": "ak47 loud",
        "color": "rgb(45, 58, 255)",
        "mp3": "/media/sounds/ak47-loud.mp3"
    },
    {
        "name": "Bye have a great time (Twitch sound)",
        "color": "rgb(0, 199, 255)",
        "mp3": "/media/sounds/bye-have-a-great-time-twitch-sound.mp3"
    },
    {
        "name": "aye bruh you got a phone call",
        "color": "rgb(113, 73, 3)",
        "mp3": "/media/sounds/aye-bruh-you-got-a-phone-call.mp3"
    },
    {
        "name": "Bluudud “Skill Issue”",
        "color": "rgb(28, 20, 255)",
        "mp3": "/media/sounds/bluudud-skill-issue.mp3"
    },
    {
        "name": "Sybau sound",
        "color": "rgb(25, 0, 123)",
        "mp3": "/media/sounds/sybau-sound.mp3"
    },
    {
        "name": "skeleton banging shield",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skeleton-banging-shield.mp3"
    },
    {
        "name": "sikecaaaam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sikecaaaam.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "Imposter Kill (Among Us)",
        "color": "rgb(219, 64, 64)",
        "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "Family Feud theme - After 1st  Fast Money",
        "color": "rgb(66, 255, 200)",
        "mp3": "/media/sounds/family-feud-theme-after-1st-fast-money.mp3"
    },
    {
        "name": "SYFM LOUD",
        "color": "rgb(255, 223, 223)",
        "mp3": "/media/sounds/syfm-loud_xRTiPcw.mp3"
    },
    {
        "name": "Пасхалко Эщкере 1488",
        "color": "rgb(28, 164, 41)",
        "mp3": "/media/sounds/paskhalko-eshchkere-1488.mp3"
    },
    {
        "name": "Stranger Things Sub Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sub_strangerthings.mp3"
    },
    {
        "name": "Motorola Droid DROID sound",
        "color": "rgb(36, 255, 30)",
        "mp3": "/media/sounds/motorola-droid-droid-sound.mp3"
    },
    {
        "name": "SikibidiYes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sikibidiyes.mp3"
    },
    {
        "name": "Yakup usta",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yakup-usta.mp3"
    },
    {
        "name": "orhann",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/orhann.mp3"
    },
    {
        "name": "OH YEAH -VECTOR",
        "color": "rgb(255, 107, 13)",
        "mp3": "/media/sounds/oh-yeah-vector.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "Oh Hell No (Vine)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
    },
    {
        "name": "Imposter Kill (Among Us)",
        "color": "rgb(219, 64, 64)",
        "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
    },
    {
        "name": "Kitchen Nightmare Dramatic Sound Effect",
        "color": "rgb(106, 0, 0)",
        "mp3": "/media/sounds/kitchen-nightmare-dramatic-sound-effect.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "Slap mario Terminal montage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap_mario-online-audio-converter.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "Indian Christmas 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-christmas-2-0.mp3"
    },
    {
        "name": "Bye have a great time (Twitch sound)",
        "color": "rgb(0, 199, 255)",
        "mp3": "/media/sounds/bye-have-a-great-time-twitch-sound.mp3"
    },
    {
        "name": "Sybau sound",
        "color": "rgb(25, 0, 123)",
        "mp3": "/media/sounds/sybau-sound.mp3"
    },
    {
        "name": "2k green sound skidipi pat pat",
        "color": "rgb(0, 255, 24)",
        "mp3": "/media/sounds/2k-green-sound-skidipi-pat-pat.mp3"
    },
    {
        "name": "sikecaaaam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sikecaaaam.mp3"
    },
    {
        "name": "Gürkan karımı niye",
        "color": "rgb(255, 150, 45)",
        "mp3": "/media/sounds/gurkan-karimi-niye.mp3"
    },
    {
        "name": "Discord_Ping",
        "color": "rgb(68, 102, 255)",
        "mp3": "/media/sounds/y2mate_rQlfs1Y.mp3"
    },
    {
        "name": "Mouse Click",
        "color": "rgb(123, 57, 205)",
        "mp3": "/media/sounds/clicksoundeffect.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "Mario coin sound",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/mario_coin_sound.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "L theme death note",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/00000000000000000.mp3"
    },
    {
        "name": "Ear Ringing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ear-ringing.mp3"
    },
    {
        "name": "Sword Cut",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/espada-som.mp3"
    },
    {
        "name": "SYFM LOUD",
        "color": "rgb(255, 223, 223)",
        "mp3": "/media/sounds/syfm-loud_xRTiPcw.mp3"
    },
    {
        "name": "Пасхалко Эщкере 1488",
        "color": "rgb(28, 164, 41)",
        "mp3": "/media/sounds/paskhalko-eshchkere-1488.mp3"
    },
    {
        "name": "Stranger Things Sub Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sub_strangerthings.mp3"
    },
    {
        "name": "HELLO GUYS welcome back to my minecraft let play",
        "color": "rgb(38, 255, 35)",
        "mp3": "/media/sounds/hello_laoNhkf.mp3"
    },
    {
        "name": "grinder noise - Caldruki",
        "color": "rgb(255, 243, 7)",
        "mp3": "/media/sounds/grinder-noise-caldruki.mp3"
    },
    {
        "name": "Yetersiz bakiye IETT",
        "color": "rgb(173, 204, 255)",
        "mp3": "/media/sounds/yetersiz-bakiye-iett.mp3"
    },
    {
        "name": "eyvah tufan eyvah bass boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eyvah-tufan-eyvah-bass-boosted.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "Minecraft Drop Item/Block Sound Effect",
        "color": "rgb(8, 255, 25)",
        "mp3": "/media/sounds/minecraft-drop-block-sound-effect.mp3"
    },
    {
        "name": "Man Screaming Meme",
        "color": "rgb(111, 214, 255)",
        "mp3": "/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3"
    },
    {
        "name": "Ear Ringing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ear-ringing.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "Dry Bones (death)",
        "color": "rgb(189, 189, 189)",
        "mp3": "/media/sounds/dry-bones-death.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "Creepy and unsettling soundd",
        "color": "rgb(13, 255, 0)",
        "mp3": "/media/sounds/creepy-and-unsettling-soundd.mp3"
    },
    {
        "name": "ak47 loud",
        "color": "rgb(45, 58, 255)",
        "mp3": "/media/sounds/ak47-loud.mp3"
    },
    {
        "name": "kanye-east-fortnite-balls",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kanye-east-fortnite-balls_NguabuF.mp3"
    },
    {
        "name": "aye bruh you got a phone call",
        "color": "rgb(113, 73, 3)",
        "mp3": "/media/sounds/aye-bruh-you-got-a-phone-call.mp3"
    },
    {
        "name": "AIIII AIII AIIII",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aiiii-aiii-aiiii.mp3"
    },
    {
        "name": "rage bee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rage-bee.mp3"
    },
    {
        "name": "ОХ ЗРЯ Я ТУДА ПОЛЕЗ",
        "color": "rgb(184, 255, 170)",
        "mp3": "/media/sounds/okh-zria-ia-tuda-polez.mp3"
    },
    {
        "name": "Stranger Things Sub Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sub_strangerthings.mp3"
    },
    {
        "name": "callate ala verga",
        "color": "rgb(118, 85, 255)",
        "mp3": "/media/sounds/callate-ala-verga.mp3"
    },
    {
        "name": "grinder noise - Caldruki",
        "color": "rgb(255, 243, 7)",
        "mp3": "/media/sounds/grinder-noise-caldruki.mp3"
    },
    {
        "name": "skeleton banging shield",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/skeleton-banging-shield.mp3"
    },
    {
        "name": "Motorola Droid DROID sound",
        "color": "rgb(36, 255, 30)",
        "mp3": "/media/sounds/motorola-droid-droid-sound.mp3"
    },
    {
        "name": "SikibidiYes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sikibidiyes.mp3"
    },
    {
        "name": "Yakup usta",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yakup-usta.mp3"
    },
    {
        "name": "orhann",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/orhann.mp3"
    },
    {
        "name": "OH YEAH -VECTOR",
        "color": "rgb(255, 107, 13)",
        "mp3": "/media/sounds/oh-yeah-vector.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "Was that the bite of 87",
        "color": "rgb(204, 228, 255)",
        "mp3": "/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "Keyboard rage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rage2.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "Slap mario Terminal montage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap_mario-online-audio-converter.mp3"
    },
    {
        "name": "1500 es hora y media",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/1500-es-hora-y-media.mp3"
    },
    {
        "name": "Ghostly sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ghostly-sound.mp3"
    },
    {
        "name": "RAAAAAHHH ‼️‼️‼️",
        "color": "rgb(47, 255, 0)",
        "mp3": "/media/sounds/raaaaahhh.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "Indian Christmas 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-christmas-2-0.mp3"
    },
    {
        "name": "My name is John Marston",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/my-name-is-john-marston.mp3"
    },
    {
        "name": "SYFM LOUD",
        "color": "rgb(255, 223, 223)",
        "mp3": "/media/sounds/syfm-loud_xRTiPcw.mp3"
    },
    {
        "name": "sherma song",
        "color": "rgb(255, 208, 0)",
        "mp3": "/media/sounds/sherma-song.mp3"
    },
    {
        "name": "Harikitte Ikou Kitasan Black",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/harikitte-ikou-kitasan-black.mp3"
    },
    {
        "name": "Jet Set Radio - Success",
        "color": "rgb(50, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-success.mp3"
    },
    {
        "name": "Fuhhhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuhhhh.mp3"
    },
    {
        "name": "2 3 years dagestan",
        "color": "rgb(117, 126, 255)",
        "mp3": "/media/sounds/2-3-years-dagestan.mp3"
    },
    {
        "name": "Ace Ventura Yummy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ace-yummy.mp3"
    },
    {
        "name": "We are Charlie Kirk phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirk-phone.mp3"
    },
    {
        "name": "Hayıydıy kaydeş",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hayiydiy-kaydes.mp3"
    },
    {
        "name": "Follow the damn train CJ!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cj_1.mp3"
    },
    {
        "name": "orhann",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/orhann.mp3"
    },
    {
        "name": "Hell Naw Dog",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-naw-dog.mp3"
    },
    {
        "name": "bye bye mewing",
        "color": "rgb(35, 26, 255)",
        "mp3": "/media/sounds/bye-bye-mewing_fMVssQz.mp3"
    },
    {
        "name": "Uncle Ruckus",
        "color": "rgb(142, 235, 255)",
        "mp3": "/media/sounds/uncle-ruckus.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "TV Static",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/tv-static-01.mp3"
    },
    {
        "name": "adrian explain our friend group",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adrian-explain-our-friend-group.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "Pitbull Fireball HD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a1-0001_pitbull-fireball-edited00086400-online-audio-converter.mp3"
    },
    {
        "name": "Cartoon slide whistle",
        "color": "rgb(73, 38, 255)",
        "mp3": "/media/sounds/cartoon-slide.mp3"
    },
    {
        "name": "New Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause_ub4IBLQ.mp3"
    },
    {
        "name": "BFDI gasp",
        "color": "rgb(15, 255, 115)",
        "mp3": "/media/sounds/bfdi-gasp.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "Kai Cenat Suspense",
        "color": "rgb(76, 61, 77)",
        "mp3": "/media/sounds/kai-cenat-suspense.mp3"
    },
    {
        "name": "You crying? (Gojo)",
        "color": "rgb(22, 0, 55)",
        "mp3": "/media/sounds/you-crying-gojo.mp3"
    },
    {
        "name": "Escanor, who decided that",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/escanor-who-decided-that.mp3"
    },
    {
        "name": "Звук взрыва громко",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zvuk-vzryva-gromko.mp3"
    },
    {
        "name": "I LIKE FEMBOYS",
        "color": "rgb(115, 255, 255)",
        "mp3": "/media/sounds/i-like-femboys_6JHIoHH.mp3"
    },
    {
        "name": "Kolossos laughter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kolossos-laughter.mp3"
    },
    {
        "name": "Ruko jara",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmp_z5b93np.mp3"
    },
    {
        "name": "Fuhhhhh 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuhhhhh-2.mp3"
    },
    {
        "name": "Gemi 2 remix",
        "color": "rgb(255, 246, 227)",
        "mp3": "/media/sounds/gemi-2-remix.mp3"
    },
    {
        "name": "ÇAKALLAR ÇUKALLAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cakallar-cukallar.mp3"
    },
    {
        "name": "çilekli lolipop limonlu lolipop",
        "color": "rgb(255, 10, 104)",
        "mp3": "/media/sounds/cilekli-lolipop-limonlu-lolipop.mp3"
    },
    {
        "name": "Screech - Psst!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/screech-psst_Qj6wNzn.mp3"
    },
    {
        "name": "DA BABY LET'S GOOOOOOO",
        "color": "rgb(0, 8, 255)",
        "mp3": "/media/sounds/vibez-lets-go.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/record-scratch.mp3"
    },
    {
        "name": "Patrick Star Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/patrick_GojJ8l0.mp3"
    },
    {
        "name": "Gojo I Stroke My Pickle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gojo-i-stroke-my-pickle.mp3"
    },
    {
        "name": "Wait a minute who are you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wait-a-minute-who-are-you.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/booing.mp3"
    },
    {
        "name": "rizzzzzzzzing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizzzzzzzzing.mp3"
    },
    {
        "name": "Trump- Don't Be Rude",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trump-dont-be-rude.mp3"
    },
    {
        "name": "John Cena entrance",
        "color": "rgb(51, 0, 255)",
        "mp3": "/media/sounds/cena.mp3"
    },
    {
        "name": "Goofy ahh SpongeBob sound",
        "color": "rgb(208, 215, 0)",
        "mp3": "/media/sounds/goofy-ahh-spongebob-sound.mp3"
    },
    {
        "name": "Wrong lie incorrect buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-lie-incorrect-buzzer.mp3"
    },
    {
        "name": "I like your cut, \"G\"! (revisited)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-like-your-cut-g-revisited.mp3"
    },
    {
        "name": "FNAF 1 Beatbox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-beatbox.mp3"
    },
    {
        "name": "FNaF 2 jumpscare",
        "color": "rgb(59, 248, 255)",
        "mp3": "/media/sounds/fnaf-2-death-scream.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "Cartoon Mr. Krab Walking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-mr-krab-walking.mp3"
    },
    {
        "name": "Cartoon sliping and crash",
        "color": "rgb(2, 255, 228)",
        "mp3": "/media/sounds/cartoon-sliping-and-crash.mp3"
    },
    {
        "name": "iPhone Screenshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone-screenshot.mp3"
    },
    {
        "name": "Sukuna's ryoiki tenkai",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sukunas-ryoiki-tenkai.mp3"
    },
    {
        "name": "49ers Touchdown Foghorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/san-francisco-49ers-foghorn.mp3"
    },
    {
        "name": "Улетаю на гаитии но это минус уши",
        "color": "rgb(76, 0, 0)",
        "mp3": "/media/sounds/uletaiu-na-gaitii-no-eto-minus-ushi.mp3"
    },
    {
        "name": "Phone Disconnected 2x",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/disconnected-2x.mp3"
    },
    {
        "name": "Koun hai re",
        "color": "rgb(79, 184, 255)",
        "mp3": "/media/sounds/koun-hai-re_8ep4nAR.mp3"
    },
    {
        "name": "Got your little boyfriend",
        "color": "rgb(255, 181, 94)",
        "mp3": "/media/sounds/got-your-little-boyfriend.mp3"
    },
    {
        "name": "grinder noise - Caldruki",
        "color": "rgb(255, 243, 7)",
        "mp3": "/media/sounds/grinder-noise-caldruki.mp3"
    },
    {
        "name": "brr sansar salvo",
        "color": "rgb(216, 67, 255)",
        "mp3": "/media/sounds/brr-sansar-salvo.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "tactical nuke incoming!!!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/tactical-nuke.mp3"
    },
    {
        "name": "RICK ROLLED!!!! BWHAHAHAHAHAHA",
        "color": "rgb(255, 255, 102)",
        "mp3": "/media/sounds/epic.mp3"
    },
    {
        "name": "im in danger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fma6waln.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "Ultra Instinct",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version.mp3"
    },
    {
        "name": "Hannah Montana Transition",
        "color": "rgb(255, 233, 0)",
        "mp3": "/media/sounds/hannah-montana-transition.mp3"
    },
    {
        "name": "Snapchat message",
        "color": "rgb(255, 242, 1)",
        "mp3": "/media/sounds/snapchat-message.mp3"
    },
    {
        "name": "Понос.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ponos-mp3.mp3"
    },
    {
        "name": "sen ayrı trende ben ayrı garda",
        "color": "rgb(141, 255, 21)",
        "mp3": "/media/sounds/sen-ayri-trende-ben-ayri-garda.mp3"
    },
    {
        "name": "aye stop the violence",
        "color": "rgb(188, 122, 255)",
        "mp3": "/media/sounds/aye-stop-the-violence.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "Freddy's Honk Nose",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fnaf-12-3-freddys-nose-sound.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "rizzzzzzzzing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizzzzzzzzing.mp3"
    },
    {
        "name": "What meme song",
        "color": "rgb(71, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3"
    },
    {
        "name": "Keyboard rage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rage2.mp3"
    },
    {
        "name": "SCARY INTENSE KNOCKING",
        "color": "rgb(175, 0, 0)",
        "mp3": "/media/sounds/konkonse.mp3"
    },
    {
        "name": "Bedtime",
        "color": "rgb(54, 54, 54)",
        "mp3": "/media/sounds/bedtime.mp3"
    },
    {
        "name": "I like your cut, \"G\"! (revisited)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-like-your-cut-g-revisited.mp3"
    },
    {
        "name": "Correct Ping",
        "color": "rgb(54, 255, 32)",
        "mp3": "/media/sounds/ding-sound-effect_1_CVUaI0C.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "meow meow meow tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meow-meow-meow-tiktok.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "Baldi - All 7 Notebooks",
        "color": "rgb(0, 198, 7)",
        "mp3": "/media/sounds/baldi-all-7-notebooks.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "ak47 loud",
        "color": "rgb(45, 58, 255)",
        "mp3": "/media/sounds/ak47-loud.mp3"
    },
    {
        "name": "sherma song",
        "color": "rgb(255, 208, 0)",
        "mp3": "/media/sounds/sherma-song.mp3"
    },
    {
        "name": "Evil Cat Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/evil-cat-laugh.mp3"
    },
    {
        "name": "Cyberpunk 2077 phone call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cyberpunk-2077-phone-call.mp3"
    },
    {
        "name": "ЫЫЫ Стандоф 2 говно",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yyy-standof-2-govno.mp3"
    },
    {
        "name": "67 on a merry rizzmas",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-on-a-merry-rizzmas.mp3"
    },
    {
        "name": "TODAS MIS PAJAS ME GUSTA RECORDAR",
        "color": "rgb(255, 254, 244)",
        "mp3": "/media/sounds/todas-mis-pajas-me-gusta-recordar.mp3"
    },
    {
        "name": "Stranger Things Sub Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sub_strangerthings.mp3"
    },
    {
        "name": "wow - owen wilson",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wao.mp3"
    },
    {
        "name": "Vallahi bastım Vallahi bastım kaç kaç",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vallahi-bastim-vallahi-bastim-kac-kac.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "talking bennnn noo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-bennnn-noo.mp3"
    },
    {
        "name": "Donald Trump: \"Obamna\"",
        "color": "rgb(42, 173, 112)",
        "mp3": "/media/sounds/obamna.mp3"
    },
    {
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "Flashbang jumpscare (LOUD)",
        "color": "rgb(222, 222, 17)",
        "mp3": "/media/sounds/flashbang-jumpscare-loud.mp3"
    },
    {
        "name": "Awkward Pause (Anime Sounds)",
        "color": "rgb(79, 255, 123)",
        "mp3": "/media/sounds/awkward-pause-anime-sounds.mp3"
    },
    {
        "name": "indian guy singing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-guy-singing.mp3"
    },
    {
        "name": "JEWJEWJEW",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jewjewjew.mp3"
    },
    {
        "name": "M83 - Midnight City",
        "color": "rgb(53, 79, 69)",
        "mp3": "/media/sounds/m83-midnight-city.mp3"
    },
    {
        "name": "Hub troll musikk tisse rassikring",
        "color": "rgb(20, 255, 230)",
        "mp3": "/media/sounds/hub-troll-musikk-tisse-rassikring.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "OOOH MY GOD",
        "color": "rgb(12, 255, 44)",
        "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "name": "talking bennnn noo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-bennnn-noo.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "meowrgh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meowrgh.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "Crowd cheering and clapping",
        "color": "rgb(234, 255, 95)",
        "mp3": "/media/sounds/99634_tomlija_small-crowd-cheering-and-clapping.mp3"
    },
    {
        "name": "Light Machine Gun",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/shooting-ak-47.mp3"
    },
    {
        "name": "suspense pan",
        "color": "rgb(255, 37, 37)",
        "mp3": "/media/sounds/suspense-1_bLEXV6f.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "load gun",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gun-load_abJphmJ.mp3"
    },
    {
        "name": "Yes King Now I Understand",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-now-i-understand.mp3"
    },
    {
        "name": "I love you, i love you",
        "color": "rgb(255, 153, 255)",
        "mp3": "/media/sounds/i-love-you_1.mp3"
    },
    {
        "name": "49ers Touchdown Foghorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/san-francisco-49ers-foghorn.mp3"
    },
    {
        "name": "camera",
        "color": "rgb(13, 5, 255)",
        "mp3": "/media/sounds/camera_RoEAelf.mp3"
    },
    {
        "name": "jet set radio spray 4",
        "color": "rgb(229, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-4_gni8YkP.mp3"
    },
    {
        "name": "I LIKE FEMBOYS",
        "color": "rgb(115, 255, 255)",
        "mp3": "/media/sounds/i-like-femboys_6JHIoHH.mp3"
    },
    {
        "name": "Clash Royale startup baseboosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash-royale-startup-baseboosted.mp3"
    },
    {
        "name": "ishowspeed says nicer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-says-nicer.mp3"
    },
    {
        "name": "TUN TUN FORRÓ",
        "color": "rgb(255, 37, 84)",
        "mp3": "/media/sounds/tun-tun-forro.mp3"
    },
    {
        "name": "We are Charlie Kirk phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirk-phone.mp3"
    },
    {
        "name": "The Simpsons - Nelson's HA-HA!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-simpsons-nelsons-haha.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "Windows 10 USB connect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/connect.mp3"
    },
    {
        "name": "Minecraft skeleton",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/skeleton-sounds-2.mp3"
    },
    {
        "name": "Hello It's John Cena",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hello-its-john-cena.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "scout scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/screaming-scout.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "Baldi Ruler Slap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ruler-slap.mp3"
    },
    {
        "name": "quiet footsteps",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quiet-footstep.mp3"
    },
    {
        "name": "Pitbull Fireball HD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a1-0001_pitbull-fireball-edited00086400-online-audio-converter.mp3"
    },
    {
        "name": "suspense pan",
        "color": "rgb(255, 37, 37)",
        "mp3": "/media/sounds/suspense-1_bLEXV6f.mp3"
    },
    {
        "name": "roblox footsteps",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/action_footsteps_plastic.mp3"
    },
    {
        "name": "Illuminati Confirmed Meme",
        "color": "rgb(128, 0, 255)",
        "mp3": "/media/sounds/x-files-theme-song-copy_dLYAyUk.mp3"
    },
    {
        "name": "load gun",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gun-load_abJphmJ.mp3"
    },
    {
        "name": "Animal Crossing \"Shocked\" Sound Effect",
        "color": "rgb(0, 177, 18)",
        "mp3": "/media/sounds/animal-crossing-shocked-sound-effect.mp3"
    },
    {
        "name": "Yes King Now I Understand",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-now-i-understand.mp3"
    },
    {
        "name": "I love you, i love you",
        "color": "rgb(255, 153, 255)",
        "mp3": "/media/sounds/i-love-you_1.mp3"
    },
    {
        "name": "iphone camera shutter fast",
        "color": "rgb(216, 98, 255)",
        "mp3": "/media/sounds/iphone-camera-shutter-fast.mp3"
    },
    {
        "name": "49ers Touchdown Foghorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/san-francisco-49ers-foghorn.mp3"
    },
    {
        "name": "Ram rider scream",
        "color": "rgb(255, 159, 69)",
        "mp3": "/media/sounds/ram-rider-scream.mp3"
    },
    {
        "name": "camera",
        "color": "rgb(13, 5, 255)",
        "mp3": "/media/sounds/camera_RoEAelf.mp3"
    },
    {
        "name": "Звук взрыва громко",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zvuk-vzryva-gromko.mp3"
    },
    {
        "name": "I LIKE FEMBOYS",
        "color": "rgb(115, 255, 255)",
        "mp3": "/media/sounds/i-like-femboys_6JHIoHH.mp3"
    },
    {
        "name": "ishowspeed says nicer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-says-nicer.mp3"
    },
    {
        "name": "TUN TUN FORRÓ",
        "color": "rgb(255, 37, 84)",
        "mp3": "/media/sounds/tun-tun-forro.mp3"
    },
    {
        "name": "We are Charlie Kirk phone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirk-phone.mp3"
    },
    {
        "name": "The Simpsons - Nelson's HA-HA!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-simpsons-nelsons-haha.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "Windows 10 USB connect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/connect.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Minecraft skeleton",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/skeleton-sounds-2.mp3"
    },
    {
        "name": "YEAH Lil Jon",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeeeeeeeah.mp3"
    },
    {
        "name": "scout scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/screaming-scout.mp3"
    },
    {
        "name": "Samsung estourado",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/samsung-estourado.mp3"
    },
    {
        "name": "Cartoon slide whistle",
        "color": "rgb(73, 38, 255)",
        "mp3": "/media/sounds/cartoon-slide.mp3"
    },
    {
        "name": "Slot machine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slotmachine.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "Fast whoosh",
        "color": "rgb(239, 249, 255)",
        "mp3": "/media/sounds/fast-whoosh.mp3"
    },
    {
        "name": "ayooooooo",
        "color": "rgb(66, 252, 255)",
        "mp3": "/media/sounds/ayooooooo_R0QLGMG.mp3"
    },
    {
        "name": "i am the grand wizard man",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-am-the-grand-wizard-man.mp3"
    },
    {
        "name": "Oh Noh Cartoon",
        "color": "rgb(225, 255, 32)",
        "mp3": "/media/sounds/oh-no_h28Tjuw.mp3"
    },
    {
        "name": "Doors Elevator music",
        "color": "rgb(40, 9, 71)",
        "mp3": "/media/sounds/doors-elevator-music.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Download",
        "color": "rgb(251, 255, 110)",
        "mp3": "/media/sounds/download_CTlTO3X.mp3"
    },
    {
        "name": "ay ay ay im ur little butterfly",
        "color": "rgb(255, 57, 156)",
        "mp3": "/media/sounds/9convert_9f6OCue.mp3"
    },
    {
        "name": "DDG Boom",
        "color": "rgb(89, 238, 255)",
        "mp3": "/media/sounds/ddg-boom_KZ9NU4w.mp3"
    },
    {
        "name": "Rickrolled!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll.mp3"
    },
    {
        "name": "Minecraft Totem Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft-totem-sound.mp3"
    },
    {
        "name": "Cartoon slipping",
        "color": "rgb(153, 255, 213)",
        "mp3": "/media/sounds/cartoon-slipping.mp3"
    },
    {
        "name": "Animal Crossing \"Shocked\" Sound Effect",
        "color": "rgb(0, 177, 18)",
        "mp3": "/media/sounds/animal-crossing-shocked-sound-effect.mp3"
    },
    {
        "name": "Ding Dong Eat it up.",
        "color": "rgb(61, 223, 255)",
        "mp3": "/media/sounds/ding-dong-eat-it-up_ZhlIYUe.mp3"
    },
    {
        "name": "Bosnov 67",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bosnov-67.mp3"
    },
    {
        "name": "Мелстрой пам-пам-пам",
        "color": "rgb(111, 255, 79)",
        "mp3": "/media/sounds/melstroi-pam-pam-pam.mp3"
    },
    {
        "name": "67 Steal A Brainrot",
        "color": "rgb(79, 158, 255)",
        "mp3": "/media/sounds/67-steal-a-brainrot.mp3"
    },
    {
        "name": "2 3 years dagestan",
        "color": "rgb(117, 126, 255)",
        "mp3": "/media/sounds/2-3-years-dagestan.mp3"
    },
    {
        "name": "Communist Detected (Fallout)",
        "color": "rgb(32, 141, 129)",
        "mp3": "/media/sounds/communist-detected-on-american-soil-lethal-force-engaged.mp3"
    },
    {
        "name": "paran-mi-var",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vlc-record-2021-04-18-21h33m23s-yt1s.mp3"
    },
    {
        "name": "The Simpsons - Nelson's HA-HA!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-simpsons-nelsons-haha.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "bye bye mewing",
        "color": "rgb(35, 26, 255)",
        "mp3": "/media/sounds/bye-bye-mewing_fMVssQz.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "Run Meme",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/awolnation-run-audio-mp3cut_TdXTLux.mp3"
    },
    {
        "name": "Ultra Instinct",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "Dead!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/dead.mp3"
    },
    {
        "name": "Get up meek mill",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-up-meek-mill.mp3"
    },
    {
        "name": "Poyo Kirby",
        "color": "rgb(255, 2, 209)",
        "mp3": "/media/sounds/kirby-poyo.mp3"
    },
    {
        "name": "Dune Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dune-scream.mp3"
    },
    {
        "name": "Slendytubbies Tinky Winky",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slendy1.mp3"
    },
    {
        "name": "Windows 7 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-7-startup.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "iphone camera shutter fast",
        "color": "rgb(216, 98, 255)",
        "mp3": "/media/sounds/iphone-camera-shutter-fast.mp3"
    },
    {
        "name": "cat iphone ringtone",
        "color": "rgb(224, 252, 255)",
        "mp3": "/media/sounds/cat-iphone-ringtone.mp3"
    },
    {
        "name": "Good boy (voice actor)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/good-boy-voice-actor.mp3"
    },
    {
        "name": "Awkward Pause (Anime Sounds)",
        "color": "rgb(79, 255, 123)",
        "mp3": "/media/sounds/awkward-pause-anime-sounds.mp3"
    },
    {
        "name": "abhi maza ayagga",
        "color": "rgb(255, 155, 70)",
        "mp3": "/media/sounds/abhi-maza-ayagga.mp3"
    },
    {
        "name": "Got your little boyfriend",
        "color": "rgb(255, 181, 94)",
        "mp3": "/media/sounds/got-your-little-boyfriend.mp3"
    },
    {
        "name": "Mogged",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mogged.mp3"
    },
    {
        "name": "Nooo god!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nooo-god-0.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "Stop it Get Some Help",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled3_13.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "DRIVING IN MY CAR (asgore",
        "color": "rgb(146, 145, 32)",
        "mp3": "/media/sounds/driving-in-my-car-asgore_RhVxJjP.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Minecraft skeleton",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/skeleton-sounds-2.mp3"
    },
    {
        "name": "Shotgun Reload",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shotgun-reload-old_school-ra_the_sun_god-580332022.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "Minecraft TNT explosion!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tnt-explosion.mp3"
    },
    {
        "name": "Cartoon slide whistle",
        "color": "rgb(73, 38, 255)",
        "mp3": "/media/sounds/cartoon-slide.mp3"
    },
    {
        "name": "suspense pan",
        "color": "rgb(255, 37, 37)",
        "mp3": "/media/sounds/suspense-1_bLEXV6f.mp3"
    },
    {
        "name": "Kim Possible Sitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-possible-ringtone.mp3"
    },
    {
        "name": "load gun",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gun-load_abJphmJ.mp3"
    },
    {
        "name": "fnaf running",
        "color": "rgb(218, 187, 255)",
        "mp3": "/media/sounds/fnaf-running.mp3"
    },
    {
        "name": "ayooooooo",
        "color": "rgb(66, 252, 255)",
        "mp3": "/media/sounds/ayooooooo_R0QLGMG.mp3"
    },
    {
        "name": "Yes King Now I Understand",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-now-i-understand.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "49ers Touchdown Foghorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/san-francisco-49ers-foghorn.mp3"
    },
    {
        "name": "Есть пробитие (чистое)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/est-probitie-chistoe.mp3"
    },
    {
        "name": "indian guy singing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-guy-singing.mp3"
    },
    {
        "name": "typing-noises",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/typing-noises.mp3"
    },
    {
        "name": "I LIKE FEMBOYS",
        "color": "rgb(115, 255, 255)",
        "mp3": "/media/sounds/i-like-femboys_6JHIoHH.mp3"
    },
    {
        "name": "Flights Laugh",
        "color": "rgb(8, 166, 255)",
        "mp3": "/media/sounds/flights-laugh.mp3"
    },
    {
        "name": "HIHI (Michael Jackson)",
        "color": "rgb(168, 168, 168)",
        "mp3": "/media/sounds/mp3download_zgIWEmK.mp3"
    },
    {
        "name": "youngboy twitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tne-talk-twitch.mp3"
    },
    {
        "name": "varex",
        "color": "rgb(52, 255, 148)",
        "mp3": "/media/sounds/honda-vtec-2-varex-egsoz-egzoz-eksoz-mukemmel-ses.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "Plug",
        "color": "rgb(24, 255, 44)",
        "mp3": "/media/sounds/plug.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "One Eternity Later",
        "color": "rgb(51, 0, 204)",
        "mp3": "/media/sounds/one-eternity-later.mp3"
    },
    {
        "name": "Curb Your Enthusiasm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/curb-your-enthusiasm.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "Big bomb fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rec_10s_neLGvAd.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "Deltarune ringtone",
        "color": "rgb(96, 116, 255)",
        "mp3": "/media/sounds/deltarune-ringtone_SnkHGfF.mp3"
    },
    {
        "name": "prodigy correct",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/prodigy-correct.mp3"
    },
    {
        "name": "jet set radio spray 4",
        "color": "rgb(229, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-4_gni8YkP.mp3"
    },
    {
        "name": "Tienes un mensajeee!!!",
        "color": "rgb(66, 233, 255)",
        "mp3": "/media/sounds/tienes-un-mensajeee.mp3"
    },
    {
        "name": "Henry Emily speech",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/henry-emily-speech.mp3"
    },
    {
        "name": "Disney Applause",
        "color": "rgb(23, 170, 255)",
        "mp3": "/media/sounds/disney-applause.mp3"
    },
    {
        "name": "LEMON GRAB UNACCEPTABLE",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/lemon-grab-unacceptable_2.mp3"
    },
    {
        "name": "Lekin ye sala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lekin-ye-sala.mp3"
    },
    {
        "name": "Snapchat message",
        "color": "rgb(255, 242, 1)",
        "mp3": "/media/sounds/snapchat-message.mp3"
    },
    {
        "name": "Мама, Я покакал",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mama-ia-pokakal.mp3"
    },
    {
        "name": "Потому что он мусульманин",
        "color": "rgb(255, 174, 69)",
        "mp3": "/media/sounds/potomu-chto-on-musulmanin.mp3"
    },
    {
        "name": "kissss",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kissss.mp3"
    },
    {
        "name": "mike breen bang bang",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-breen-bang-bang.mp3"
    },
    {
        "name": "Гладко гладко",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gladko-gladko.mp3"
    },
    {
        "name": "wow - owen wilson",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wao.mp3"
    },
    {
        "name": "Wow kya ladka hai very handsome boy",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/wow-kya-ladka-hai-very-handsome-boy.mp3"
    },
    {
        "name": "Asian Gong",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/smash-gong-sound-effect-mp3cut.mp3"
    },
    {
        "name": "Shabash beta",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shabash-beta.mp3"
    },
    {
        "name": "Буба окак",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buba-okak.mp3"
    },
    {
        "name": "Yok diyen ghostrider",
        "color": "rgb(255, 114, 14)",
        "mp3": "/media/sounds/yok-diyen-ghostrider.mp3"
    },
    {
        "name": "O ananı bi",
        "color": "rgb(48, 234, 255)",
        "mp3": "/media/sounds/o-anani-bi.mp3"
    },
    {
        "name": "çilekli lolipop limonlu lolipop",
        "color": "rgb(255, 10, 104)",
        "mp3": "/media/sounds/cilekli-lolipop-limonlu-lolipop.mp3"
    },
    {
        "name": "WELCOME TO BRAWLHALLA!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/welcome-to-brawlhalla.mp3"
    },
    {
        "name": "KAK GEM PAHAM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kak-gem-paham.mp3"
    },
    {
        "name": "Naoya6",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naoya6.mp3"
    },
    {
        "name": "where the fk i am",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/where-the-fck-i-am-1.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "Halo",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/Halo.mp3"
    },
    {
        "name": "Windows XP error music",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/musica_1.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "I am Steve",
        "color": "rgb(48, 169, 255)",
        "mp3": "/media/sounds/i-am-steve.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "samsung notification",
        "color": "rgb(80, 194, 255)",
        "mp3": "/media/sounds/samsung-notification-sound-bass-boosted.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "Aztec death whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-whistle-57.mp3"
    },
    {
        "name": "DBD Skill Check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dbd_check_start.mp3"
    },
    {
        "name": "Thats why he's the GOAT",
        "color": "rgb(255, 19, 19)",
        "mp3": "/media/sounds/2021-07-01-21-26-44.mp3"
    },
    {
        "name": "Explosionnn!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/impact_explosion_03.mp3"
    },
    {
        "name": "frieza says hello",
        "color": "rgb(247, 26, 255)",
        "mp3": "/media/sounds/frieza-says-hello.mp3"
    },
    {
        "name": "nba draft",
        "color": "rgb(42, 63, 255)",
        "mp3": "/media/sounds/nba-draft-sound-2021.mp3"
    },
    {
        "name": "we will be right back",
        "color": "rgb(47, 255, 143)",
        "mp3": "/media/sounds/well-be-right-back-green-screen_8oEb98L.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "Ayo-",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ayo_ngawHKc.mp3"
    },
    {
        "name": "one piece luffy's song",
        "color": "rgb(255, 156, 197)",
        "mp3": "/media/sounds/one_piece_ringtone_free_ringtones_for_cell_phones.mp3"
    },
    {
        "name": "Ghostly sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ghostly-sound.mp3"
    },
    {
        "name": "Audience Clapping (Theater)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/theater-applause-128kbps.mp3"
    },
    {
        "name": "Titanic flute fail",
        "color": "rgb(4, 0, 255)",
        "mp3": "/media/sounds/titanic-flute-fail.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "Smiling Friends - We Are So F***ked",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smiling-friends-we-are-so-f-ked.mp3"
    },
    {
        "name": "RAAAAAHHH ‼️‼️‼️",
        "color": "rgb(47, 255, 0)",
        "mp3": "/media/sounds/raaaaahhh.mp3"
    },
    {
        "name": "Ultrakill Explosion",
        "color": "rgb(0, 61, 255)",
        "mp3": "/media/sounds/ultrakill-explosion.mp3"
    },
    {
        "name": "Metal pipe sound",
        "color": "rgb(96, 255, 231)",
        "mp3": "/media/sounds/metal-pipe-sound.mp3"
    },
    {
        "name": "Swish",
        "color": "rgb(132, 71, 255)",
        "mp3": "/media/sounds/swish.mp3"
    },
    {
        "name": "Ding Dong Eat it up.",
        "color": "rgb(61, 223, 255)",
        "mp3": "/media/sounds/ding-dong-eat-it-up_ZhlIYUe.mp3"
    },
    {
        "name": "Мачомен",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/machomen.mp3"
    },
    {
        "name": "INDIAN SONG LONG",
        "color": "rgb(255, 166, 0)",
        "mp3": "/media/sounds/indian-song-long.mp3"
    },
    {
        "name": "Хапни вялого джунджурика",
        "color": "rgb(255, 229, 16)",
        "mp3": "/media/sounds/khapni-vialogo-dzhundzhurika.mp3"
    },
    {
        "name": "Tai Lung - Como não posso?",
        "color": "rgb(255, 128, 30)",
        "mp3": "/media/sounds/tai-lung-como-nao-posso_NrQYPc2.mp3"
    },
    {
        "name": "тыщ тыгыдыгыдыщ тыщ",
        "color": "rgb(34, 255, 74)",
        "mp3": "/media/sounds/tyshch-tygydygydyshch-tyshch.mp3"
    },
    {
        "name": "Crowd hooray",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-hooray.mp3"
    },
    {
        "name": "Avatar fall",
        "color": "rgb(79, 120, 255)",
        "mp3": "/media/sounds/avatar-fall.mp3"
    },
    {
        "name": "Hot hot hot South Park",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hot-hot-hot-gaming-sound-effect.mp3"
    },
    {
        "name": "Caganeira gordurosa",
        "color": "rgb(64, 18, 0)",
        "mp3": "/media/sounds/caganeira-gordurosa.mp3"
    },
    {
        "name": "Trabalha nego…",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trabalha-nego_hmZM0iM.mp3"
    },
    {
        "name": "MİMAR SELİM KAMONN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mimar-selim-kamonn.mp3"
    },
    {
        "name": "Eat bulaga hahah laugh",
        "color": "rgb(133, 0, 0)",
        "mp3": "/media/sounds/eat-bulaga-hahah-laugh.mp3"
    },
    {
        "name": "Kedullah",
        "color": "rgb(134, 255, 5)",
        "mp3": "/media/sounds/kedullah.mp3"
    },
    {
        "name": "Boyun ağrısı original",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boyun-agrisi-original.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "Don't Shoot Arc Raiders",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dont-shoot-arc-raiders.mp3"
    },
    {
        "name": "HELLO MOTO ESTOURADO",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hello-moto-estourado.mp3"
    },
    {
        "name": "Counting or not counting gang violence",
        "color": "rgb(2, 56, 255)",
        "mp3": "/media/sounds/counting-or-not-counting-gang-violence.mp3"
    },
    {
        "name": "Urara~!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/urara_xC0V6sg.mp3"
    },
    {
        "name": "wow - owen wilson",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wao.mp3"
    },
    {
        "name": "Style Points",
        "color": "rgb(227, 165, 255)",
        "mp3": "/media/sounds/style-points_TW2LQSU.mp3"
    },
    {
        "name": "TikTok Core",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tiktok-core.mp3"
    },
    {
        "name": "Franzosen Grrr!",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/franzosen-grrr.mp3"
    },
    {
        "name": "Animal Crossing Bubblegum",
        "color": "rgb(255, 135, 207)",
        "mp3": "/media/sounds/animal-crossing-bubblegum.mp3"
    },
    {
        "name": "HIS NAME IS JOHN CENA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_3.mp3"
    },
    {
        "name": "Follow the damn train CJ!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cj_1.mp3"
    },
    {
        "name": "WOW doge",
        "color": "rgb(255, 229, 44)",
        "mp3": "/media/sounds/wow-doge.mp3"
    },
    {
        "name": "DA BABY LET'S GOOOOOOO",
        "color": "rgb(0, 8, 255)",
        "mp3": "/media/sounds/vibez-lets-go.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "running in the 90s",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/running.mp3"
    },
    {
        "name": "Fail Horn",
        "color": "rgb(102, 255, 51)",
        "mp3": "/media/sounds/thepriceisright-loserhorns.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "Real gunshot",
        "color": "rgb(153, 255, 255)",
        "mp3": "/media/sounds/m4a1_single-kibblesbob-8540445.mp3"
    },
    {
        "name": "Donald Trump: \"Obamna\"",
        "color": "rgb(42, 173, 112)",
        "mp3": "/media/sounds/obamna.mp3"
    },
    {
        "name": "Big fart",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fart_1.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "minecraft Door meme",
        "color": "rgb(188, 255, 46)",
        "mp3": "/media/sounds/minecraft-door-sound-effect.mp3"
    },
    {
        "name": "FNAF Honk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/partyfavorraspypart_ac01_3.mp3"
    },
    {
        "name": "Fnaf phone guy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hiyyyya_2021_05_04_22_13_29_802.mp3"
    },
    {
        "name": "woosh sound effect",
        "color": "rgb(159, 152, 149)",
        "mp3": "/media/sounds/woosh-sound-effect.mp3"
    },
    {
        "name": "AHHHHHHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahhhhhhhhhhhhhhhh_8axRFzx.mp3"
    },
    {
        "name": "crying goblin clash royale",
        "color": "rgb(140, 255, 0)",
        "mp3": "/media/sounds/crying-goblin-clash-royale.mp3"
    },
    {
        "name": "Sukuna's ryoiki tenkai",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sukunas-ryoiki-tenkai.mp3"
    },
    {
        "name": "piuw",
        "color": "rgb(247, 255, 20)",
        "mp3": "/media/sounds/piuw.mp3"
    },
    {
        "name": "UH PUBG",
        "color": "rgb(255, 0, 229)",
        "mp3": "/media/sounds/uh_pjRnSML.mp3"
    },
    {
        "name": "WATER DROP (PLOP)",
        "color": "rgb(20, 0, 255)",
        "mp3": "/media/sounds/water-drop-plop.mp3"
    },
    {
        "name": "Улетаю на гаитии но это минус уши",
        "color": "rgb(76, 0, 0)",
        "mp3": "/media/sounds/uletaiu-na-gaitii-no-eto-minus-ushi.mp3"
    },
    {
        "name": "Adriana salte",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/adriana-salte_SQbOzXu.mp3"
    },
    {
        "name": "I NEED IRON BLOCKS (full version)",
        "color": "rgb(218, 223, 230)",
        "mp3": "/media/sounds/i-need-iron-blocks-full-version.mp3"
    },
    {
        "name": "Blood Splatter",
        "color": "rgb(53, 70, 255)",
        "mp3": "/media/sounds/blood-splatter.mp3"
    },
    {
        "name": "mr-beast-phonk-meme.mp3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mr-beast-phonk-meme-mp3.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "Mortal Kombat - Finish him!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/20_2.mp3"
    },
    {
        "name": "we will be right back",
        "color": "rgb(47, 255, 143)",
        "mp3": "/media/sounds/well-be-right-back-green-screen_8oEb98L.mp3"
    },
    {
        "name": "Silly pinoy laugh",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/silly-laugh_x4pBItl.mp3"
    },
    {
        "name": "Super Mario Beedoo (Normalized)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-beedoo-normalized.mp3"
    },
    {
        "name": "Dog laughing meme form TikTok",
        "color": "rgb(38, 5, 255)",
        "mp3": "/media/sounds/dog-laughing-meme-form-tiktok.mp3"
    },
    {
        "name": "Smiling Friends - We Are So F***ked",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smiling-friends-we-are-so-f-ked.mp3"
    },
    {
        "name": "Swish",
        "color": "rgb(132, 71, 255)",
        "mp3": "/media/sounds/swish.mp3"
    },
    {
        "name": "Apple pay original",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/apple-pay-original.mp3"
    },
    {
        "name": "EXPLODED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exploded_zfp5Xgm.mp3"
    },
    {
        "name": "Oompa Loompa Flute",
        "color": "rgb(48, 202, 69)",
        "mp3": "/media/sounds/oompa-loompa-flute.mp3"
    },
    {
        "name": "W Speed song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/w-speed-song.mp3"
    },
    {
        "name": "Хапни вялого джунджурика",
        "color": "rgb(255, 229, 16)",
        "mp3": "/media/sounds/khapni-vialogo-dzhundzhurika.mp3"
    },
    {
        "name": "ENNNNRIIIIQQQQUEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ennnnriiiiqqqqueeeeeeee.mp3"
    },
    {
        "name": "O CASAL MAIS LINDO DO BRASIL",
        "color": "rgb(233, 30, 255)",
        "mp3": "/media/sounds/o-casal-mais-lindo-do-brasil.mp3"
    },
    {
        "name": "Crowd hooray",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-hooray.mp3"
    },
    {
        "name": "Hot hot hot South Park",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hot-hot-hot-gaming-sound-effect.mp3"
    },
    {
        "name": "demogorgon sound[stranger things]",
        "color": "rgb(88, 189, 255)",
        "mp3": "/media/sounds/demogorgon-sound-stranger-things.mp3"
    },
    {
        "name": "Стипка228про",
        "color": "rgb(88, 255, 241)",
        "mp3": "/media/sounds/stipka228pro.mp3"
    },
    {
        "name": "Cálmate jajajajaja",
        "color": "rgb(72, 238, 255)",
        "mp3": "/media/sounds/calmate-jajajajaja.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "That was easy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/that_was_easy.mp3"
    },
    {
        "name": "BADUM TSS",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/joke_drum_effect.mp3"
    },
    {
        "name": "WE ARE THE CHAMPIONS",
        "color": "rgb(51, 0, 51)",
        "mp3": "/media/sounds/we-are-the-champions-copia.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Despicable me whistle song",
        "color": "rgb(255, 119, 119)",
        "mp3": "/media/sounds/despicable-me-whistle-song.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "Charlie Brown Teacher",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wha-wha1.mp3"
    },
    {
        "name": "Crickets = MattHQ",
        "color": "rgb(153, 204, 102)",
        "mp3": "/media/sounds/crickets-hq.mp3"
    },
    {
        "name": "Wait, What!?",
        "color": "rgb(0, 153, 255)",
        "mp3": "/media/sounds/wait-what.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "FNAF Honk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/partyfavorraspypart_ac01_3.mp3"
    },
    {
        "name": "Kawhi Leonard Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kawhi-leonard-laughs-at-media-day-and-says-he-is-a-fun-guy-audiotrimmer.mp3"
    },
    {
        "name": "miguel o'harris (spider-man 2099)",
        "color": "rgb(21, 32, 157)",
        "mp3": "/media/sounds/miguel-oharris-spider-man-2099.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "Ultra instinct Goku",
        "color": "rgb(12, 206, 255)",
        "mp3": "/media/sounds/ultra-instinct-theme-official-version-audiotrimmer.mp3"
    },
    {
        "name": "Curb Your Enthusiasm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/curb-your-enthusiasm.mp3"
    },
    {
        "name": "Super Mario 64 Thwomp",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/super-mario-64-thwomp-sound-online-audio-converter.mp3"
    },
    {
        "name": "Ahh BullShet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh-bullshet.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "Minecraft skeleton",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/skeleton-sounds-2.mp3"
    },
    {
        "name": "Dead!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/dead.mp3"
    },
    {
        "name": "Do not come/I'm gonna come",
        "color": "rgb(112, 160, 255)",
        "mp3": "/media/sounds/do-not-come-im-gonna-come.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "Freddy's music box",
        "color": "rgb(143, 83, 1)",
        "mp3": "/media/sounds/freddys-music-box_mZSbZz6.mp3"
    },
    {
        "name": "Doorbell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-bell-sound-effect.mp3"
    },
    {
        "name": "sword",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/swish-swoosh-cutscene-sound-effect.mp3"
    },
    {
        "name": "Homer Simpson - D'OH",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/doh_r4RZcVw.mp3"
    },
    {
        "name": "Applause 2",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/applause-tony-d.mp3"
    },
    {
        "name": "minecraft cave sound",
        "color": "rgb(216, 120, 24)",
        "mp3": "/media/sounds/minecraft-train-whistle-cave-sound_MHLpVAG.mp3"
    },
    {
        "name": "Neck crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/neck-crack-sound-effect-free-download.mp3"
    },
    {
        "name": "Hello everybody my name is Markiplier",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-everybody-my-name-is-markiplier_4nI0X3d.mp3"
    },
    {
        "name": "The Rake Scream",
        "color": "rgb(217, 215, 158)",
        "mp3": "/media/sounds/the-rake-scream.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "Fire Burning",
        "color": "rgb(255, 192, 31)",
        "mp3": "/media/sounds/fire-burning.mp3"
    },
    {
        "name": "Maybach Music",
        "color": "rgb(102, 255, 0)",
        "mp3": "/media/sounds/maybach-music-sound-effect.mp3"
    },
    {
        "name": "iPhone Screenshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/iphone-screenshot.mp3"
    },
    {
        "name": "Yes King Now I Understand",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-now-i-understand.mp3"
    },
    {
        "name": "slurpppppppp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slurp-sound-effect_hNzcXo0.mp3"
    },
    {
        "name": "oh my god bro ah hell nah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-bro-ah-hell-nah.mp3"
    },
    {
        "name": "fluffing a duck",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vlc-record-2019-06-12-15h36m37s-fluffing-a-duck.mp3"
    },
    {
        "name": "Millionaire Suspense",
        "color": "rgb(235, 255, 52)",
        "mp3": "/media/sounds/5000000-music-mp3cut.mp3"
    },
    {
        "name": "cry banana cat",
        "color": "rgb(255, 207, 76)",
        "mp3": "/media/sounds/cry-banana-cat.mp3"
    },
    {
        "name": "Жёсткая отрыжка",
        "color": "rgb(45, 224, 0)",
        "mp3": "/media/sounds/zhiostkaia-otryzhka.mp3"
    },
    {
        "name": "Mi bomboclaut",
        "color": "rgb(255, 158, 31)",
        "mp3": "/media/sounds/mi-bomboclaut_linGNm7.mp3"
    },
    {
        "name": "Minecraft - Glass Break",
        "color": "rgb(94, 248, 255)",
        "mp3": "/media/sounds/minecraft-glass-break.mp3"
    },
    {
        "name": "WATER DROP (PLOP)",
        "color": "rgb(20, 0, 255)",
        "mp3": "/media/sounds/water-drop-plop.mp3"
    },
    {
        "name": "HAAAAAAA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/haaaaaaa_ECtJBLV.mp3"
    },
    {
        "name": "Die of death block",
        "color": "rgb(130, 130, 130)",
        "mp3": "/media/sounds/die-of-death-block.mp3"
    },
    {
        "name": "c00lkidd theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-theme.mp3"
    },
    {
        "name": "Пора вставать хозяин(аниме девочка)",
        "color": "rgb(179, 39, 104)",
        "mp3": "/media/sounds/pora-vstavat-khoziain-anime-devochka.mp3"
    },
    {
        "name": "Ding Dong Eat it up.",
        "color": "rgb(61, 223, 255)",
        "mp3": "/media/sounds/ding-dong-eat-it-up_ZhlIYUe.mp3"
    },
    {
        "name": "fairy sparkle",
        "color": "rgb(245, 63, 255)",
        "mp3": "/media/sounds/fairy-sparkle.mp3"
    },
    {
        "name": "Bluudud “Skill Issue”",
        "color": "rgb(28, 20, 255)",
        "mp3": "/media/sounds/bluudud-skill-issue.mp3"
    },
    {
        "name": "cyberpunk message",
        "color": "rgb(7, 15, 255)",
        "mp3": "/media/sounds/cyberpunk-message.mp3"
    },
    {
        "name": "typing-noises",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/typing-noises.mp3"
    },
    {
        "name": "Tai Lung - Como não posso?",
        "color": "rgb(255, 128, 30)",
        "mp3": "/media/sounds/tai-lung-como-nao-posso_NrQYPc2.mp3"
    },
    {
        "name": "Tomato Squash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tomato-squash.mp3"
    },
    {
        "name": "Don't Shoot Arc Raiders",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dont-shoot-arc-raiders.mp3"
    },
    {
        "name": "ENNNNRIIIIQQQQUEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ennnnriiiiqqqqueeeeeeee.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "Bear 5 scream",
        "color": "rgb(20, 13, 119)",
        "mp3": "/media/sounds/bear-5-scream.mp3"
    },
    {
        "name": "fahh but louder very loud",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fahh-but-louder-very-loud.mp3"
    },
    {
        "name": "One piece angry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-angry.mp3"
    },
    {
        "name": "Stranger Things Sub Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sub_strangerthings.mp3"
    },
    {
        "name": "Maelle - PARRY IT!",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/maelle-parry-it.mp3"
    },
    {
        "name": "Itna chubne laga hu sabko",
        "color": "rgb(104, 134, 255)",
        "mp3": "/media/sounds/itna-chubne-laga-hu-sabko.mp3"
    },
    {
        "name": "Девушка так сильно стонет",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/devushka-tak-silno-stonet.mp3"
    },
    {
        "name": "RAHHH Skeletons",
        "color": "rgb(227, 227, 227)",
        "mp3": "/media/sounds/rahhh-skeletons.mp3"
    },
    {
        "name": "Trabalha nego…",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trabalha-nego_hmZM0iM.mp3"
    },
    {
        "name": "Neden Bu Kadar Ciddisin",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/neden-bu-kadar-ciddisin_a71q78G.mp3"
    },
    {
        "name": "Vapur tren nerden kalkar",
        "color": "rgb(28, 175, 15)",
        "mp3": "/media/sounds/vapur-tren-nerden-kalkar.mp3"
    },
    {
        "name": "keloğlan jenerik. (sesi fulleyin)",
        "color": "rgb(255, 196, 249)",
        "mp3": "/media/sounds/keloglan-jenerik-sesi-fulleyin.mp3"
    },
    {
        "name": "ÇAKALLAR ÇUKALLAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cakallar-cukallar.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "Victory!",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/victoryff.swf.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/untitled_3.mp3"
    },
    {
        "name": "Megumin - EXPLOSION!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/explosion_3.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "Neco arc sound effect",
        "color": "rgb(255, 237, 160)",
        "mp3": "/media/sounds/neco-arc-sound-effect.mp3"
    },
    {
        "name": "EXPLODED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exploded_zfp5Xgm.mp3"
    },
    {
        "name": "fairy sparkle",
        "color": "rgb(245, 63, 255)",
        "mp3": "/media/sounds/fairy-sparkle.mp3"
    },
    {
        "name": "Bluudud “Skill Issue”",
        "color": "rgb(28, 20, 255)",
        "mp3": "/media/sounds/bluudud-skill-issue.mp3"
    },
    {
        "name": "cyberpunk message",
        "color": "rgb(7, 15, 255)",
        "mp3": "/media/sounds/cyberpunk-message.mp3"
    },
    {
        "name": "Weird route chapter 4 jingle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/weird-route-chapter-4-jingle.mp3"
    },
    {
        "name": "Tai Lung - Como não posso?",
        "color": "rgb(255, 128, 30)",
        "mp3": "/media/sounds/tai-lung-como-nao-posso_NrQYPc2.mp3"
    },
    {
        "name": "imam ali bashar",
        "color": "rgb(9, 0, 255)",
        "mp3": "/media/sounds/imam-ali-bashar.mp3"
    },
    {
        "name": "Don't Shoot Arc Raiders",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dont-shoot-arc-raiders.mp3"
    },
    {
        "name": "СЛЫШ 1",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/slysh-1.mp3"
    },
    {
        "name": "Bear 5 scream",
        "color": "rgb(20, 13, 119)",
        "mp3": "/media/sounds/bear-5-scream.mp3"
    },
    {
        "name": "fahh but louder very loud",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fahh-but-louder-very-loud.mp3"
    },
    {
        "name": "One piece angry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/one-piece-angry.mp3"
    },
    {
        "name": "Maelle - PARRY IT!",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/maelle-parry-it.mp3"
    },
    {
        "name": "Itna chubne laga hu sabko",
        "color": "rgb(104, 134, 255)",
        "mp3": "/media/sounds/itna-chubne-laga-hu-sabko.mp3"
    },
    {
        "name": "Девушка так сильно стонет",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/devushka-tak-silno-stonet.mp3"
    },
    {
        "name": "RAHHH Skeletons",
        "color": "rgb(227, 227, 227)",
        "mp3": "/media/sounds/rahhh-skeletons.mp3"
    },
    {
        "name": "Trabalha nego…",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trabalha-nego_hmZM0iM.mp3"
    },
    {
        "name": "Neden Bu Kadar Ciddisin",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/neden-bu-kadar-ciddisin_a71q78G.mp3"
    },
    {
        "name": "keloğlan jenerik. (sesi fulleyin)",
        "color": "rgb(255, 196, 249)",
        "mp3": "/media/sounds/keloglan-jenerik-sesi-fulleyin.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "Victory!",
        "color": "rgb(102, 255, 204)",
        "mp3": "/media/sounds/victoryff.swf.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/untitled_3.mp3"
    },
    {
        "name": "Megumin - EXPLOSION!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/explosion_3.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "Neco arc sound effect",
        "color": "rgb(255, 237, 160)",
        "mp3": "/media/sounds/neco-arc-sound-effect.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "mission failed, we get em next time",
        "color": "rgb(179, 215, 255)",
        "mp3": "/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3"
    },
    {
        "name": "RONALDO SIUUUU",
        "color": "rgb(46, 138, 255)",
        "mp3": "/media/sounds/ronaldo-siuuuu.mp3"
    },
    {
        "name": "Kirby falling",
        "color": "rgb(255, 40, 215)",
        "mp3": "/media/sounds/kirby-falling.mp3"
    },
    {
        "name": "Fart poop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/silly_farts-joe-1473367952.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "Deltarune ringtone",
        "color": "rgb(96, 116, 255)",
        "mp3": "/media/sounds/deltarune-ringtone_SnkHGfF.mp3"
    },
    {
        "name": "ih takotnyee",
        "color": "rgb(43, 34, 255)",
        "mp3": "/media/sounds/ih-takotnyee.mp3"
    },
    {
        "name": "AAHHKK (ahhk with echo)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aahhkk-ahhk-with-echo.mp3"
    },
    {
        "name": "prodigy correct",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/prodigy-correct.mp3"
    },
    {
        "name": "geometry dash explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/geometry-dash-explosion.mp3"
    },
    {
        "name": "Disney Applause",
        "color": "rgb(23, 170, 255)",
        "mp3": "/media/sounds/disney-applause.mp3"
    },
    {
        "name": "u have no heart.mp3",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/u-have-no-heart-mp3.mp3"
    },
    {
        "name": "imam ali bashar",
        "color": "rgb(9, 0, 255)",
        "mp3": "/media/sounds/imam-ali-bashar.mp3"
    },
    {
        "name": "Don't Shoot Arc Raiders",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dont-shoot-arc-raiders.mp3"
    },
    {
        "name": "Bear 5 scream",
        "color": "rgb(20, 13, 119)",
        "mp3": "/media/sounds/bear-5-scream.mp3"
    },
    {
        "name": "FAHHHHHHHHHHHHHHHHHHHHH",
        "color": "rgb(161, 106, 252)",
        "mp3": "/media/sounds/fahhhhhhhhhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "RICH MILLIONAIRE BOMBOCLAT (SHORTENED)",
        "color": "rgb(0, 74, 255)",
        "mp3": "/media/sounds/rich-millionaire-bomboclat-shortened.mp3"
    },
    {
        "name": "Kylo Ren nig",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/kylo-ren-nig.mp3"
    },
    {
        "name": "What a good boy",
        "color": "rgb(245, 110, 255)",
        "mp3": "/media/sounds/what-a-good-boy.mp3"
    },
    {
        "name": "Enrique (slowed)",
        "color": "rgb(244, 11, 11)",
        "mp3": "/media/sounds/enrique-slowed.mp3"
    },
    {
        "name": "Sonic - Laser charge",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laserr.mp3"
    },
    {
        "name": "Scorpion - MK",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/scorpion-get-over-here.mp3"
    },
    {
        "name": "chrissy wake up",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/chrissy-wake-up.mp3"
    },
    {
        "name": "Where are you going? I dunno.",
        "color": "rgb(18, 168, 255)",
        "mp3": "/media/sounds/where-are-you-going-i-dunno.mp3"
    },
    {
        "name": "SE VE QUE SI LE SABES LUISITO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/se-ve-que-si-le-sabes-luisito.mp3"
    },
    {
        "name": "Ya sabır",
        "color": "rgb(255, 99, 138)",
        "mp3": "/media/sounds/ya-sabir.mp3"
    },
    {
        "name": "Mãe tem Café? Do mal",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mae-tem-cafe-do-mal.mp3"
    },
    {
        "name": "Село молочное",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/selo-molochnoe.mp3"
    },
    {
        "name": "Green Skullcap cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/green-skullcap-cat.mp3"
    },
    {
        "name": "Ay ya no cabemos",
        "color": "rgb(255, 43, 227)",
        "mp3": "/media/sounds/ay-ya-no-cabemos.mp3"
    },
    {
        "name": "Baba Booey",
        "color": "rgb(51, 102, 204)",
        "mp3": "/media/sounds/bababooey-sound-effect.mp3"
    },
    {
        "name": "sans voice",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/voice_sans.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "FART WET DONTEFLON",
        "color": "rgb(0, 102, 0)",
        "mp3": "/media/sounds/perfect-fart_1.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "TRASH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trash-sound-effect.mp3"
    },
    {
        "name": "undertale - megalovania",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/megalovania.mp3"
    },
    {
        "name": "holy moly emoji",
        "color": "rgb(255, 238, 128)",
        "mp3": "/media/sounds/holy-moly-emoji.mp3"
    },
    {
        "name": "mario",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/untitled_3.mp3"
    },
    {
        "name": "Megumin - EXPLOSION!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/explosion_3.mp3"
    },
    {
        "name": "yessir tik tok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yessir-sound-effect.mp3"
    },
    {
        "name": "Prowler",
        "color": "rgb(118, 49, 154)",
        "mp3": "/media/sounds/prowler.mp3"
    },
    {
        "name": "Censor Beep",
        "color": "rgb(153, 204, 0)",
        "mp3": "/media/sounds/censor-beep-7.mp3"
    },
    {
        "name": "WTF is a kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-a-kilometer.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Disconnect discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_VKI8qDn.mp3"
    },
    {
        "name": "mission failed, we get em next time",
        "color": "rgb(179, 215, 255)",
        "mp3": "/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3"
    },
    {
        "name": "Kirby falling",
        "color": "rgb(255, 40, 215)",
        "mp3": "/media/sounds/kirby-falling.mp3"
    },
    {
        "name": "Fart poop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/silly_farts-joe-1473367952.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "minecraft Door meme",
        "color": "rgb(188, 255, 46)",
        "mp3": "/media/sounds/minecraft-door-sound-effect.mp3"
    },
    {
        "name": "Nyan cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nyan-cat_1.mp3"
    },
    {
        "name": "Minecraft Villager Death",
        "color": "rgb(0, 4, 255)",
        "mp3": "/media/sounds/villager.mp3"
    },
    {
        "name": "Minecraft cave1.ogg",
        "color": "rgb(1, 255, 243)",
        "mp3": "/media/sounds/cave1_gqB8CwT.mp3"
    },
    {
        "name": "Bleep2",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/195116__mattskydoodle__censor-beep.mp3"
    },
    {
        "name": "Bloxy cola",
        "color": "rgb(255, 247, 6)",
        "mp3": "/media/sounds/bloxy-cola.mp3"
    },
    {
        "name": "Meowww",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-end-meow-by-nekocat-just-3-second-1.mp3"
    },
    {
        "name": "Emergency Alert Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/emergency-alert-us-2.mp3"
    },
    {
        "name": "shine sound",
        "color": "rgb(104, 245, 255)",
        "mp3": "/media/sounds/anime-shine-sound-effect_QP4mAaX.mp3"
    },
    {
        "name": "Game Show Correct",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/winner-bell-game-show-sound-effect.mp3"
    },
    {
        "name": "TF2 Notification Sound",
        "color": "rgb(157, 157, 157)",
        "mp3": "/media/sounds/tf2-notification-sound.mp3"
    },
    {
        "name": "The Alien Annihilation",
        "color": "rgb(24, 42, 7)",
        "mp3": "/media/sounds/the-alien-annihilation.mp3"
    },
    {
        "name": "Baby Crying Tears",
        "color": "rgb(255, 178, 252)",
        "mp3": "/media/sounds/baby-crying-tears.mp3"
    },
    {
        "name": "FNAF 6 ending",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-6-ending.mp3"
    },
    {
        "name": "loud shitpost fart",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/loud-shitpost-fart.mp3"
    },
    {
        "name": "Meme mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales_qHtIjyQ.mp3"
    },
    {
        "name": "everybody was kungfu fighting",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/everybody-was-kungfu-fighting.mp3"
    },
    {
        "name": "Deltarune Weapons Pull",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/deltarune-weapons-pull.mp3"
    },
    {
        "name": "Dog laughing meme form TikTok",
        "color": "rgb(38, 5, 255)",
        "mp3": "/media/sounds/dog-laughing-meme-form-tiktok.mp3"
    },
    {
        "name": "Uiiiiiiii!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/uiiiiiiii.mp3"
    },
    {
        "name": "Deltarune Dark Fountain Open",
        "color": "rgb(29, 14, 65)",
        "mp3": "/media/sounds/deltarune-dark-fountain-open.mp3"
    },
    {
        "name": "'What'meme",
        "color": "rgb(112, 237, 205)",
        "mp3": "/media/sounds/what_JOcN7Y8.mp3"
    },
    {
        "name": "Come over here and Kiss me on my hot mouth",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/come-over-here-and-kiss-me-on-my-hot-mouth.mp3"
    },
    {
        "name": "OUI OUI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_DO1kVeR.mp3"
    },
    {
        "name": "Dog laughing meme form TikTok",
        "color": "rgb(38, 5, 255)",
        "mp3": "/media/sounds/dog-laughing-meme-form-tiktok.mp3"
    },
    {
        "name": "Roaring Knight Roar",
        "color": "rgb(46, 0, 0)",
        "mp3": "/media/sounds/roaring-knight-roar.mp3"
    },
    {
        "name": "Titanic flute fail",
        "color": "rgb(4, 0, 255)",
        "mp3": "/media/sounds/titanic-flute-fail.mp3"
    },
    {
        "name": "\"Wow!\" (anime voice accent)",
        "color": "rgb(216, 114, 255)",
        "mp3": "/media/sounds/wow-anime-voice-accent.mp3"
    },
    {
        "name": "Cartoon falling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-falling.mp3"
    },
    {
        "name": "Shanks haki",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shanks-haki.mp3"
    },
    {
        "name": "Tyler the Creator SIKE!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tyler-the-creator-sike_ItZTbtq.mp3"
    },
    {
        "name": "Fortnite Shield Break Sound",
        "color": "rgb(24, 255, 8)",
        "mp3": "/media/sounds/fortnite-shield-break-sound.mp3"
    },
    {
        "name": "wild west sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wild-west-sound.mp3"
    },
    {
        "name": "vine boom spam lol",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-spam-lol.mp3"
    },
    {
        "name": "Metal pipe sound",
        "color": "rgb(96, 255, 231)",
        "mp3": "/media/sounds/metal-pipe-sound.mp3"
    },
    {
        "name": "Golden knight ! Clash royale",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/golden-knight-clash-royale.mp3"
    },
    {
        "name": "truth detector buzzer",
        "color": "rgb(57, 189, 53)",
        "mp3": "/media/sounds/truth-detector-buzzer.mp3"
    },
    {
        "name": "kyrie death note",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/kyrie-death-note.mp3"
    },
    {
        "name": "FAHHHH 6",
        "color": "rgb(31, 57, 255)",
        "mp3": "/media/sounds/fahhhh-6.mp3"
    },
    {
        "name": "Clash brasil",
        "color": "rgb(46, 255, 164)",
        "mp3": "/media/sounds/clash-brasil.mp3"
    },
    {
        "name": "тунг тунг тунг саур татата саур",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-saur-tatata-saur.mp3"
    },
    {
        "name": "cyberpunk message",
        "color": "rgb(7, 15, 255)",
        "mp3": "/media/sounds/cyberpunk-message.mp3"
    },
    {
        "name": "вотч демо",
        "color": "rgb(0, 235, 255)",
        "mp3": "/media/sounds/votch-demo.mp3"
    },
    {
        "name": "Хапни вялого джунджурика",
        "color": "rgb(255, 229, 16)",
        "mp3": "/media/sounds/khapni-vialogo-dzhundzhurika.mp3"
    },
    {
        "name": "Disney Applause",
        "color": "rgb(23, 170, 255)",
        "mp3": "/media/sounds/disney-applause.mp3"
    },
    {
        "name": "Tai Lung - Como não posso?",
        "color": "rgb(255, 128, 30)",
        "mp3": "/media/sounds/tai-lung-como-nao-posso_NrQYPc2.mp3"
    },
    {
        "name": "Baigan",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/baigan.mp3"
    },
    {
        "name": "Ankara messi best sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ankara-messi-best-sound.mp3"
    },
    {
        "name": "latigo",
        "color": "rgb(151, 112, 51)",
        "mp3": "/media/sounds/latigo.mp3"
    },
    {
        "name": "bluudud ringtone",
        "color": "rgb(33, 237, 255)",
        "mp3": "/media/sounds/bluudud-ringtone.mp3"
    },
    {
        "name": "Crowd hooray",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-hooray.mp3"
    },
    {
        "name": "Stranger Things Vecna Grandfather Clock",
        "color": "rgb(103, 0, 255)",
        "mp3": "/media/sounds/stranger-things-vecna-grandfather-clock.mp3"
    },
    {
        "name": "Hot hot hot South Park",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hot-hot-hot-gaming-sound-effect.mp3"
    },
    {
        "name": "OMG IM COMING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omg-im-coming.mp3"
    },
    {
        "name": "6AM (FNaF 2)",
        "color": "rgb(13, 0, 119)",
        "mp3": "/media/sounds/6am-fnaf-2.mp3"
    },
    {
        "name": "Caganeira gordurosa",
        "color": "rgb(64, 18, 0)",
        "mp3": "/media/sounds/caganeira-gordurosa.mp3"
    },
    {
        "name": "demogorgon sound[stranger things]",
        "color": "rgb(88, 189, 255)",
        "mp3": "/media/sounds/demogorgon-sound-stranger-things.mp3"
    },
    {
        "name": "20th Century Fox Fanfare",
        "color": "rgb(255, 211, 0)",
        "mp3": "/media/sounds/20th-century-fox-fanfare.mp3"
    },
    {
        "name": "Family Feud incorrect buzzer",
        "color": "rgb(8, 255, 185)",
        "mp3": "/media/sounds/the-family-feud-buzzer-sound-effect.mp3"
    },
    {
        "name": "funny laugh sound",
        "color": "rgb(126, 135, 255)",
        "mp3": "/media/sounds/funny-laugh-sound-effect.mp3"
    },
    {
        "name": "Crazy Diamond Punch",
        "color": "rgb(177, 190, 255)",
        "mp3": "/media/sounds/crazy-diamond-punch.mp3"
    },
    {
        "name": "gmod ragdoll physics breaking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gmod-ragdoll-physics-breaking.mp3"
    },
    {
        "name": "IHIHIHIHI HAHAHAHA - Starcasm Nyx Yandere Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/starcasm-nyx-yandere-laugh_RTnF27y.mp3"
    },
    {
        "name": "EAGLE EARRAPE",
        "color": "rgb(0, 110, 255)",
        "mp3": "/media/sounds/eagle-earrape.mp3"
    },
    {
        "name": "Random button",
        "color": "rgb(255, 64, 64)",
        "mp3": "/media/sounds/random-button.mp3"
    },
    {
        "name": "roblox spawn",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/roblox-spawn.mp3"
    },
    {
        "name": "Back to the Future - Tinkle",
        "color": "rgb(255, 236, 65)",
        "mp3": "/media/sounds/back-to-the-future-twinkle-ringtone_7oVbUv8.mp3"
    },
    {
        "name": "Dramatic boom Cyael",
        "color": "rgb(96, 15, 255)",
        "mp3": "/media/sounds/shortboom.mp3"
    },
    {
        "name": "suspense build up",
        "color": "rgb(62, 62, 62)",
        "mp3": "/media/sounds/suspense-build-up.mp3"
    },
    {
        "name": "Plankton - Oooooh",
        "color": "rgb(40, 112, 79)",
        "mp3": "/media/sounds/plankton-oooooh.mp3"
    },
    {
        "name": "Kid Slap *oh*",
        "color": "rgb(255, 15, 27)",
        "mp3": "/media/sounds/kid-slap-oh.mp3"
    },
    {
        "name": "anime yamete01",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-yamete01.mp3"
    },
    {
        "name": "DO NOT REDEEM",
        "color": "rgb(101, 26, 26)",
        "mp3": "/media/sounds/do-not-redeem_z7RLKwV.mp3"
    },
    {
        "name": "SONIDO DROSS",
        "color": "rgb(178, 255, 162)",
        "mp3": "/media/sounds/sonido-perturbador.mp3"
    },
    {
        "name": "Indian scammer raging",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-scammer-raging.mp3"
    },
    {
        "name": "Hood Irony Subscribe Bell",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hood-irony-subscribe-bell.mp3"
    },
    {
        "name": "Fnaf Freddy's music box",
        "color": "rgb(85, 61, 6)",
        "mp3": "/media/sounds/fnaf-freddys-music-box.mp3"
    },
    {
        "name": "My Collars Blue",
        "color": "rgb(90, 53, 255)",
        "mp3": "/media/sounds/my-collars-blue.mp3"
    },
    {
        "name": "Chaloo",
        "color": "rgb(100, 234, 46)",
        "mp3": "/media/sounds/chaloo.mp3"
    },
    {
        "name": "TRUCK HORN PLS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/truck-horn-pls.mp3"
    },
    {
        "name": "Lekin ye sala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lekin-ye-sala.mp3"
    },
    {
        "name": "We are Charlie Kirkkkkkk",
        "color": "rgb(229, 255, 0)",
        "mp3": "/media/sounds/we-are-charlie-kirkkkkkk.mp3"
    },
    {
        "name": "clappin cheekz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clappin-cheekz.mp3"
    },
    {
        "name": "GUB GUB GUB!",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/gub-gub-gub.mp3"
    },
    {
        "name": "Sven!",
        "color": "rgb(38, 255, 230)",
        "mp3": "/media/sounds/sven_OpcGpxO.mp3"
    },
    {
        "name": "Goldshi Radar",
        "color": "rgb(202, 219, 220)",
        "mp3": "/media/sounds/goldshi-radar.mp3"
    },
    {
        "name": "ANTONIO LOBATO!!!",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/antonio-lobato_8zPnpk3.mp3"
    },
    {
        "name": "Мармок Soundpad BASS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/marmok-soundpad-bass.mp3"
    },
    {
        "name": "фо фо",
        "color": "rgb(166, 120, 255)",
        "mp3": "/media/sounds/fo-fo.mp3"
    },
    {
        "name": "dear basketball",
        "color": "rgb(255, 157, 0)",
        "mp3": "/media/sounds/dear-basketball.mp3"
    },
    {
        "name": "Ice Cube - Yay Yayee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ice-cube-yay-yayee.mp3"
    },
    {
        "name": "OMG OMG OMG",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/omg-omg-omg.mp3"
    },
    {
        "name": "shorsey",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shorsey.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "two hours later",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-two-hours-later-2019-download-link.mp3"
    },
    {
        "name": "Metal Gear Solid - Codec",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/codec.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Street Fighter K.O",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mlg-resource-street-fighter-ko-greenscreen.mp3"
    },
    {
        "name": "Love Island Text",
        "color": "rgb(184, 255, 42)",
        "mp3": "/media/sounds/yt1s_cizemWX.mp3"
    },
    {
        "name": "GANGNAM STYLE",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/psy-gangnam-style-1.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "Crowd Laughter (short)",
        "color": "rgb(255, 0, 102)",
        "mp3": "/media/sounds/laughter-short.mp3"
    },
    {
        "name": "femur breaker",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scp-containment-breach-femur-breaker-sounds-mp3cut.mp3"
    },
    {
        "name": "suspense rising",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suspense-sound-effect-imovie.mp3"
    },
    {
        "name": "FNAF Honk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/partyfavorraspypart_ac01_3.mp3"
    },
    {
        "name": "BLYAT kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blyat_9T1fo5H.mp3"
    },
    {
        "name": "Talking Ben saying Yes!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-ben-saying-yes.mp3"
    },
    {
        "name": "Wega Jumpscare",
        "color": "rgb(103, 1, 161)",
        "mp3": "/media/sounds/wega-jumpscare.mp3"
    },
    {
        "name": "Crowd Boo",
        "color": "rgb(204, 0, 204)",
        "mp3": "/media/sounds/crowd-boo.mp3"
    },
    {
        "name": "Low Health / Critical Health Pokémon",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/low-health-critical-health-pokemon.mp3"
    },
    {
        "name": "Domain Expansion - Sukuna",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/domain-expansion-sukuna.mp3"
    },
    {
        "name": "Sike short",
        "color": "rgb(77, 255, 255)",
        "mp3": "/media/sounds/sike-1.mp3"
    },
    {
        "name": "Death Splat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/death-splat.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "Enemy encounter (Undertale)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/enemy-encounter-undertale.mp3"
    },
    {
        "name": "You know what that means",
        "color": "rgb(146, 0, 0)",
        "mp3": "/media/sounds/you-know-what-that-means.mp3"
    },
    {
        "name": "Po Pi Po",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/po-pi-po-2.mp3"
    },
    {
        "name": "Kim Possible Sitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-possible-ringtone.mp3"
    },
    {
        "name": "8-bit Happy Birthday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hb128.mp3"
    },
    {
        "name": "frieza says hello",
        "color": "rgb(247, 26, 255)",
        "mp3": "/media/sounds/frieza-says-hello.mp3"
    },
    {
        "name": "we will be right back",
        "color": "rgb(47, 255, 143)",
        "mp3": "/media/sounds/well-be-right-back-green-screen_8oEb98L.mp3"
    },
    {
        "name": "FNAF Ennard Jumpscare",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/fnaf-ennard-jumpscare_srRsKIJ.mp3"
    },
    {
        "name": "DJ Stop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-stop.mp3"
    },
    {
        "name": "Ba Ba Ba Banana - Minion",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/banana-song2.mp3"
    },
    {
        "name": "Unlce Ruckus - Im Black Now",
        "color": "rgb(87, 72, 38)",
        "mp3": "/media/sounds/unlce-ruckus-im-black-now.mp3"
    },
    {
        "name": "Susie Laugh",
        "color": "rgb(167, 0, 255)",
        "mp3": "/media/sounds/susie-laugh.mp3"
    },
    {
        "name": "Freddy fazbear phonk",
        "color": "rgb(74, 177, 255)",
        "mp3": "/media/sounds/freddy-fazbear-phonk.mp3"
    },
    {
        "name": "BARBEQUE CHICKEN ALERT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/barbeque-chicken-alert.mp3"
    },
    {
        "name": "Transition (whoosh)",
        "color": "rgb(48, 227, 255)",
        "mp3": "/media/sounds/transition-whoosh.mp3"
    },
    {
        "name": "Mario 64 Bowser's Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sm64_bowser_laugh-online-audio-converter.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "Discord Calling",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound_tvxg95l.mp3"
    },
    {
        "name": "Sad Musicccccc",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-music.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "Last of Us Clicker sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/the-last-of-us-clicker-sound-dlive.mp3"
    },
    {
        "name": "Old Church Bell Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/old-church-bell-meme.mp3"
    },
    {
        "name": "Vine Boom HQ (Longer)",
        "color": "rgb(101, 0, 0)",
        "mp3": "/media/sounds/vine-boom-hq-longer.mp3"
    },
    {
        "name": "Baby Crying Tears",
        "color": "rgb(255, 178, 252)",
        "mp3": "/media/sounds/baby-crying-tears.mp3"
    },
    {
        "name": "8-bit Happy Birthday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hb128.mp3"
    },
    {
        "name": "Crowd Shocked",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/shocked.mp3"
    },
    {
        "name": "Game Show Intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jazzy-cut-to-commercial-tv-theme-albert-marlowe-production-music-all-rights-reserved.mp3"
    },
    {
        "name": "Buzzer error",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buzzer-error.mp3"
    },
    {
        "name": "Click sound for GD",
        "color": "rgb(88, 255, 74)",
        "mp3": "/media/sounds/click-sound-for-gd.mp3"
    },
    {
        "name": "Body Fall",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/body-fall-sound-effect.mp3"
    },
    {
        "name": "suspense build up",
        "color": "rgb(62, 62, 62)",
        "mp3": "/media/sounds/suspense-build-up.mp3"
    },
    {
        "name": "Finishing Hit - Super Smash Bros Ultimate",
        "color": "rgb(87, 87, 87)",
        "mp3": "/media/sounds/finishing-hit-super-smash-bros-ultimate.mp3"
    },
    {
        "name": "lonely lonely I guess I'm lonely",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lonely-lonely-i-guess-im-lonely.mp3"
    },
    {
        "name": "vine boom sound meme",
        "color": "rgb(167, 140, 255)",
        "mp3": "/media/sounds/vine-boom-sound-meme.mp3"
    },
    {
        "name": "Steam Achievement",
        "color": "rgb(48, 215, 255)",
        "mp3": "/media/sounds/steam-achievement.mp3"
    },
    {
        "name": "Ab tu Gaya beta ab dekh tu (puneet",
        "color": "rgb(255, 69, 151)",
        "mp3": "/media/sounds/ab-tu-gaya-beta-ab-dekh-tu-puneet.mp3"
    },
    {
        "name": "Animal Crossing Catch Sound",
        "color": "rgb(255, 216, 86)",
        "mp3": "/media/sounds/animal-crossing-catch-sound.mp3"
    },
    {
        "name": "GORILLA TAG MONKEYS",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gorilla-tag-monkeys.mp3"
    },
    {
        "name": "Hidup jokowi !!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hidup-jokowi.mp3"
    },
    {
        "name": "Malupiton ARAY KO!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/malupiton-aray-ko.mp3"
    },
    {
        "name": "Hamood habibi",
        "color": "rgb(255, 32, 229)",
        "mp3": "/media/sounds/hamood-habibi-3.mp3"
    },
    {
        "name": "[1] Camera Click",
        "color": "rgb(66, 66, 66)",
        "mp3": "/media/sounds/1-camera-click.mp3"
    },
    {
        "name": "Jeremy Noise",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/jeremy-noise.mp3"
    },
    {
        "name": "randy say NGGR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/randy-say-nggr.mp3"
    },
    {
        "name": "Goldshi Radar",
        "color": "rgb(202, 219, 220)",
        "mp3": "/media/sounds/goldshi-radar.mp3"
    },
    {
        "name": "Neckhurts",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/neckhurts_rf6kfJu.mp3"
    },
    {
        "name": "OMG OMG OMG",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/omg-omg-omg.mp3"
    },
    {
        "name": "Slay Vecna",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slay-vecna.mp3"
    },
    {
        "name": "DENTIST KID MEME (GOD IS) KanyeWest",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dentist-kid-meme-god-is-kanyewest.mp3"
    },
    {
        "name": "Trapaholics",
        "color": "rgb(12, 22, 255)",
        "mp3": "/media/sounds/trapaholics.mp3"
    },
    {
        "name": "Suriye milli marşı",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/suriye-milli-marsi.mp3"
    },
    {
        "name": "One Eternity Later",
        "color": "rgb(51, 0, 204)",
        "mp3": "/media/sounds/one-eternity-later.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "i feel good !!!",
        "color": "rgb(102, 0, 153)",
        "mp3": "/media/sounds/james_brown_-_i_got_you_i_feel_good-1-i-got-you-i-feel-goodtrack-1.mp3"
    },
    {
        "name": "Jutsu Activation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/katon.mp3"
    },
    {
        "name": "Roblox Gravity Coil",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-gravity-coil.mp3"
    },
    {
        "name": "Dodgeball Hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dodgeball.mp3"
    },
    {
        "name": "Toothless Dancing",
        "color": "rgb(78, 253, 255)",
        "mp3": "/media/sounds/toothless-dancing_rT0J7Pn.mp3"
    },
    {
        "name": "Dune Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dune-scream.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "Mortal Kombat - Round Two",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/round-2-fight-mortal-kombat-sound-effect.mp3"
    },
    {
        "name": "troll face laugh meme oh no no no",
        "color": "rgb(68, 255, 162)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3"
    },
    {
        "name": "Pistol sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
    },
    {
        "name": "Dr. Livesey",
        "color": "rgb(11, 57, 3)",
        "mp3": "/media/sounds/dr-livesey.mp3"
    },
    {
        "name": "crowd booing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd-boo-sound-effect.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "AOL Dial-Up",
        "color": "rgb(4, 0, 109)",
        "mp3": "/media/sounds/aoldialup1.mp3"
    },
    {
        "name": "THE record scratch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/record-scratch_u0nwDyU.mp3"
    },
    {
        "name": "This is Jeopardy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jeopardy-intro-1.mp3"
    },
    {
        "name": "what the hell (speed up)",
        "color": "rgb(108, 28, 132)",
        "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
    },
    {
        "name": "Harry potter flute",
        "color": "rgb(49, 35, 255)",
        "mp3": "/media/sounds/harry-potter-themesong-fail-recorder-cover-1.mp3"
    },
    {
        "name": "Regular Show Intro",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/regular-show-intro_GiLyViP.mp3"
    },
    {
        "name": "angry birds theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry-birds-theme-song-audiotrimmer.mp3"
    },
    {
        "name": "Risadinha de ladrão",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3"
    },
    {
        "name": "lizzard-1",
        "color": "rgb(28, 255, 28)",
        "mp3": "/media/sounds/lizzard-1.mp3"
    },
    {
        "name": "dramatic cue A",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/dramatic-cue-a.mp3"
    },
    {
        "name": "wii shop",
        "color": "rgb(5, 181, 255)",
        "mp3": "/media/sounds/02_shop-channel-audiotrimmer.mp3"
    },
    {
        "name": "Again fetty wap",
        "color": "rgb(165, 245, 255)",
        "mp3": "/media/sounds/again-fetty-wap.mp3"
    },
    {
        "name": "Halo theme oooh",
        "color": "rgb(31, 145, 209)",
        "mp3": "/media/sounds/halo-theme-song-original-2m252s.mp3"
    },
    {
        "name": "Geometry Dash Death",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/geometry-dash-death-sound-effect.mp3"
    },
    {
        "name": "idea (ding sound effect)",
        "color": "rgb(157, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2_bICB0mr.mp3"
    },
    {
        "name": "Angel choir with sound effect",
        "color": "rgb(229, 255, 215)",
        "mp3": "/media/sounds/angelchoirmarktreekort.mp3"
    },
    {
        "name": "Game Show Intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jazzy-cut-to-commercial-tv-theme-albert-marlowe-production-music-all-rights-reserved.mp3"
    },
    {
        "name": "discord nofications",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-nofications.mp3"
    },
    {
        "name": "Twitch Default Alert",
        "color": "rgb(0, 255, 170)",
        "mp3": "/media/sounds/default_eKkIk7O.mp3"
    },
    {
        "name": "CS-GO Flashbang",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cs-go-flashbang.mp3"
    },
    {
        "name": "discord mute",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discordmute_IZNcLx2.mp3"
    },
    {
        "name": "Yok diyen ghostrider",
        "color": "rgb(255, 114, 14)",
        "mp3": "/media/sounds/yok-diyen-ghostrider.mp3"
    },
    {
        "name": "O ananı bi",
        "color": "rgb(48, 234, 255)",
        "mp3": "/media/sounds/o-anani-bi.mp3"
    },
    {
        "name": "Buzzer incorrect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/buzzer-incorrect.mp3"
    },
    {
        "name": "F1 Formula One",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/formula1.mp3"
    },
    {
        "name": "Rick and Morty Lick Lick Lick",
        "color": "rgb(51, 204, 255)",
        "mp3": "/media/sounds/lick-lick-say-that.mp3"
    },
    {
        "name": "kill bill",
        "color": "rgb(187, 86, 255)",
        "mp3": "/media/sounds/kill-bill_cDr5LNS.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "miguel o'harris (spider-man 2099)",
        "color": "rgb(21, 32, 157)",
        "mp3": "/media/sounds/miguel-oharris-spider-man-2099.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "Ahh BullShet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh-bullshet.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "KPop Demon Hunters URRRAH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kpop-demon-hunters-urrrah.mp3"
    },
    {
        "name": "Love Island Text",
        "color": "rgb(184, 255, 42)",
        "mp3": "/media/sounds/yt1s_cizemWX.mp3"
    },
    {
        "name": "Mario Yahoo",
        "color": "rgb(204, 153, 0)",
        "mp3": "/media/sounds/super-mario-64-yahoo-sound.mp3"
    },
    {
        "name": "Police Panic Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/panic-button.mp3"
    },
    {
        "name": "ayo wtf",
        "color": "rgb(138, 171, 255)",
        "mp3": "/media/sounds/ayo-wtf-meme.mp3"
    },
    {
        "name": "Gegagedigedagedago (Full)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gegagedigedagedago-full.mp3"
    },
    {
        "name": "Do not come/I'm gonna come",
        "color": "rgb(112, 160, 255)",
        "mp3": "/media/sounds/do-not-come-im-gonna-come.mp3"
    },
    {
        "name": "mission failed, we get em next time",
        "color": "rgb(179, 215, 255)",
        "mp3": "/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "Lil Jon - Okay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lil-jon-okay.mp3"
    },
    {
        "name": "Impostor kill sound",
        "color": "rgb(123, 120, 255)",
        "mp3": "/media/sounds/among-us-impostor-kill-music_01.mp3"
    },
    {
        "name": "Nyan cat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nyan-cat_1.mp3"
    },
    {
        "name": "Valorant ace sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/valorant-ace-sound.mp3"
    },
    {
        "name": "Duolingo Correct",
        "color": "rgb(26, 255, 13)",
        "mp3": "/media/sounds/duolingo-correct.mp3"
    },
    {
        "name": "skedaddle",
        "color": "rgb(7, 62, 78)",
        "mp3": "/media/sounds/skedaddle.mp3"
    },
    {
        "name": "Applause 2",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/applause-tony-d.mp3"
    },
    {
        "name": "Fire Burning",
        "color": "rgb(255, 192, 31)",
        "mp3": "/media/sounds/fire-burning.mp3"
    },
    {
        "name": "oohh chinese man",
        "color": "rgb(31, 188, 255)",
        "mp3": "/media/sounds/oohh_chinese_man_sound_.mp3"
    },
    {
        "name": "ahh 169 Roland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh-169-roland.mp3"
    },
    {
        "name": "Nokia Kick Ringtone",
        "color": "rgb(148, 193, 60)",
        "mp3": "/media/sounds/nokia-kick-ringtone.mp3"
    },
    {
        "name": "idea (ding sound effect)",
        "color": "rgb(157, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2_bICB0mr.mp3"
    },
    {
        "name": "OI OI OI RED LARVA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oi-oi-oi-red-larva.mp3"
    },
    {
        "name": "hahahahahahah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bahahahha.mp3"
    }
]