// XXX: Set this value!
const apiKey = "";

function applyApiKey(url) {
    const delim = url.indexOf("?") === -1 ? "?" : "&";
    return `${url}${delim}apiKey=${apiKey}`;
}

(function() {
    // XXX: Set this value!
    const baseUrl = "";
    const corsUrl = "http://localhost:8889";

    var myConnector = tableau.makeConnector();
    // myConnector.init = function (initCallback) {
    //   tableau.authType = tableau.authTypeEnum.basic;
    //   initCallback();
    // };

    myConnector.getSchema = function(schemaCallback) {
        schemaCallback([schema.statistics]);
    };

    myConnector.getData = async function(table, doneCallback) {
        const { tableInfo } = table;
        const tableSchema = schema[tableInfo.id];
        const url = applyApiKey(`${baseUrl}${tableSchema.getUrlPath()}`);
        console.log(url);
        const proxyUrl = `${corsUrl}/${url}`;
        const mapper = tableSchema.mapper;
        $.ajax({
            url: proxyUrl,
            dataType: "json",
            beforeSend: function(request) {
                request.setRequestHeader(
                    "Authorization",
                    "Basic " + btoa("portland:trailblazers-knx")
                );
            },
            success: function(data) {
                var feat = data,
                    tableData = [];

                // Iterate over the JSON object
                for (var i = 0, len = feat.length; i < len; i++) {
                    const newRow = mapper(feat[i]);
                    tableData.push(newRow);
                }

                table.appendRows(tableData);
                doneCallback();
            },
        });
    };

    tableau.registerConnector(myConnector);

    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Kinexon";
            tableau.submit();
        });
    });
})();