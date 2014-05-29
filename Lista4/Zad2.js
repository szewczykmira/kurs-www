/**
 * @author Mira
 */

        var createTable = function () {

            var data;
            var target;
            var options;

            var init = function (dataN, targetN, optionsN) {
                data = dataN;
                target = targetN;
                options = optionsN;
            }

            var generate = function () {
                var stringData = '';
                stringData += createHeader();

                for (var i = 0; i < data.length; i++){
                    var stringRow = '';
                    for (var j = 0; j < data[i].length; j++) {
                        stringRow += createCell(data[i][j]);
                    }
                    stringData += createRow(stringRow);
                }

                stringData += createFooter();
                var tableN = document.getElementById(target);
                tableN.border = options.border;
                tableN.style.padding = options.padding + "px";
                tableN.style.borderSpacing = options.spacing + "px";

                tableN.innerHTML = stringData;
            }

            var createCell = function (content) {
                return "<td>" + content + "</td>";
            }

            var createRow = function (content) {
                return "<tr>" + content + "</tr>";
            }

            var createHeader = function () {

                return "<thead><tr><th colspan=" + data[0].length +">NOWA TABELA</th></tr></thead>";
            }

            var createFooter = function () {
                return "<tfoot><tr><td colspan=" + data[0].length +">KONIEC TABELI</td></tr></tfoot>"
            }

            return {
                init: init,
                generate: generate
            }
        };