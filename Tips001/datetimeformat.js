
    /**
     * 日付・時刻のフォーマット関数（簡易実装版）
     *
     * @date Date型
     * @format 書式文字列
     */
    function datetimeFormat(date, format) {
        function pad0(s, n) {
            return new Array(Math.max(n - String(s).length, 0)).concat([s]).join(0);
        }
        var fmap = { "y":"getFullYear", "M":"getMonth", "d":"getDate",
            "H":"getHours", "m":"getMinutes", "s":"getSeconds", "S":"getMilliseconds" };
        return format.replace(/('')|((?:'[^']+')+)|(([yMdHmsS])+)/g,
            function(m, p1, p2, p3, p4) {
                return p3 ? pad0(Date.prototype[fmap[p4]].call(date) + (p4 == "M"), p3.length)
                        : p2 ? p2.substring(1, p2.length - 1).replace(/''/g, "'") : "'";
            });
    }

    // 使い方
    console.log(datetimeFormat(new Date(), "yyyy-MM-dd HH:mm:ss.SSS"));

