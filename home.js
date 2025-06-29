$(document).ready(function () {
    $('.mainBanner').ripples({
    resolution: 512,
    dropRadius: 20,     // Radius of the ripple
    perturbance: 0.04,  // Wave intensity
    });
    
    // Handle touch events for music divs
    $('body').on('touchstart', '.music-div', function(e) {
        $(this).addClass('active');
        e.preventDefault();
    });
    
    $('body').on('touchend', '.music-div', function(e) {
        $(this).removeClass('active');
        e.preventDefault();
    });
    
    // Prevent zoom on double tap
    document.addEventListener('dblclick', function(e) {
        e.preventDefault();
    }, { passive: false });
    
    // Adjust slideshow timing for mobile
    if (window.innerWidth < 768) {
        setTimeout(showSlides, 7000); // Slower transitions on mobile
    }
    // Mobile menu toggle
    $('.mobile-menu-toggle').click(function() {
        $('.mobile-menu').slideToggle();
    });
    
    // Close menu when a link is clicked
    $('.mobile-menu a').click(function() {
        if (window.innerWidth < 768) {
            $('.mobile-menu').slideUp();
        }
    });
    
    // Adjust menu on resize
    $(window).resize(function() {
        if (window.innerWidth >= 768) {
            $('.mobile-menu').css('display', 'flex');
        } else {
            $('.mobile-menu').css('display', 'none');
        }
    });
});


function openMusicPopup() {
      const audio = document.getElementById("bgMusic");
      const popup = document.getElementById("fullscreenPopup");
      audio.play().then(() => {
        popup.style.display = "flex";
      }).catch(() => {
        alert("Autoplay blocked. Click again to allow sound.");
      });
    }

    function closePopup() {
      document.getElementById("fullscreenPopup").style.display = "none";
    }

const musicTracks = [
{image:"https://images.unsplash.com/photo-1646380795536-64451816b4d6?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Ambient Background", src: "music/ambient-background-339939.mp3" },
{image:"https://images.unsplash.com/photo-1632504503658-84686be0922e?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Coffee for Your Head", src: "music/coffee-for-your-head-215777.mp3" },
{image:"https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Forest Lullaby", src: "music/forest-lullaby-110624.mp3" },
{image:"https://images.unsplash.com/photo-1595520519880-a86c48ea536c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Good Night Melody", src: "music/good-night-melody-piano-245836.mp3" },
{image:"https://images.unsplash.com/photo-1625580916836-1badf2c15b32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Hare Krishna", src: "music/hare-krishna-250317.mp3" },
{image:"https://images.unsplash.com/photo-1593696433084-1b003f6fff11?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Hare Krishna Relaxing Music 5", src: "music/hare-krishna-relaxing-music-5-117834.mp3" },
{image:"https://images.unsplash.com/photo-1719498482293-7ed698f58739?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Hare Krishna Relaxing Theme 4", src: "music/hare-krishna-relaxing-theme-4-114482.mp3" },
{image:"https://images.unsplash.com/photo-1524901548305-08eeddc35080?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Just Relax", src: "music/just-relax-11157.mp3" },
{image:"https://images.unsplash.com/photo-1496034663057-6245f11be793?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Kiss The Rain", src: "music/kiss-the-rain-274811.mp3" },
{image:"https://images.unsplash.com/photo-1709968898132-35bd2386a25a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Lofi Relax", src: "music/lofi-relax-lofi-345374.mp3" },
{image:"https://images.unsplash.com/photo-1522856339183-9a8b06b05937?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Lofi Relax Music", src: "music/lofi-relax-music-lofium-123264.mp3" },
{image:"https://images.unsplash.com/photo-1547475401-13cf3bc6be4e?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Loneliness of the Winner", src: "music/loneliness-of-the-winner-110416.mp3" },
{image:"https://images.unsplash.com/photo-1744599504245-ff168662e65e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Medieval Ambient", src: "music/medieval-ambient-236809.mp3" },
{image:"https://images.unsplash.com/photo-1532798442725-41036acc7489?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Meditation & Relax", src: "music/meditation-amp-relax-238980.mp3" },
{image:"https://images.unsplash.com/photo-1489659639091-8b687bc4386e?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Healing Stress Relief", src: "music/meditation-healing-stress-relief-calming-music-236401.mp3" },
{image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=799&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Please Calm My Mind", src: "music/please-calm-my-mind-125566.mp3" },
{image:"https://images.unsplash.com/photo-1460036521480-ff49c08c2781?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Peaceful Instrumental", src: "music/relax-heal-peaceful-5-instrumental-music-358825.mp3" },
{image:"https://images.unsplash.com/photo-1513883049090-d0b7439799bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Relax Piano", src: "music/relax-piano-music-318368.mp3" },
{image:"https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Rain Ambience", src: "music/relaxing-ambient-music-rain-354479.mp3" },
{image:"https://images.unsplash.com/photo-1567184406952-9f6ba54cb614?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Krishna Flute Sleep", src: "music/relaxing-krishna-flute-music-deep-sleep-relaxing-music-292793.mp3" },
{image:"https://images.unsplash.com/photo-1618155187212-807c0262355b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Sleepy Rain", src: "music/sleepy-rain-116521.mp3" },
{image:"https://images.unsplash.com/photo-1597242150636-9143d3b4cbed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29saXR1ZGUlMjBkYXJrfGVufDB8fDB8fHww", title: "Solitude Dark", src: "music/solitude-dark-ambient-music-354468.mp3" },
{image:"https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Soothing Meditation", src: "music/soothing-meditation-315918.mp3" },
{image:"https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Space Ambient", src: "music/space-ambient-351305.mp3" },
{image:"https://images.unsplash.com/photo-1467810160588-c86c0deb5d16?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Space Ambient Cinematic", src: "music/space-ambient-cinematic-351304.mp3" },
{image:"https://images.unsplash.com/photo-1691813725994-00238392c787?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Old Water Mill", src: "music/the-old-water-mill-meditation-8005.mp3" },
{image:"https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Zen Garden", src: "music/zen-garden-310599.mp3" },
{image:"https://images.unsplash.com/photo-1510428571240-8a7a15ade3f6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Zen Landscapes", src: "music/zen-landscapes-345448.mp3" }
];

const musicSection = document.getElementById("musicSection");


musicTracks.forEach((track, index) => {
  const div = document.createElement("div");
  div.className = `music-div ${index % 2 === 0 ? 'even' : 'odd'}`;
  
  div.innerHTML = `
    <img src="${track.image}" alt="${track.title}" class="track-img"/>
    <span>${track.title}</span>
  `;
  div.onclick = () => playMusic(track.title, track.src, track.image);
  musicSection.appendChild(div);
});


function playMusic(title, src, image) {
  // Create a backdrop overlay
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";

  // Create the actual centered popup box
  const popupBox = document.createElement("div");
  popupBox.className = "popup-inner";
  popupBox.innerHTML = `
  <img src="${image}" alt="${title}" class="popup-img"/>
  <h1>${title}</h1>
  <p>You’re now entering a mindful space.</p>
  <button id="closePopupBtn">Close</button>
`;

  // Append popup to overlay
  overlay.appendChild(popupBox);
  document.body.appendChild(overlay);

  // Play the music
  const audio = new Audio(src);
  audio.loop = true;
  audio.play();

  // Handle popup close
  document.getElementById("closePopupBtn").onclick = () => {
    document.body.removeChild(overlay);
    audio.pause();
  };
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}