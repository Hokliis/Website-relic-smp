 function copyIP() {
  const ip = "play.relicsmp.my.id";
  navigator.clipboard.writeText(ip).then(() => {
    alert("IP server telah disalin: " + ip);
  });
}
