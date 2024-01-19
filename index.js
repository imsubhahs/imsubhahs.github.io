function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  GitHubCalendar(".calender", "anujrawat22", { responsive: true });
  
  function download() {
    window.open(
      //"https://drive.google.com/file/d/1XUASBk9SaAmFSgpU1H22Gp4EhX8CZuLA/view"

      "https://drive.google.com/drive/u/1/folders/19G51QnSjioRe4sXrD7KzSjXXCWxOWBuK"
         );
  }
  
  
  function resume(){
      closeNav()
      download()
  }