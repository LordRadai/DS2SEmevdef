// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    ""
// @linked    []
// @version    3.6.2
// ==/EMEVD==

Event(850, Default, function(hpAmount, time, endsWhenMaximumHP) {
    HealFlatOverTime(hpAmount, time, endsWhenMaximumHP);
});

Event(851, Default, function(hpPercentage, time, endsWhenMaximumHP) {
    HealPercentageAmountOverTime(hpPercentage, time, endsWhenMaximumHP);
});

Event(852, Default, function(amount, recoveryTime, endsWhenMaximumHP) {
    DamageValuePercentage(amount, recoveryTime, endsWhenMaximumHP);
});

Event(870, Default, function(statusEffect, duration) {
    PreventStatusEffect(statusEffect, duration);
});

Event(871, Default, function(statusEffect) {
    ClearStatusEffect(statusEffect);
});

Event(872, Default, function(statusEffect, duration, damageId, daamgeFrequency, sfxId, sfxDummyPolygonId) {
    ApplyStatusEffect(statusEffect, duration, damageId, daamgeFrequency, sfxId, sfxDummyPolygonId);
});

Event(930, Default, function(calculationFormula, amount) {
    ChangeSoul(calculationFormula, amount);
});

Event(931, Default, function(calculationFormula, multiplier) {
    ChangePlayerSoulPercentage(calculationFormula, multiplier);
});


