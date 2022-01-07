//KİŞİSEL BİLGİ YAZISI JAVASCRIPTI
 var app1 = document.getElementById('app1');
 var typewriter = new Typewriter(app1, {
    loop: true,
    delay: 10,
    deleteSpeed: 10,
    wrapperClassName: 'typeText2'
 })
 typewriter.typeString('............................. ............................. ............................. ............................. ............................. ............................. .............................')
    .pauseFor(2500)
    .start();

// BAŞLIK SLOGANI JAVASCRİPTİ
var app4 = document.getElementById('app4');
var typewriter = new Typewriter(app4, {
    loop: true,
    delay: 15,
    deleteSpeed: 20,
    cursor: "=ε/̵͇̿̿/’̿̿ ̿ ̿ ̿ ̿ ̿ ",
    cursorClassName: 'typeCursor',
    wrapperClassName: 'typeText5'
})
typewriter.typeString('BUG BOUNTY HUNTING')
    .pauseFor(2500)
    .start();

//Digital Clock
function updateClock(){
      var now = new Date();
      var dname = now.getDay(),
          mo = now.getMonth(),
          dnum = now.getDate(),
          yr = now.getFullYear(),
          hou = now.getHours(),
          min = now.getMinutes(),
          sec = now.getSeconds(),
          pe = "AM";

          if(hou >= 12){
            pe = "PM";
          }
          if(hou == 0){
            hou = 12;
          }
          if(hou > 12){
            hou = hou - 12;
          }

          Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
          }

          var months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
          var week = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
          var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
          var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
          for(var i = 0; i < ids.length; i++)
          document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
    function initClock(){
      updateClock();
      window.setInterval("updateClock()", 1);
    }

//Music Player
new Vue({
  el: "#vues",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Never Fade Away",
          artist: "",
          cover: "",
          source: "../music/music-1.mp3",
          url: "",
          favorited: false
        },
        {
          name: "The Funeral",
          artist: "Band of Horses",
          cover: "",
          source: "../music/music-2.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Mr Robot Mix",
          artist: "",
          cover: "",
          source: "../music/music-3.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Mr Robot Main Theme",
          artist: "",
          cover: "",
          source: "../music/music-4.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Metro 2033 Main Theme ",
          artist: "",
          cover: "",
          source: "../music/music-5.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Intro",
          artist: "",
          cover: "",
          source: "../music/music-6.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Ded Sec",
          artist: "Hudson Mohawke",
          cover: "",
          source: "../music/music-7.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Do I Wanna Know?",
          artist: "Arctic Monkeys",
          cover: "",
          source: "../music/music-8.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Leave Your Body",
          artist: "The Grid",
          cover: "",
          source: "../music/music-9.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Phantoms and Friends",
          artist: "Old Man Canyon",
          cover: "",
          source: "../music/music-10.mp3",
          url: "",
          favorited: false
        },
        {
          name: "When I'm Small",
          artist: "Phantogram",
          cover: "",
          source: "../music/music-11.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Where Is My Mind",
          artist: "Pixies",
          cover: "",
          source: "../music/music-12.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Rose Tattoo",
          artist: "",
          cover: "",
          source: "../music/music-13.mp3",
          url: "",
          favorited: false
        },
        {
          name: "This Aint No Hymn",
          artist: "Saint Saviour",
          cover: "",
          source: "../music/music-14.mp3",
          url: "",
          favorited: false
        },
        {
          name: "The Big Fellah",
          artist: "",
          cover: "",
          source: "../music/music-15.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Paint İt Black",
          artist: "The Rolling Stones",
          cover: "",
          source: "../music/music-16.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Sympathy for the Devil",
          artist: "The Rolling Stones",
          cover: "",
          source: "../music/music-17.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Bitter Sweet Symphony",
          artist: "The Verve",
          cover: "",
          source: "../music/music-18.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Wonderful Life",
          artist: "Junk",
          cover: "",
          source: "../music/music-19.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Paparazzi",
          artist: "Xzibit",
          cover: "",
          source: "../music/music-20.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Young American",
          artist: "Evil",
          cover: "",
          source: "../music/music-21.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Hacking Mix -1",
          artist: "",
          cover: "",
          source: "../music/music-22.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Violet Vape",
          artist: "Cheel",
          cover: "",
          source: "../music/music-23.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Hacking Mix -2",
          artist: "",
          cover: "",
          source: "../music/music-24.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Johny Silverhand's Theme",
          artist: "",
          cover: "",
          source: "../music/music-25.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Hacking Mix -3",
          artist: "",
          cover: "",
          source: "../music/music-26.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Hacking Mix -4",
          artist: "",
          cover: "",
          source: "../music/music-27.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Departure",
          artist: "",
          cover: "",
          source: "../music/music-28.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Easy Way Out",
          artist: "Jerm",
          cover: "",
          source: "../music/music-29.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Hacking Mix -5",
          artist: "",
          cover: "",
          source: "../music/music-30.mp3",
          url: "",
          favorited: false
        },
        {
          name: "The Punisher Main Title",
          artist: "",
          cover: "",
          source: "../music/music-31.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Dorian",
          artist: "Agnes Obel",
          cover: "",
          source: "../music/music-32.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Riverside",
          artist: "Agnes Obel",
          cover: "",
          source: "../music/music-33.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Devil's Tattoo",
          artist: "Helion",
          cover: "",
          source: "../music/music-47.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Burning Desire",
          artist: "Watch Dogs 2",
          cover: "",
          source: "../music/music-46.mp3",
          url: "",
          favorited: false
        },
        {
          name: "The Final Countdown",
          artist: "Erakta",
          cover: "",
          source: "../music/music-45.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Sweet Dreams",
          artist: "Eurythmics,...",
          cover: "",
          source: "../music/music-44.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Eye for an Eye",
          artist: "Watch Dogs 2",
          cover: "",
          source: "../music/music-43.mp3",
          url: "",
          favorited: false
        },
        {
          name: "74 ls The New 24",
          artist: "Giorgio Moroder",
          cover: "",
          source: "../music/music-42.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Boulevard of Broken Dreams",
          artist: "Green Day",
          cover: "",
          source: "../music/music-41.mp3",
          url: "",
          favorited: false
        },
        {
          name: "100HM",
          artist: "Hudson Mohawke",
          cover: "",
          source: "../music/music-40.mp3",
          url: "",
          favorited: false
        },
        {
          name: "De Mac Named Dre",
          artist: "Mac Dre",
          cover: "",
          source: "../music/music-39.mp3",
          url: "",
          favorited: false
        },
        {
          name: "The White Stripes",
          artist: "Seven Nation Army",
          cover: "",
          source: "../music/music-38.mp3",
          url: "",
          favorited: false
        },
        {
          name: "House Of The Rising Sun",
          artist: "The Beatles",
          cover: "",
          source: "../music/music-37.mp3",
          url: "",
          favorited: false
        },
        {
          name: "House Of the Rising Son",
          artist: "The Animals",
          cover: "",
          source: "../music/music-36.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Rusite",
          artist: "Dany Brown",
          cover: "",
          source: "../music/music-35.mp3",
          url: "",
          favorited: false
        },
        {
          name: "Art School Wannabe",
          artist: "Sorority Noise",
          cover: "",
          source: "../music/music-34.mp3",
          url: "",
          favorited: false
        },
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});

// Tuşlar
// Portfolio Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#portfolioBilgi").hide();
        $("#app").show();
    });

    $("#portfolio").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#page3button").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#page2yazi").hide();
        $("#app").hide();
        $("#page1button").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#portfolioBilgi").show();
    });
});
// Konu 1 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu1yazi").hide();
        $("#page2button").hide();
        $("#app").show();
    });

    $("#konu1button").click(function(){
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#page3button").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#page2yazi").hide();
        $("#app").hide();
        $("#page1button").hide();
        $("#delete").show();
        $("#page1button").show();
        $("#konu1yazi").show();
        $("#page2button").show();
    });
});
// Konu 2 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu2yazi").hide();
        $("#app").show();
    });

    $("#konu2button").click(function(){
        $("#konu1yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#page2yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#page1button").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#page3button").show();
        $("#konu2yazi").show();
    });
});
// Konu 3 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu3yazi").hide();
        $("#app").show();
    });

    $("#konu3button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#page3button").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#page2yazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#page1button").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#konu3yazi").show();
    });
});
// Konu 4 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu4yazi").hide();
        $("#app").show();
    });

    $("#konu4button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#page3button").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#page2yazi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#page1button").hide();
        $("#delete").hide();
        $("#konu4yazi").show();
    });
});
// Konu 5 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu5yazi").hide();
        $("#app").show();
    });

    $("#konu5button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#page2yazi").hide();
        $("#page3button").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#page1button").hide();
        $("#konu5yazi").show();
    });
});
// Konu 6 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu6yazi").hide();
        $("#app").show();
    });

    $("#konu6button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#page3button").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#page2yazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#page1button").hide();
        $("#konu6yazi").show();
    });
});
// Konu 7 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu7yazi").hide();
        $("#app").show();
    });

    $("#konu7button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#page3button").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#page2yazi").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#page1button").hide();
        $("#delete").hide();
        $("#konu7yazi").show();
    });
});
// Konu 8 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu8yazi").hide();
        $("#app").show();
    });

    $("#konu8button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu9yazi").hide();
        $("#page3button").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#page2yazi").hide();
        $("#page1button").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#konu8yazi").show();
    });
});
// Konu 9 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu9yazi").hide();
        $("#app").show();
    });

    $("#konu9button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#page3button").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#page2yazi").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#page1button").hide();
        $("#konu9yazi").show();
    });
});
// Konu 10 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu10yazi").hide();
        $("#app").show();
    });

    $("#konu10button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#page2yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#page3button").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#page1button").hide();
        $("#konu10yazi").show();
    });
});
// Disclaimer Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#disclaimeryazi").hide();
        $("#app").show();
    });

    $("#hakkimda1").click(function(){
        $("#page2yazi").hide();
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#page3button").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#delete").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#page1button").hide();
        $("#disclaimeryazi").show();
    });
});
// Privacy Policy Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#privacyyazi").hide();
        $("#app").show();
    });

    $("#hakkimda2").click(function(){
        $("#page2yazi").hide();
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#page3button").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#disclaimeryazi").hide();
        $("#portfolioBilgi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#page1button").hide();
        $("#privacyyazi").show();
    });
});
// KATEGORİLER
$(document).ready(function(){
    $("#geri").click(function(){
        $("#kategorileryazi").hide();
        $("#app").show();
    });

    $("#bar-konular").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#page3button").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#privacyyazi").hide();
        $("#portfolioyazi").hide();
        $("#privacyyazi").hide();
        $("#disclaimeryazi").hide();
        $("#page2yazi").hide();
        $("#app").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#page1button").hide();
        $("#kategorileryazi").show();
    });
});
// Portfolio
$(document).ready(function(){
    $("#geri").click(function(){
        $("#portfolioyazi").hide();
        $("#app").show();
    });

    $("#bar-portfolio").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#page3button").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#disclaimeryazi").hide();
        $("#portfolioBilgi").hide();
        $("#kategorileryazi").hide();
        $("#privacyyazi").hide();
        $("#disclaimeryazi").hide();
        $("#app").hide();
        $("#page2yazi").hide();
        $("#page2button").hide();
        $("#delete").hide();
        $("#page1button").hide();
        $("#portfolioyazi").show();
    });
});
// Kategori-1
$(document).ready(function(){
    $("#geri").click(function(){
        $("#konu1yazi").hide();
        $("#app").show();
    });

    $("#one").click(function(){
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#page3button").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#page2yazi").hide();
        $("#app").hide();
        $("#delete").show();
        $("#page2button").show();
        $("#page1button").show();
        $("#konu1yazi").show();
    });
});
// Page1 Button
$(document).ready(function(){
    $("#geri").click(function(){
        $("#page1button").hide();
        $("#app").show();
    });

    $("#page1button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#page3button").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#page2yazi").hide();
        $("#konu1yazi").hide();
        $("#delete").show();
        $("#page2button").show();
        $("#page1button").show();
        $("#konu1yazi").show();
    });
});
// Page2 Yazısı
$(document).ready(function(){
    $("#geri").click(function(){
        $("#page2yazi").hide();
        $("#app").show();
    });

    $("#page2button").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#page3button").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#konu1yazi").hide();
        $("#delete").show();
        $("#page2button").show();
        $("#page1button").show();
        $("#page2yazi").show();
    });
});
// Devam Butonu
$(document).ready(function(){
    $("#geri").click(function(){
        $("#delete").hide();
        $("#app").show();
    });

    $("#delete").click(function(){
        $("#konu1yazi").hide();
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#page3button").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#app").hide();
        $("#konu1yazi").hide();
        $("#delete").show();
        $("#page2button").show();
        $("#page1button").show();
        $("#page2yazi").show();
    });
});
// konu2 page-1
$(document).ready(function(){
    $("#geri").click(function(){
        $("#page3button").hide();
        $("#app").show();
    });

    $("#page3button").click(function(){
        $("#konu2yazi").hide();
        $("#konu3yazi").hide();
        $("#konu4yazi").hide();
        $("#konu5yazi").hide();
        $("#konu6yazi").hide();
        $("#konu7yazi").hide();
        $("#konu8yazi").hide();
        $("#konu9yazi").hide();
        $("#konu10yazi").hide();
        $("#portfolioBilgi").hide();
        $("#disclaimeryazi").hide();
        $("#privacyyazi").hide();
        $("#kategorileryazi").hide();
        $("#portfolioyazi").hide();
        $("#page2yazi").hide();
        $("#app").hide();
        $("#konu2yazi").show();
        $("#page3button").show();
    });
});
// konu3page1
// konu4page1
// konu5page1
// konu6page1
// konu7page1
// konu8page1
// konu9page1
// konu10page1

// Copy
document.querySelector(".button-copy").onclick = function(){
  document.querySelector("#notes").select();
  document.execCommand('copy');
};
