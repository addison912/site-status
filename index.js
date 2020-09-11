const axios = require("axios"),
  url = "https://admin.ayabrackett.com/api/test";
slack =
  "https://hooks.slack.com/services/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";

var start = setInterval(checkSite(), 600000);

function checkSite() {
  axios.get(url).then((response) => {
    if (response.status == 200) {
      axios.post(slack, {
        text:
          "admin.ayabrackett.com is down\nCheck https://cp.s501.sureserver.com/sureapp/index.php",
      });
    }
  });
}
