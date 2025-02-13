const videoContainer = document.querySelector("#video-container");

const youTubeEmbedEndpoints = [
  "wWixvbV_U3s?si=6vagWEYXdpUY7A3t",
  "RjaYNr5-_-A?si=DueZrseT3NjE2RPj",
  "go2dj92b8wc?si=pQteoQznDL61Qh0r",
  "w4lhInRsrJs?si=ROvLZshN8Tt9pbnr",
  "96E9HmW5B9g?si=fTTXID2y4Nq2WAKV",
  "Qfm8zwPmJY4?si=PJx0AOYoZOSBSOV0",
  "TidX81Mfwmc?si=3E9trS9d35Ze3rQA",
  "6RlXgwzVh2c?si=eZFANvrbfGPbr58W",
  "SLq7z5cEdDQ?si=q8nihTljFzPOTTzC",
  "UmR6gOKxOSE?si=r37zCmTGZoHh4ntY",
  "40s4uC1f9wo?si=fRgegtPba6h7MRw6",
  "kdZPeE7F_Ls?si=9V-5Plm96v9xvvgp",
  "ATYVBGPaoS8?si=tvMCkRa27OSXvrFq",
  "RjaYNr5-_-A?si=R83hZfP-105n-EMn",
  "J9CxTs82eqw?si=dmTYs44BuuuVSmFK",
  "Vxd9mUaHlMM?si=1na-0WWm24n1lHHl",
  "_PaI3fw8jBc?si=6yKuatq-G67j_3l6",
  "t1PMihB7ZqA?si=0Fh2xfO4GXw_iHjF",
  "VtUO6CxMdZ8?si=v-EgnHp2meiZIKj5",
  "4hSnh9BBz7A?si=AWBoiy9l6esocQGa",
  "Dj1lGYB3rTE?si=YsyiVwtkEmw4Hksa",
  "A44SSkC2KLM?si=cuIcKAmFVNxvjU5T",
  "d4wXDvBGjzs?si=tHVoFVpbOJSNRacf",
  "T_gvfd4sgjI?si=vLiy2oVtuvBDcWsv",
  "m5TKoCcKNoA?si=WOIUzhPD8bGaUkSX",
];

function youTubeIframeEmbedStringMaker(videoId) {
  return `https://www.youtube.com/embed/${videoId}`;
}

const bodyWidth = document.body.clientWidth;
const bodyHeight = document.body.clientHeight;

const videoAspectRatio = 16 / 9;

const videoMaxWidth = 1200;
const videoMinWidth = 300;
const videoContainerWidth = Math.max(Math.min(bodyWidth - 200, videoMaxWidth), videoMinWidth);
const videoContainerHeight = videoContainerWidth / videoAspectRatio;

const randomIndex = Math.floor(Math.random() * youTubeEmbedEndpoints.length);
const randomYouTubeEmbedId = youTubeEmbedEndpoints[randomIndex];
const randomYouTubeEmbedString = youTubeIframeEmbedStringMaker(randomYouTubeEmbedId);

const iframe = document.querySelector("iframe");
iframe.width = videoContainerWidth;
iframe.height = videoContainerHeight;
iframe.src = randomYouTubeEmbedString;
