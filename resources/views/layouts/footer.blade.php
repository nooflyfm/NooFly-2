<script>
    function httpGet(theUrl, i) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", theUrl, false);
        xmlHttp.send(null);
        let statUs = xmlHttp.status;
        if (statUs != 200) {
            return window.location.reload();
        }
    }
    setInterval(() => httpGet("{{ url('/ping/auth') }}"), 15000);
</script>