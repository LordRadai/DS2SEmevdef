// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2_64\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(50880000, Default, function() {
    TimeHPRecovery(1, 851, 1101004800, 1077936128, 1);
});

Event(50885000, Default, function() {
    TimeHPRecovery(1, 851, 1092616192, 1077936128, 1);
});

Event(50920000, Default, function() {
    SoulChange(1, 930, 0, 10000);
});

Event(50940000, Default, function() {
    ShowRankings();
});

Event(51000000, Default, function() {
    WarpPlayer(WarpType.MapPoints, 10040000, 300020);
});


