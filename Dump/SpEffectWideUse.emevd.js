// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2_64\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(100000000, Default, function() {
    TimeHPRecovery(1, 851, 1084227584, 1065353216, 1);
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    AbnormalStatusChange(1, 871, 1);
    AbnormalStatusChange(1, 871, 2);
    AbnormalStatusChange(1, 871, 4);
    AbnormalStatusChange(1, 871, 10);
    AbnormalStatusChange(1, 871, 3);
    AbnormalStatusChange(1, 871, 6);
    AbnormalStatusChange(1, 871, 7);
    AbnormalStatusChange(1, 871, 9);
    AbnormalStatusChange(1, 871, 11);
    AbnormalStatusChange(1, 871, 5);
});

Event(100000010, Default, function() {
    EffectSFX(872, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(871, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    RestoreHumanity(true);
});

Event(100000020, Default, function() {
    InstantHPRecovery(1, 851, 1120403456, 0, 1);
    RestoreSpellUsage(100, Fraction.RoundUp);
    RepairAllEquipment();
    RestoreSpellUsage(100, Fraction.RoundUp);
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    AbnormalStatusChange(1, 871, 1);
    AbnormalStatusChange(1, 871, 2);
    AbnormalStatusChange(1, 871, 4);
    AbnormalStatusChange(1, 871, 10);
    AbnormalStatusChange(1, 871, 3);
    AbnormalStatusChange(1, 871, 3);
    AbnormalStatusChange(1, 871, 6);
    AbnormalStatusChange(1, 871, 7);
    AbnormalStatusChange(1, 871, 9);
    AbnormalStatusChange(1, 871, 11);
    AbnormalStatusChange(1, 871, 5);
    RestoreHumanity(false);
});

Event(100001000, Default, function() {
    TimeHPRecovery(1, 850, 500, 1092616192, 1);
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    AbnormalStatusChange(1, 871, 1);
    AbnormalStatusChange(1, 871, 2);
    AbnormalStatusChange(1, 871, 4);
    AbnormalStatusChange(1, 871, 5);
    AbnormalStatusChange(1, 871, 6);
    AbnormalStatusChange(1, 871, 7);
    AbnormalStatusChange(1, 871, 9);
});

Event(100001010, Default, function() {
    TimeHPRecovery(1, 850, 1000, 1092616192, 1);
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    AbnormalStatusChange(1, 871, 1);
    AbnormalStatusChange(1, 871, 2);
    AbnormalStatusChange(1, 871, 4);
    AbnormalStatusChange(1, 871, 5);
    AbnormalStatusChange(1, 871, 6);
    AbnormalStatusChange(1, 871, 7);
    AbnormalStatusChange(1, 871, 9);
});

Event(100001020, Default, function() {
    TimeHPRecovery(1, 850, 1500, 1092616192, 1);
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    AbnormalStatusChange(1, 871, 1);
    AbnormalStatusChange(1, 871, 2);
    AbnormalStatusChange(1, 871, 4);
    AbnormalStatusChange(1, 871, 5);
    AbnormalStatusChange(1, 871, 6);
    AbnormalStatusChange(1, 871, 7);
    AbnormalStatusChange(1, 871, 9);
});

Event(110000010, Default, function() {
    InstantHPRecovery(1, 851, 1120403456, 0, 1);
    InitializeNumberOfEstusBottles();
    RepairAllEquipment();
    RestoreSpellUsage(100, Fraction.RoundUp);
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    AbnormalStatusChange(1, 871, 1);
    AbnormalStatusChange(1, 871, 2);
    AbnormalStatusChange(1, 871, 4);
    AbnormalStatusChange(1, 871, 10);
    AbnormalStatusChange(1, 871, 3);
    AbnormalStatusChange(1, 871, 5);
    AbnormalStatusChange(1, 871, 6);
    AbnormalStatusChange(1, 871, 7);
    AbnormalStatusChange(1, 871, 9);
    AbnormalStatusChange(1, 871, 11);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueBleeding, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueWeaponDestruction, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCurse, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCombustion, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePetrification, 3, 100);
});

Event(120000010, Default, function() {
    EffectSFX(3739, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(0.5);
});

Event(120000020, Default, function() {
    EffectSFX(3739, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(0.5);
});

Event(120000030, Default, function() {
    EffectSFX(3739, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(0.5);
});

Event(120000110, Default, function() {
    EffectSFX(3739, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(0.5);
});

Event(120000210, Default, function() {
    ModifyStatusValue(ChrStatusValue.Weight, 3600, 100);
});

Event(120000310, Default, function() {
    EffectSFX(659, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(1.5);
});

Event(130000010, Default, function() {
    InfiniteEffectTime();
    IncreaseDefensePower(0, EquipmentAttribute.Petrify, 100);
});

Event(140001000, Default, function() {
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeLeftHandCurrentWeapon, 0, -7);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeRightHandCurrentWeapon, 0, -7);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquipmentArmor, 0, -7);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquipmentRings, 0, -7);
    CreateBullet(310070030, 310070030, BulletAttackType.None, 1);
});

Event(140001010, Default, function() {
    EffectSFX(659, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(1.5);
});

Event(150000000, Default, function() {
    VirtualCommand(3);
});

Event(150101000, Default, function() {
    EffectSFX(3739, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(0.5);
});

Event(150200000, Default, function() {
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    AbnormalStatusChange(1, 871, 1);
    AbnormalStatusChange(1, 871, 2);
    AbnormalStatusChange(1, 871, 4);
    AbnormalStatusChange(1, 871, 10);
    AbnormalStatusChange(1, 871, 3);
    AbnormalStatusChange(1, 871, 5);
    AbnormalStatusChange(1, 871, 6);
    AbnormalStatusChange(1, 871, 7);
    AbnormalStatusChange(1, 871, 9);
    AbnormalStatusChange(1, 871, 11);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueBleeding, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueWeaponDestruction, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCurse, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCombustion, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePetrification, 3, 100);
});

Event(150300000, Default, function() {
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    AbnormalStatusChange(1, 871, 1);
    AbnormalStatusChange(1, 871, 2);
    AbnormalStatusChange(1, 871, 4);
    AbnormalStatusChange(1, 871, 10);
    AbnormalStatusChange(1, 871, 3);
    AbnormalStatusChange(1, 871, 5);
    AbnormalStatusChange(1, 871, 6);
    AbnormalStatusChange(1, 871, 7);
    AbnormalStatusChange(1, 871, 9);
    AbnormalStatusChange(1, 871, 11);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueBleeding, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueWeaponDestruction, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCurse, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCombustion, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePetrification, 3, 100);
});

Event(160000000, Default, function() {
    EffectSFX(290, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    SpellParrySetting(0.4, SpellParryType.MagicPower, 5451);
    SpellParrySetting(0.4, SpellParryType.Thunder, 5451);
    SpellParrySetting(0.4, SpellParryType.Flame, 5451);
    SpellParrySetting(0.4, SpellParryType.Darkness, 5451);
});

Event(160000100, Default, function() {
    EffectSFX(290, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    SpellParrySetting(0.3, SpellParryType.MagicPower, 5451);
    SpellParrySetting(0.3, SpellParryType.Thunder, 5451);
    SpellParrySetting(0.3, SpellParryType.Flame, 5451);
    SpellParrySetting(0.3, SpellParryType.Darkness, 5451);
});

Event(160000010, Default, function() {
    EffectSFX(290, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    SpellParrySetting(0.55, SpellParryType.MagicPower, 5451);
    SpellParrySetting(0.55, SpellParryType.Thunder, 5451);
    SpellParrySetting(0.55, SpellParryType.Flame, 5451);
    SpellParrySetting(0.55, SpellParryType.Darkness, 5451);
});

Event(160000110, Default, function() {
    EffectSFX(290, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    SpellParrySetting(0.3, SpellParryType.MagicPower, 5451);
    SpellParrySetting(0.3, SpellParryType.Thunder, 5451);
    SpellParrySetting(0.3, SpellParryType.Flame, 5451);
    SpellParrySetting(0.3, SpellParryType.Darkness, 5451);
});

Event(160001010, Default, function() {
    EffectSFX(290, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    SpellParrySetting(0.4, SpellParryType.MagicPower, 5451);
    SpellParrySetting(0.4, SpellParryType.Thunder, 5451);
    SpellParrySetting(0.4, SpellParryType.Flame, 5451);
    SpellParrySetting(0.4, SpellParryType.Darkness, 5451);
});

Event(160001110, Default, function() {
    EffectSFX(290, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    SpellParrySetting(0.3, SpellParryType.MagicPower, 5451);
    SpellParrySetting(0.3, SpellParryType.Thunder, 5451);
    SpellParrySetting(0.3, SpellParryType.Flame, 5451);
    SpellParrySetting(0.3, SpellParryType.Darkness, 5451);
});

Event(170000000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusFlag(ChrStatusFlag.Unknown61, 1);
});

Event(170001000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusFlag(ChrStatusFlag.DisableLockOn, 0);
});

Event(170100000, Default, function() {
    VirtualCommand(4.8);
});


