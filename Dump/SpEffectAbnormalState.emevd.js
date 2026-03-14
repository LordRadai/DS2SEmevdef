// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2_64\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(900000, Default, function() {
    EffectTimeReductionExecution(EffectTimeReductionConditions.None);
    EffectTimeReductionExecution(EffectTimeReductionConditions.IsUnderwater);
});

Event(900100, Default, function() {
    AbnormalStatusChange(1, 872, 0, 1102053376, 9010, 1050253722, 650, 249);
});

Event(900200, Default, function() {
    SingleDamageGeneration(9020);
});

Event(900210, Default, function() {
    EffectSFX(651, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStaminaRecoverySpeed(10, 0.7);
    ModifyStatusRate(ChrStatusRate.MaximumStaminaCorrectionValue, 10, 0.75);
    ModifyMovementSpeed(3, 0.5, TargetCharacter.Enemy);
    ModifyMovementSpeed(3, 0.7, TargetCharacter.Player);
    AbnormalStatusChange(1, 872, 1, 1092616192, 0, 0, 0, 0);
});

Event(900301, Default, function() {
    EffectSFX(660, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 60, 0.95);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 60, 1.05);
});

Event(900400, Default, function() {
    EffectSFX(653, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    AbnormalStatusChange(1, 872, 3, 1073741824, 0, 0, 0, 0);
    ModifyStatusValue(ChrStatusValue.DeadPersonCountAddition, 0, 1);
});

Event(900500, Default, function() {
    SingleDamageGeneration(9051);
    GenerateDamage(9050, 0.2, -1);
    AbnormalStatusChange(1, 872, 4, 1073741824, 0, 0, 0, 0);
});

Event(900600, Default, function() {
    EffectTimeReductionPermanent(EffectTimeReductionConditions.IsUnderwater, 10);
    AbnormalStatusChange(1, 872, 8, 1101004800, 9010, 1045220557, 650, 249);
});

Event(900700, Default, function() {
    EffectTimeReductionPermanent(EffectTimeReductionConditions.IsUnderwater, 20);
    AbnormalStatusChange(1, 872, 9, 1127481344, 0, 0, 0, 0);
});

Event(900800, Default, function() {
    AbnormalStatusChange(1, 872, 6, 1133903872, 0, 0, 0, 0);
    InfiniteEffectTime();
    IncreaseDefensePower(300, EquipmentAttribute.Fire, 30);
    DecreaseDefensePower(300, EquipmentAttribute.Lightning, 15);
});

Event(900900, Default, function() {
    GenerateDamage(9090, 0.45, -1);
    EffectTimeReductionPermanent(EffectTimeReductionConditions.IsUnderwater, 20);
    AbnormalStatusChange(1, 872, 11, 1110704128, 0, 0, 0, 0);
});

Event(901000, Default, function() {
    TimeHPRecovery(1, 850, 3000, 1065353216, 0);
});

Event(901100, Default, function() {
    FullBodySFX(400010, SFXDeletionTiming.Invalid);
});

Event(901110, Default, function() {
    ModifyStatusValue(ChrStatusValue.MaterialReplacement, 3600, 19);
    ModifyStatusValue32(ChrStatusValue32.WetnessMimicry, 3600, 6);
});

Event(902000, Default, function() {
    AbnormalStatusChange(1, 872, 12, 1114636288, 0, 0, 0, 0);
});

Event(902100, Default, function() {
    AbnormalStatusChange(1, 872, 13, 1114636288, 0, 0, 0, 0);
});

Event(902200, Default, function() {
    AbnormalStatusChange(1, 872, 14, 1114636288, 0, 0, 0, 0);
});

Event(902300, Default, function() {
    AbnormalStatusChange(1, 872, 15, 1084227584, 0, 0, 0, 0);
    InfiniteEffectTime();
    IncreaseDefensePower(300, EquipmentAttribute.Fire, 10);
    DecreaseDefensePower(300, EquipmentAttribute.Lightning, 10);
});

Event(902400, Default, function() {
    AbnormalStatusChange(1, 872, 14, 1114636288, 0, 0, 0, 0);
});


