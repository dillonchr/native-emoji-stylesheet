require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({7:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=["emo-blush","emo-smiley","emo-relaxed","emo-smirk","emo-heart_eyes","emo-kissing_heart","emo-kissing_closed_eyes","emo-flushed","emo-relieved","emo-satisfied","emo-grin","emo-wink","emo-stuck_out_tongue_winking_eye","emo-stuck_out_tongue_closed_eyes","emo-grinning","emo-kissing","emo-kissing_smiling_eyes","emo-stuck_out_tongue","emo-sleeping","emo-worried","emo-frowning","emo-anguished","emo-open_mouth","emo-grimacing","emo-confused","emo-hushed","emo-expressionless","emo-unamused","emo-sweat_smile","emo-sweat","emo-disappointed_relieved","emo-weary","emo-pensive","emo-disappointed","emo-confounded","emo-fearful","emo-cold_sweat","emo-persevere","emo-cry","emo-sob","emo-joy","emo-astonished","emo-scream","emo-tired_face","emo-angry","emo-rage","emo-triumph","emo-sleepy","emo-yum","emo-mask","emo-sunglasses","emo-dizzy_face","emo-imp","emo-smiling_imp","emo-neutral_face","emo-no_mouth","emo-innocent","emo-alien","emo-yellow_heart","emo-blue_heart","emo-purple_heart","emo-heart","emo-green_heart","emo-broken_heart","emo-heartbeat","emo-heartpulse","emo-two_hearts","emo-revolving_hearts","emo-cupid","emo-sparkling_heart","emo-sparkles","emo-star","emo-star2","emo-dizzy","emo-boom","emo-collision","emo-anger","emo-exclamation","emo-question","emo-grey_exclamation","emo-grey_question","emo-zzz","emo-dash","emo-sweat_drops","emo-notes","emo-musical_note","emo-fire","emo-hankey","emo-poop","emo-shit","emo-thumbsup","emo-thumbsdown","emo-ok_hand","emo-punch","emo-facepunch","emo-fist","emo-v","emo-wave","emo-hand","emo-raised_hand","emo-open_hands","emo-point_up","emo-point_down","emo-point_left","emo-point_right","emo-raised_hands","emo-pray","emo-point_up_2","emo-clap","emo-muscle","emo-walking","emo-runner","emo-running","emo-couple","emo-family","emo-two_men_holding_hands","emo-two_women_holding_hands","emo-dancer","emo-dancers","emo-ok_woman","emo-no_good","emo-information_desk_person","emo-raising_hand","emo-bride_with_veil","emo-person_with_pouting_face","emo-person_frowning","emo-bow","emo-couple_with_heart","emo-massage","emo-haircut","emo-nail_care","emo-boy","emo-girl","emo-woman","emo-man","emo-baby","emo-older_woman","emo-older_man","emo-person_with_blond_hair","emo-man_with_gua_pi_mao","emo-man_with_turban","emo-construction_worker","emo-cop","emo-angel","emo-princess","emo-smiley_cat","emo-smile_cat","emo-heart_eyes_cat","emo-kissing_cat","emo-smirk_cat","emo-scream_cat","emo-crying_cat_face","emo-joy_cat","emo-pouting_cat","emo-japanese_ogre","emo-japanese_goblin","emo-see_no_evil","emo-hear_no_evil","emo-speak_no_evil","emo-guardsman","emo-skull","emo-feet","emo-lips","emo-kiss","emo-droplet","emo-ear","emo-eyes","emo-nose","emo-tongue","emo-love_letter","emo-bust_in_silhouette","emo-busts_in_silhouette","emo-speech_balloon","emo-thought_balloon","emo-snowflake","emo-snowman","emo-zap","emo-cyclone","emo-foggy","emo-ocean","emo-cat","emo-dog","emo-mouse","emo-hamster","emo-rabbit","emo-wolf","emo-frog","emo-tiger","emo-koala","emo-bear","emo-pig","emo-pig_nose","emo-cow","emo-boar","emo-monkey_face","emo-monkey","emo-horse","emo-racehorse","emo-camel","emo-sheep","emo-elephant","emo-panda_face","emo-snake","emo-bird","emo-baby_chick","emo-hatched_chick","emo-hatching_chick","emo-chicken","emo-penguin","emo-turtle","emo-bug","emo-honeybee","emo-ant","emo-beetle","emo-snail","emo-octopus","emo-tropical_fish","emo-fish","emo-whale","emo-whale2","emo-dolphin","emo-cow2","emo-ram","emo-rat","emo-water_buffalo","emo-tiger2","emo-rabbit2","emo-dragon","emo-goat","emo-rooster","emo-dog2","emo-pig2","emo-mouse2","emo-ox","emo-dragon_face","emo-blowfish","emo-crocodile","emo-dromedary_camel","emo-leopard","emo-cat2","emo-poodle","emo-paw_prints","emo-bouquet","emo-cherry_blossom","emo-tulip","emo-four_leaf_clover","emo-rose","emo-sunflower","emo-hibiscus","emo-maple_leaf","emo-leaves","emo-fallen_leaf","emo-herb","emo-mushroom","emo-cactus","emo-palm_tree","emo-evergreen_tree","emo-deciduous_tree","emo-chestnut","emo-seedling","emo-blossom","emo-ear_of_rice","emo-shell","emo-globe_with_meridians","emo-sun_with_face","emo-full_moon_with_face","emo-new_moon_with_face","emo-new_moon","emo-waxing_crescent_moon","emo-first_quarter_moon","emo-waxing_gibbous_moon","emo-full_moon","emo-waning_gibbous_moon","emo-last_quarter_moon","emo-waning_crescent_moon","emo-last_quarter_moon_with_face","emo-first_quarter_moon_with_face","emo-moon","emo-earth_africa","emo-earth_americas","emo-earth_asia","emo-volcano","emo-milky_way","emo-partly_sunny","emo-school_satchel","emo-mortar_board","emo-flags","emo-fireworks","emo-sparkler","emo-wind_chime","emo-rice_scene","emo-jack_o_lantern","emo-ghost","emo-santa","emo-christmas_tree","emo-gift","emo-bell","emo-no_bell","emo-tanabata_tree","emo-tada","emo-confetti_ball","emo-balloon","emo-crystal_ball","emo-cd","emo-dvd","emo-floppy_disk","emo-camera","emo-video_camera","emo-movie_camera","emo-computer","emo-tv","emo-iphone","emo-phone","emo-telephone","emo-telephone_receiver","emo-pager","emo-fax","emo-minidisc","emo-vhs","emo-sound","emo-speaker","emo-mute","emo-loudspeaker","emo-mega","emo-hourglass","emo-hourglass_flowing_sand","emo-alarm_clock","emo-watch","emo-radio","emo-satellite","emo-loop","emo-mag","emo-mag_right","emo-unlock","emo-lock","emo-lock_with_ink_pen","emo-closed_lock_with_key","emo-key","emo-bulb","emo-flashlight","emo-high_brightness","emo-low_brightness","emo-electric_plug","emo-battery","emo-calling","emo-email","emo-mailbox","emo-postbox","emo-bath","emo-bathtub","emo-shower","emo-toilet","emo-wrench","emo-nut_and_bolt","emo-hammer","emo-seat","emo-moneybag","emo-yen","emo-dollar","emo-pound","emo-euro","emo-credit_card","emo-money_with_wings","emo-e-mail","emo-inbox_tray","emo-outbox_tray","emo-envelope","emo-incoming_envelope","emo-postal_horn","emo-mailbox_closed","emo-mailbox_with_mail","emo-mailbox_with_no_mail","emo-door","emo-smoking","emo-bomb","emo-gun","emo-hocho","emo-pill","emo-syringe","emo-page_facing_up","emo-page_with_curl","emo-bookmark_tabs","emo-bar_chart","emo-chart_with_upwards_trend","emo-chart_with_downwards_trend","emo-scroll","emo-clipboard","emo-calendar","emo-date","emo-card_index","emo-file_folder","emo-open_file_folder","emo-scissors","emo-pushpin","emo-paperclip","emo-black_nib","emo-pencil2","emo-straight_ruler","emo-triangular_ruler","emo-closed_book","emo-green_book","emo-blue_book","emo-orange_book","emo-notebook","emo-notebook_with_decorative_cover","emo-ledger","emo-books","emo-bookmark","emo-name_badge","emo-microscope","emo-telescope","emo-newspaper","emo-football","emo-basketball","emo-soccer","emo-baseball","emo-tennis","emo-8ball","emo-rugby_football","emo-bowling","emo-golf","emo-mountain_bicyclist","emo-bicyclist","emo-horse_racing","emo-snowboarder","emo-swimmer","emo-surfer","emo-ski","emo-spades","emo-hearts","emo-clubs","emo-diamonds","emo-gem","emo-ring","emo-trophy","emo-musical_score","emo-musical_keyboard","emo-violin","emo-space_invader","emo-video_game","emo-black_joker","emo-flower_playing_cards","emo-game_die","emo-dart","emo-mahjong","emo-clapper","emo-memo","emo-pencil","emo-book","emo-art","emo-microphone","emo-headphones","emo-trumpet","emo-saxophone","emo-guitar","emo-shoe","emo-sandal","emo-high_heel","emo-lipstick","emo-boot","emo-shirt","emo-tshirt","emo-necktie","emo-womans_clothes","emo-dress","emo-running_shirt_with_sash","emo-jeans","emo-kimono","emo-bikini","emo-ribbon","emo-tophat","emo-crown","emo-womans_hat","emo-mans_shoe","emo-closed_umbrella","emo-briefcase","emo-handbag","emo-pouch","emo-purse","emo-eyeglasses","emo-fishing_pole_and_fish","emo-coffee","emo-tea","emo-sake","emo-baby_bottle","emo-beer","emo-beers","emo-cocktail","emo-tropical_drink","emo-wine_glass","emo-fork_and_knife","emo-pizza","emo-hamburger","emo-fries","emo-poultry_leg","emo-meat_on_bone","emo-spaghetti","emo-curry","emo-fried_shrimp","emo-bento","emo-sushi","emo-fish_cake","emo-rice_ball","emo-rice_cracker","emo-rice","emo-ramen","emo-stew","emo-oden","emo-dango","emo-bread","emo-doughnut","emo-custard","emo-icecream","emo-ice_cream","emo-shaved_ice","emo-birthday","emo-cake","emo-cookie","emo-chocolate_bar","emo-candy","emo-lollipop","emo-honey_pot","emo-apple","emo-green_apple","emo-tangerine","emo-lemon","emo-cherries","emo-grapes","emo-watermelon","emo-strawberry","emo-peach","emo-melon","emo-banana","emo-pear","emo-pineapple","emo-sweet_potato","emo-eggplant","emo-tomato","emo-corn","emo-office","emo-post_office","emo-hospital","emo-bank","emo-convenience_store","emo-love_hotel","emo-hotel","emo-wedding","emo-church","emo-department_store","emo-european_post_office","emo-city_sunrise","emo-city_sunset","emo-japanese_castle","emo-european_castle","emo-tent","emo-factory","emo-tokyo_tower","emo-japan","emo-mount_fuji","emo-sunrise_over_mountains","emo-sunrise","emo-stars","emo-statue_of_liberty","emo-bridge_at_night","emo-carousel_horse","emo-rainbow","emo-ferris_wheel","emo-fountain","emo-roller_coaster","emo-ship","emo-speedboat","emo-boat","emo-sailboat","emo-rowboat","emo-anchor","emo-rocket","emo-airplane","emo-helicopter","emo-steam_locomotive","emo-tram","emo-mountain_railway","emo-bike","emo-aerial_tramway","emo-suspension_railway","emo-mountain_cableway","emo-tractor","emo-blue_car","emo-oncoming_automobile","emo-car","emo-red_car","emo-taxi","emo-oncoming_taxi","emo-articulated_lorry","emo-bus","emo-oncoming_bus","emo-rotating_light","emo-police_car","emo-oncoming_police_car","emo-fire_engine","emo-ambulance","emo-minibus","emo-truck","emo-train","emo-station","emo-train2","emo-bullettrain_front","emo-bullettrain_side","emo-light_rail","emo-monorail","emo-railway_car","emo-trolleybus","emo-ticket","emo-fuelpump","emo-vertical_traffic_light","emo-traffic_light","emo-warning","emo-construction","emo-beginner","emo-atm","emo-slot_machine","emo-busstop","emo-barber","emo-hotsprings","emo-checkered_flag","emo-crossed_flags","emo-izakaya_lantern","emo-moyai","emo-circus_tent","emo-performing_arts","emo-round_pushpin","emo-triangular_flag_on_post","emo-keycap_ten","emo-1234","emo-symbols","emo-arrow_backward","emo-arrow_down","emo-arrow_forward","emo-arrow_left","emo-capital_abcd","emo-abcd","emo-abc","emo-arrow_lower_left","emo-arrow_lower_right","emo-arrow_right","emo-arrow_up","emo-arrow_upper_left","emo-arrow_upper_right","emo-arrow_double_down","emo-arrow_double_up","emo-arrow_down_small","emo-arrow_heading_down","emo-arrow_heading_up","emo-leftwards_arrow_with_hook","emo-arrow_right_hook","emo-left_right_arrow","emo-arrow_up_down","emo-arrow_up_small","emo-arrows_clockwise","emo-arrows_counterclockwise","emo-rewind","emo-fast_forward","emo-information_source","emo-ok","emo-twisted_rightwards_arrows","emo-repeat","emo-repeat_one","emo-new","emo-top","emo-up","emo-cool","emo-free","emo-ng","emo-cinema","emo-koko","emo-signal_strength","emo-u5272","emo-u5408","emo-u55b6","emo-u6307","emo-u6708","emo-u6709","emo-u6e80","emo-u7121","emo-u7533","emo-u7a7a","emo-u7981","emo-sa","emo-restroom","emo-mens","emo-womens","emo-baby_symbol","emo-no_smoking","emo-parking","emo-wheelchair","emo-metro","emo-baggage_claim","emo-accept","emo-wc","emo-potable_water","emo-put_litter_in_its_place","emo-secret","emo-congratulations","emo-m","emo-passport_control","emo-left_luggage","emo-customs","emo-ideograph_advantage","emo-cl","emo-sos","emo-id","emo-no_entry_sign","emo-underage","emo-no_mobile_phones","emo-do_not_litter","emo-non-potable_water","emo-no_bicycles","emo-no_pedestrians","emo-children_crossing","emo-no_entry","emo-eight_spoked_asterisk","emo-eight_pointed_black_star","emo-heart_decoration","emo-vs","emo-vibration_mode","emo-mobile_phone_off","emo-chart","emo-currency_exchange","emo-aries","emo-taurus","emo-gemini","emo-cancer","emo-leo","emo-virgo","emo-libra","emo-scorpius","emo-sagittarius","emo-capricorn","emo-aquarius","emo-pisces","emo-ophiuchus","emo-six_pointed_star","emo-negative_squared_cross_mark","emo-a","emo-b","emo-ab","emo-o2","emo-diamond_shape_with_a_dot_inside","emo-recycle","emo-end","emo-on","emo-soon","emo-clock1","emo-clock130","emo-clock10","emo-clock1030","emo-clock11","emo-clock1130","emo-clock12","emo-clock1230","emo-clock2","emo-clock230","emo-clock3","emo-clock330","emo-clock4","emo-clock430","emo-clock5","emo-clock530","emo-clock6","emo-clock630","emo-clock7","emo-clock730","emo-clock8","emo-clock830","emo-clock9","emo-clock930","emo-heavy_dollar_sign","emo-copyright","emo-registered","emo-tm","emo-x","emo-heavy_exclamation_mark","emo-bangbang","emo-interrobang","emo-o","emo-heavy_multiplication_x","emo-heavy_plus_sign","emo-heavy_minus_sign","emo-heavy_division_sign","emo-white_flower","emo-100","emo-heavy_check_mark","emo-ballot_box_with_check","emo-radio_button","emo-link","emo-curly_loop","emo-wavy_dash","emo-part_alternation_mark","emo-trident","emo-white_check_mark","emo-black_square_button","emo-white_square_button","emo-black_circle","emo-white_circle","emo-red_circle","emo-large_blue_circle","emo-large_blue_diamond","emo-large_orange_diamond","emo-small_blue_diamond","emo-small_orange_diamond","emo-small_red_triangle","emo-small_red_triangle_down"];
},{}],5:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
"use strict";var e=require("./emojis"),t=r(e);function r(e){return e&&e.__esModule?e:{default:e}}require("./demo-style.css"),require("./native-emoji-stylesheet.css");var u=document.querySelector("ul"),i=function(e){var r=e.target;n(t.default.filter(function(e){return e.includes(r.value.toLowerCase())}))},n=function(e){u.innerHTML=e.reduce(function(e,t){return e+'<li title="'+t+'"><i class="'+t+'"></i><p>'+t+"</p></li>"},"")};n(t.default),document.querySelector("#filter").addEventListener("input",i);
},{"./emojis":7,"./demo-style.css":5,"./native-emoji-stylesheet.css":5}]},{},[4])