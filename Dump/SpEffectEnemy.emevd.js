// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2_64\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(90000010, Default, function() {
    CreateBullet(150900512, 150900512, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(91190010, Default, function() {
    EffectSFX(1976, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectTimeReductionPermanent(EffectTimeReductionConditions.None, 7);
    ModifyMovementSpeed(10, 0.1, TargetCharacter.Player);
    ChangeRotationSpeed(10, 0.1, TargetCharacter.Player);
    ModifyStatusValue(ChrStatusValue.Weight, 10, 50);
});

Event(91060010, Default, function() {
    EffectSFX(1972, 220, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(1973, 220, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(60);
});

Event(91060020, Default, function() {
    EffectSFX(1995, 220, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(1996, 220, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseDefensePower(60, EquipmentAttribute.AllPhysical, 500);
});

Event(91060030, Default, function() {
    EffectSFX(1998, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(5200, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectCorrectionSettings(1, 2);
    TimeHPRecovery(1, 850, 450, 1065353216, 1);
});

Event(91130010, Default, function() {
    EffectCorrectionSettings(0.65, 3.5);
    TimeHPRecovery(1, 850, 600, 1065353216, 1);
});

Event(91180010, Default, function() {
    EffectSFX(4070, 220, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(4071, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    AllowEffectTimeExtension();
    IncreaseAttackUnknown(60, EquipmentAttribute.AllPhysical, 50);
});

Event(91270000, Default, function() {
    CreateBullet(112701300, 112701300, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(91270010, Default, function() {
    VirtualCommand(3);
});

Event(91290010, Default, function() {
    EffectSFX(5053, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(5203, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectCorrectionSettings(0.7, 2);
    TimeHPRecovery(1, 850, 1200, 1069547520, 1);
});

Event(91290020, Default, function() {
    EffectSFX(5070, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(5219, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    AllowEffectTimeExtension();
    IncreaseDefensePower(90, EquipmentAttribute.Magic, 25);
    AllowEffectTimeExtension();
    IncreaseDefensePower(90, EquipmentAttribute.Lightning, 25);
    AllowEffectTimeExtension();
    IncreaseDefensePower(90, EquipmentAttribute.Fire, 25);
    AllowEffectTimeExtension();
    IncreaseDefensePower(90, EquipmentAttribute.Dark, 25);
});

Event(91290030, Default, function() {
    EffectSFX(5033, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(5188, 249, SFXDeletionTiming.EffectTimeExpired, 5, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 60, 0.7);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMagic, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMiracle, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierSorcery, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMagic, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMiracle, 60, 1.2);
});

Event(91310010, Default, function() {
    EffectSFX(5051, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(5201, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectCorrectionSettings(0.7, 2);
    TimeHPRecovery(1, 850, 650, 1065353216, 1);
});

Event(91310020, Default, function() {
    EffectSFX(0, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 840, 1123024896, 0);
});

Event(91320010, Default, function() {
    EffectSFX(1608, 9, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 851, 1120403456, 1065353216, 1);
});

Event(91320020, Default, function() {
    SingleDamageGeneration(113200000);
});

Event(91320030, Default, function() {
    SetDeathPermission(false);
});

Event(92120010, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1);
});

Event(92120020, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1.5);
});

Event(93050010, Default, function() {
    CreateBullet(130500000, 130500000, BulletAttackType.None, 1);
    EffectSFX(1821, 30, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1);
    InfiniteEffectTime();
    IncreaseAttackUnknown(0, EquipmentAttribute.Fire, 0);
});

Event(93050011, Default, function() {
    CreateBullet(130510000, 130510000, BulletAttackType.None, 1);
    EffectSFX(8461, 30, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1);
    InfiniteEffectTime();
    IncreaseAttackUnknown(0, EquipmentAttribute.Fire, 0);
});

Event(93180010, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1.35);
    IncreaseAttackUnknown(0, EquipmentAttribute.Dark, 0);
});

Event(93180020, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1.45);
    IncreaseAttackUnknown(0, EquipmentAttribute.Dark, 0);
});

Event(93320010, Default, function() {
    EffectSFX(1840, 100, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 45, 1);
    IncreaseAttackUnknown(45, EquipmentAttribute.Lightning, 250);
});

Event(93320020, Default, function() {
    EffectSFX(1842, 220, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 851, 1120403456, 1077936128, 1);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 3, 0.5);
});

Event(93320030, Default, function() {
    SetDeathPermission(false);
    SingleDamageGeneration(100010000);
});

Event(93330010, Default, function() {
    EffectSFX(1925, 220, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    InfiniteEffectTime();
    IncreaseAttackUnknown(0, EquipmentAttribute.Dark, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1.4);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.6);
});

Event(93340010, Default, function() {
    EffectSFX(1845, 100, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 45, 1);
    IncreaseAttackUnknown(45, EquipmentAttribute.Lightning, 310);
});

Event(93340020, Default, function() {
    EffectSFX(1847, 220, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 851, 1120403456, 1077936128, 1);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 3, 0.5);
});

Event(93340030, Default, function() {
    SetDeathPermission(false);
    SingleDamageGeneration(100010000);
});

Event(95000010, Default, function() {
    Unequip(EquipmentCategory.Weapon, EquipmentCategory.OverrideWeapon, EquipmentCategory.Armor, EquipmentCategory.Ring, EquipmentCategory.Arrow, EquipmentCategory.None, EquipmentCategory.None, EquipmentCategory.None);
});

Event(95010010, Default, function() {
    EffectSFX(1958, 220, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    InstantHPRecovery(1, 851, 1065353216, 0, 1);
    VirtualCommand(2);
});

Event(95061010, Default, function() {
    VirtualCommand(1);
});

Event(95146010, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.03125);
});

Event(95146020, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.0625);
});

Event(95146030, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.125);
});

Event(95146040, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.25);
});

Event(95146050, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.5);
});

Event(95146060, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 1);
});

Event(96270000, Default, function() {
    EffectSFX(3739, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(0.5);
});

Event(96030010, Default, function() {
    EffectSFX(655, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectTimeReductionPermanent(EffectTimeReductionConditions.None, 7);
    ModifyMovementSpeed(20, 0.5, TargetCharacter.Player);
    ChangeRotationSpeed(20, 0.5, TargetCharacter.Player);
    ModifyStatusValue(ChrStatusValue.Weight, 20, 50);
});

Event(96080010, Default, function() {
    EffectSFX(873, 9, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
});

Event(96191020, Default, function() {
    SetDeathPermission(false);
});

Event(96500010, Default, function() {
    CreateBullet(165000000, 165000000, BulletAttackType.None, 1);
    CreateBullet(165000004, 165000004, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96500011, Default, function() {
    CreateBullet(165000000, 165000000, BulletAttackType.None, 1);
    VirtualCommand(3.7);
});

Event(96500012, Default, function() {
    CreateBullet(165000000, 165000000, BulletAttackType.None, 1);
    VirtualCommand(4.4);
});

Event(96500013, Default, function() {
    CreateBullet(165000000, 165000000, BulletAttackType.None, 1);
    VirtualCommand(2.4);
});

Event(96500014, Default, function() {
    CreateBullet(165000000, 165000000, BulletAttackType.None, 1);
    VirtualCommand(1.8);
});

Event(96500020, Default, function() {
    CreateBullet(165000001, 165000001, BulletAttackType.None, 1);
    CreateBullet(165000005, 165000005, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96500021, Default, function() {
    CreateBullet(165000000, 165000001, BulletAttackType.None, 1);
    VirtualCommand(3.7);
});

Event(96500022, Default, function() {
    CreateBullet(165000000, 165000001, BulletAttackType.None, 1);
    VirtualCommand(4.4);
});

Event(96500023, Default, function() {
    CreateBullet(165000000, 165000001, BulletAttackType.None, 1);
    VirtualCommand(2.4);
});

Event(96500024, Default, function() {
    CreateBullet(165000000, 165000001, BulletAttackType.None, 1);
    VirtualCommand(1.8);
});

Event(96530000, Default, function() {
    InfiniteEffectTime();
    IncreaseAttackUnknown(3600, EquipmentAttribute.Fire, 250);
});

Event(96540000, Default, function() {
    IncreaseAttackUnknown(2, EquipmentAttribute.Fire, 150);
    CreateBullet(165401000, 165401000, BulletAttackType.None, 1);
});

Event(96570000, Default, function() {
    InfiniteEffectTime();
    UnknownCommand100016(4, 165700000, 165700000, 20);
    ModifyStatusFlag(ChrStatusFlag.Unknown49, 0);
});

Event(96590000, Default, function() {
    TimeHPRecovery(1, 851, 1114636288, 1065353216, 1);
});

Event(96650000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusFlag(ChrStatusFlag.Unknown33, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown50, 60);
    ModifyStatusValue(ChrStatusValue.MaterialReplacement, 60, 41);
    ModifyStatusValue32(ChrStatusValue32.SpiritMimicry, 60, 31);
    ModifyStatusFlag(ChrStatusFlag.Unknown54, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown34, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown39, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown40, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown41, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown43, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown44, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown46, 60);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.4);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 0.7);
    ModifyStatusFlag(ChrStatusFlag.DisableBackstab, 0);
    ModifyStatusFlag(ChrStatusFlag.Unknown52, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown51, 60);
    ModifyStatusFlag(ChrStatusFlag.Unknown53, 60);
});

Event(96650010, Default, function() {
    CreateBullet(166500000, 166500000, BulletAttackType.None, 1);
    VirtualCommand(5);
});

Event(96560000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.WetnessMimicry, 0, 7);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1);
    SetDeathPermission(true);
});

Event(96560010, Default, function() {
    IncreaseAttackUnknown(0, EquipmentAttribute.AllPhysical, 0);
});

Event(96560020, Default, function() {
    TimeHPRecovery(1, 851, 1120403456, 1036831949, 1);
});

Event(96560100, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.WetnessMimicry, 0, 7);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.5);
    ModifyStatusValue(ChrStatusValue.Poise, 0, 30);
});

Event(96560110, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.WetnessMimicry, 0, 7);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1.25);
});

Event(96560200, Default, function() {
    EffectSFX(8346, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    CreateBullet(320090000, 320090000, BulletAttackType.None, 1);
    VirtualCommand(5);
});

Event(96560210, Default, function() {
    EffectSFX(8346, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    CreateBullet(320090000, 320090000, BulletAttackType.None, 1);
    VirtualCommand(5);
    SetDeathPermission(false);
});

Event(96560220, Default, function() {
    EffectSFX(8347, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    CreateBullet(320090000, 320090000, BulletAttackType.None, 1);
    VirtualCommand(5);
});

Event(96560300, Default, function() {
    InfiniteEffectTime();
    EffectSFX(8348, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1);
});

Event(96560310, Default, function() {
    InfiniteEffectTime();
    EffectSFX(8348, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1);
});

Event(96560320, Default, function() {
    InfiniteEffectTime();
    EffectSFX(8349, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1);
});

Event(96560400, Default, function() {
    EffectSFX(8346, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(5);
});

Event(96560410, Default, function() {
    EffectSFX(8346, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(5);
});

Event(96560420, Default, function() {
    EffectSFX(8347, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(5);
});

Event(96620000, Default, function() {
    CreateBullet(166201000, 166201000, BulletAttackType.None, 1);
    IncreaseAttackUnknown(3, EquipmentAttribute.AllPhysical, 0);
});

Event(96660000, Default, function() {
    CreateBullet(166604000, 166604000, BulletAttackType.None, 1);
    IncreaseAttackUnknown(3, EquipmentAttribute.AllPhysical, 0);
});

Event(96660010, Default, function() {
    TimeHPRecovery(1, 851, 1114636288, 1065353216, 1);
});

Event(96700000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusFlag(ChrStatusFlag.Unknown28, 0);
});

Event(96710010, Default, function() {
    CreateBullet(167100000, 167100000, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96710011, Default, function() {
    CreateBullet(167100001, 167100001, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96710012, Default, function() {
    CreateBullet(167100002, 167100002, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96710013, Default, function() {
    CreateBullet(167100003, 167100003, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96710020, Default, function() {
    InfiniteEffectTime();
    ModifyStatusFlag(ChrStatusFlag.Unknown49, 0);
});

Event(96711010, Default, function() {
    CreateBullet(167110000, 167110000, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96711011, Default, function() {
    CreateBullet(167110001, 167110001, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96711012, Default, function() {
    CreateBullet(167110002, 167110002, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96711013, Default, function() {
    CreateBullet(167110003, 167110003, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(96740000, Default, function() {
    ModifyStatusValue32(ChrStatusValue32.Unknown30, 0, 30);
    ModifyStatusValue32(ChrStatusValue32.Unknown31, 0, 50);
    ModifyStatusValue32(ChrStatusValue32.Unknown32, 0, 20);
    EffectSFX(867, 220, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(5);
});

Event(96720000, Default, function() {
    CreateBullet(167200000, 167200000, BulletAttackType.None, 1);
    IncreaseAttackUnknown(30, EquipmentAttribute.AllPhysical, 0);
});

Event(96720010, Default, function() {
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeLeftHandCurrentWeapon, 0, -2);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeRightHandCurrentWeapon, 0, -2);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquipmentArmor, 0, -2);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquipmentRings, 0, -1);
    CreateBullet(167200001, 167200001, BulletAttackType.None, 1);
});

Event(96720020, Default, function() {
    EffectSFX(659, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(1.5);
});

Event(96750000, Default, function() {
    EffectSFX(8304, 220, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 851, 1092616192, 1073741824, 1);
    VirtualCommand(3);
});

Event(96750010, Default, function() {
    IncreaseAttackUnknown(20, EquipmentAttribute.Fire, 100);
});

Event(96750100, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.WetnessMimicry, 0, 7);
});

Event(96750110, Default, function() {
    ModifyStatusValue32(ChrStatusValue32.WetnessMimicry, 0.1, 10);
});

Event(96780000, Default, function() {
    InfiniteEffectTime();
    EffectSFX(8636, 255, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(96780100, Default, function() {
    SoulChange(1, 930, 1, 5255);
});

Event(96790000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.SpiritMimicry, 60, 40);
    ModifyStatusFlag(ChrStatusFlag.DisableLockOn, 0);
    ModifyStatusFlag(ChrStatusFlag.Unknown56, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableHealthbar, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1.2);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.8);
});

Event(96790010, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.SpiritMimicry, 60, 41);
    ModifyStatusFlag(ChrStatusFlag.DisableLockOn, 0);
    ModifyStatusFlag(ChrStatusFlag.Unknown56, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableHealthbar, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1.2);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.8);
});

Event(96790020, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.SpiritMimicry, 60, 42);
    EffectSFX(8651, 200, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8651, 201, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8651, 202, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8651, 203, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8650, 204, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8650, 205, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8650, 206, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8650, 207, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
});

Event(96790030, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.SpiritMimicry, 60, 43);
    EffectSFX(8648, 200, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8648, 201, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8648, 202, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8648, 203, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8647, 204, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8647, 205, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8647, 206, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(8647, 207, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
});

Event(96790100, Default, function() {
    EffectSFX(8656, 220, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(8657, 220, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 60, 0.5);
    TimeHPRecovery(1, 851, 1108082688, 1114636288, 1);
});

Event(96800000, Default, function() {
    EffectSFX(8448, 100, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 60, 1.35);
});

Event(96810000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusFlag(ChrStatusFlag.Unknown28, 0);
});

Event(96850000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.WetnessMimicry, 0, 8);
    IncreaseAttackUnknown(0, EquipmentAttribute.Poison, 20);
});

Event(96880000, Default, function() {
    EffectSFX(8619, 201, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.75, 1.5, 1, 1, 1, 1);
    VirtualCommand(45);
});

Event(96880100, Default, function() {
    VirtualCommand(1);
});

Event(96880200, Default, function() {
    VirtualCommand(1);
});

Event(96900000, Default, function() {
    VirtualCommand(1);
});

Event(96920000, Default, function() {
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 1, 0.3);
    CreateBullet(169200500, 169200500, BulletAttackType.None, 1);
    CreateBullet(169200501, 169200501, BulletAttackType.None, 1);
    VirtualCommand(1);
});

Event(96920010, Default, function() {
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 1, 0.1);
    CreateBullet(169200510, 169200510, BulletAttackType.None, 1);
    CreateBullet(169200511, 169200511, BulletAttackType.None, 1);
    VirtualCommand(1);
});

Event(96920020, Default, function() {
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 1, 1);
    VirtualCommand(1);
});

Event(96920030, Default, function() {
    VirtualCommand(1);
});

Event(96920040, Default, function() {
    VirtualCommand(1);
});

Event(96920050, Default, function() {
    VirtualCommand(1);
});

Event(96940000, Default, function() {
    InfiniteEffectTime();
    EffectSFX(24040, 7, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(1);
});

Event(96960000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusFlag(ChrStatusFlag.EnableInvisibility, 60);
    ModifyStatusFlag(ChrStatusFlag.DisableLockOn, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableHealthbar, 0);
});

Event(97420010, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0);
});

Event(97440010, Default, function() {
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0);
});

Event(97690010, Default, function() {
    EffectSFX(5206, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 840, 1114636288, 0);
});

Event(98350010, Default, function() {
    InfiniteEffectTime();
    EffectSFX(954, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 0, 1.5);
    InfiniteEffectTime();
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 0.75);
});

Event(98382000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.SpiritMimicry, 60, 209);
    ModifyStatusFlag(ChrStatusFlag.DisableLockOn, 0);
});

Event(98660010, Default, function() {
    EffectSFX(24045, 10, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.75, 1.5, 1, 1, 1, 1);
    VirtualCommand(45);
});

Event(98720010, Default, function() {
    CreateBullet(72230011, 192230011, BulletAttackType.None, 0);
});

Event(98720011, Default, function() {
    EffectSFX(5222, 249, SFXDeletionTiming.EffectTimeExpired, 6, StartAndEndConditions.None, 0);
    IncreaseAttackUnknown(65, EquipmentAttribute.AllPhysical, 50);
    IncreaseDefensePower(65, EquipmentAttribute.AllPhysical, 75);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 65, 0.9);
});

Event(98830000, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.SpiritMimicry, 60, 40);
    ModifyStatusFlag(ChrStatusFlag.DisableLockOn, 0);
    ModifyStatusFlag(ChrStatusFlag.Unknown56, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableHealthbar, 0);
});

Event(98830010, Default, function() {
    InfiniteEffectTime();
    ModifyStatusValue32(ChrStatusValue32.SpiritMimicry, 60, 41);
    ModifyStatusFlag(ChrStatusFlag.DisableLockOn, 0);
    ModifyStatusFlag(ChrStatusFlag.Unknown56, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableHealthbar, 0);
});


