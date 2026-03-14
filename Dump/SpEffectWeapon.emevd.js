// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2_64\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(1670010, Default, function() {
    EffectSFX(5406, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectTimeReductionPermanent(EffectTimeReductionConditions.None, 5);
    ModifyMovementSpeed(7, 0.7, TargetCharacter.Everyone);
    ChangeRotationSpeed(7, 0.7, TargetCharacter.Everyone);
    ModifyStatusValue(ChrStatusValue.Weight, 7, 30);
});

Event(1720010, Default, function() {
    SingleDamageGeneration(1720000);
});

Event(1900000, Default, function() {
    OwnedSoulAttackPowerMultiplier(0, 10000, 1000000, 0.85, 1.3, 0);
});

Event(1960000, Default, function() {
    WeaponSFX(5225, 0.1, 0, 1, 0, 0);
    EffectSFX(5315, 8, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ChangeDamageRate(45, EquipmentAttribute.Lightning, 50);
    IncreaseAttackPower(45, EquipmentAttribute.Lightning, 70);
});

Event(1970000, Default, function() {
    WeaponSFX(5178, 0.1, 0, 1, 0, 0);
    EffectSFX(5311, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ChangeDamageRate(45, EquipmentAttribute.Magic, 70);
    IncreaseAttackPower(45, EquipmentAttribute.Magic, 10);
});

Event(1990010, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    EffectSFX(5414, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 20, 1.05);
});

Event(2090000, Default, function() {
    TimeHPRecovery(1, 852, 1090519040, 1048576000, 1);
});

Event(2500000, Default, function() {
    ModifyStatusValue(ChrStatusValue.Vitality, 0, 1);
    ModifyStatusValue(ChrStatusValue.Endurance, 0, 1);
    ModifyStatusValue(ChrStatusValue.Adaptability, 0, 2);
    ModifyAttributeByCurrentValue(AttributeType.Dexterity, 0, 99, -1, -1);
});

Event(2680000, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Magic, 5);
    IncreaseDefensePower(0, EquipmentAttribute.Fire, 5);
});

Event(3400010, Default, function() {
    CreateBullet(10070, 10070, BulletAttackType.PhysicsMuscleStrength, 0.7);
    CreateBullet(10071, 10071, BulletAttackType.None, 1);
    VirtualCommand(0.5);
});

Event(3440000, Default, function() {
    ModifyStatusValue(ChrStatusValue.Dexterity, 0, 5);
    ModifyAttributeByCurrentValue(AttributeType.Adaptability, 0, 99, -3, -3);
});

Event(3810000, Default, function() {
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 0, 10, 1, 0.1, 0);
});

Event(4110000, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMiracle, 0, 1.03);
});

Event(4200000, Default, function() {
    ModifyBulletParam(0, ShootingType.Bow, 0.95, 1, 1, 1, 1);
});

Event(4210000, Default, function() {
    ModifyBulletParam(0, ShootingType.Bow, 1, 1, 1, 1, 1);
});

Event(4220000, Default, function() {
    ModifyBulletParam(0, ShootingType.Bow, 0.95, 1, 0.5, 1, 1);
});

Event(4230000, Default, function() {
    ModifyBulletParam(0, ShootingType.Bow, 1.25, 1, 1, 1, 1);
});

Event(4240000, Default, function() {
    ModifyBulletParam(0, ShootingType.Bow, 0.95, 1, 0.5, 1, 1);
});

Event(4270000, Default, function() {
    ModifyBulletParam(0, ShootingType.Bow, 1, 1, 1, 1, 1);
});

Event(4280000, Default, function() {
    ModifyBulletParam(0, ShootingType.Bow, 1, 1, 1, 1, 1);
});

Event(4290000, Default, function() {
    ModifyBulletParam(0, ShootingType.Bow, 1.2, 1, 1, 1, 1);
});

Event(4400000, Default, function() {
    ModifyBulletParam(0, ShootingType.Greatbow, 1, 1, 1, 1, 1);
});

Event(4420000, Default, function() {
    ModifyBulletParam(0, ShootingType.Greatbow, 1, 1, 1, 1, 1);
});

Event(4600000, Default, function() {
    ModifyBulletParam(0, ShootingType.Crossbow, 0.85, 1, 0.5, 1, 1);
});

Event(4610000, Default, function() {
    ModifyBulletParam(0, ShootingType.Crossbow, 1, 1, 1, 1, 1);
});

Event(4630000, Default, function() {
    ModifyBulletParam(0, ShootingType.Crossbow, 1.1, 1, 1, 1, 1);
});

Event(4660000, Default, function() {
    ModifyBulletParam(0, ShootingType.Crossbow, 0.85, 1, 0.5, 1, 1);
});

Event(5295000, Default, function() {
    SingleDamageGeneration(5295000);
});

Event(5295010, Default, function() {
    ApplySpecialScalingToWeapon(SpecialScalingType.Sin, 0, 30, 1, 0, 0);
});

Event(5400000, Default, function() {
    WeaponSFX(5423, 0.1, 0, 1, 0, 0);
    ModifyStatusFlag(ChrStatusFlag.FlameWeapon, 0);
});

Event(5410000, Default, function() {
    WeaponSFX(5424, 0.1, 0, 1, 0, 0);
    ModifyStatusFlag(ChrStatusFlag.FlameWeapon, 0);
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 0, 10, 0.1, 1, 0);
});

Event(6000000, Default, function() {
    GenerateDamage(1980000, 0.3, 2);
});

Event(11330000, Default, function() {
    DisplayIcon(10, StartAndEndConditions.None, 0);
    EffectSFX(930, 249, SFXDeletionTiming.EffectTimeExpired, 50, StartAndEndConditions.None, 0);
    ModifyStaminaRecoverySpeed(0, 1.05);
});

Event(11390000, Default, function() {
    DisplayIcon(10, StartAndEndConditions.None, 0);
    EffectSFX(930, 249, SFXDeletionTiming.EffectTimeExpired, 50, StartAndEndConditions.None, 0);
    ModifyStaminaRecoverySpeed(0, 1.05);
});

Event(11640000, Default, function() {
    ModifyStatusRate(ChrStatusRate.DropItemMagnificationCorrectionSmall, 0, 1.05);
});

Event(11720000, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.DropItemMagnificationCorrectionSmallEnabled, 0);
    ModifyStatusRate(ChrStatusRate.DropItemMagnificationCorrectionSmall, 0, 0.5);
});

Event(11730000, Default, function() {
    DisplayIcon(10, StartAndEndConditions.None, 0);
    EffectSFX(930, 249, SFXDeletionTiming.EffectTimeExpired, 50, StartAndEndConditions.None, 0);
    ModifyStaminaRecoverySpeed(0, 1.05);
});

Event(11750000, Default, function() {
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 15);
});

Event(1140000, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMagic, 0, 1.05);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMiracle, 0, 1.05);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierSorcery, 0, 1.05);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMagic, 0, 1.05);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMiracle, 0, 1.05);
    DecreaseDefensePower(0, EquipmentAttribute.Magic, 20);
    DecreaseDefensePower(0, EquipmentAttribute.Lightning, 20);
    DecreaseDefensePower(0, EquipmentAttribute.Fire, 20);
    DecreaseDefensePower(0, EquipmentAttribute.Dark, 20);
});

Event(1260010, Default, function() {
    WeaponSFX(903, 0.1, 0, 0.9, 0, 0);
    EffectSFX(957, 8, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseAttackPower(25, EquipmentAttribute.Fire, 50);
});

Event(1630010, Default, function() {
    EffectSFX(5443, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 150, 1065353216, 1);
});

Event(1630011, Default, function() {
    EffectSFX(5443, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 200, 1065353216, 1);
});

Event(1630020, Default, function() {
    EffectSFX(5443, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 150, 1065353216, 1);
});

Event(1630021, Default, function() {
    EffectSFX(5443, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 250, 1065353216, 1);
});

Event(1790015, Default, function() {
    WeaponSFX(5444, 10, 0, 1, 0, 0);
    VirtualCommand(3);
});

Event(1790020, Default, function() {
    CreateBullet(20088921, 20088921, BulletAttackType.None, 0);
    EffectSFX(5317, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    DisplayIcon(40, StartAndEndConditions.None, 0);
    WeaponSFX(5441, 10, 0, 1, 0, 0);
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 0, 0, 1.6, 1.6, 30);
});

Event(1830000, Default, function() {
    ChangeWeapon(0, 1831000);
});

Event(2760000, Default, function() {
    SingleDamageGeneration(20097100);
});

Event(2760010, Default, function() {
    SingleDamageGeneration(20097110);
});

Event(2855000, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Poison, 20);
    IncreaseDefensePower(0, EquipmentAttribute.Bleed, 7);
    IncreaseDefensePower(0, EquipmentAttribute.Curse, 7);
    IncreaseDefensePower(0, EquipmentAttribute.Petrify, 7);
    DecreaseDefensePower(0, EquipmentAttribute.Magic, 7);
    DecreaseDefensePower(0, EquipmentAttribute.Lightning, 7);
    DecreaseDefensePower(0, EquipmentAttribute.Fire, 7);
    DecreaseDefensePower(0, EquipmentAttribute.Dark, 7);
});

Event(3530000, Default, function() {
    EffectSFX(5432, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5432, 21, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(0.95);
});

Event(3530010, Default, function() {
    CreateBullet(20088700, 20088700, BulletAttackType.PhysicsMuscleStrength, 1.8);
    VirtualCommand(0.5);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeLeftHandCurrentWeapon, 0, -5);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeRightHandCurrentWeapon, 0, -5);
});

Event(3930000, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.MaximumNumberOfSpellUsesChanged, 0, 0.25);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMagic, 0, 1.025);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMagic, 0, 1.025);
});

Event(4120000, Default, function() {
    ModifyAttributeByCurrentValue(AttributeType.Faith, 6, 60, 8, 2);
});

Event(5050000, Default, function() {
    EffectSFX(5465, 220, SFXDeletionTiming.EffectTimeExpired, 30, 2, 2);
    ApplyCycleScalingToWeapon(2, 10, 30, 200, 2);
    ApplyCycleScalingToWeapon(2, 10, 5, 100, 1);
});

Event(5255000, Default, function() {
    WeaponSFX(5481, 10, 0, 1, 0, 0);
    VirtualCommand(1.7);
});

Event(11320000, Default, function() {
    ModifyStatusValue(ChrStatusValue.Vigor, 0, 1);
    ModifyStatusValue(ChrStatusValue.Endurance, 0, 1);
    ModifyStatusValue(ChrStatusValue.Strength, 0, 4);
    ModifyStatusValue(ChrStatusValue.Dexterity, 0, 4);
    ModifyStatusValue(ChrStatusValue.Adaptability, 0, 1);
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
});

Event(11290000, Default, function() {
    DisplayIcon(120, StartAndEndConditions.None, 0);
    EffectSFX(935, 249, SFXDeletionTiming.EffectTimeExpired, 40, StartAndEndConditions.None, 0);
    EffectCorrectionSettings(1, 2);
    TimeHPRecovery(1, 850, 2, 1077936128, 0);
});

Event(11295000, Default, function() {
    DisplayIcon(120, StartAndEndConditions.None, 0);
    EffectSFX(935, 249, SFXDeletionTiming.EffectTimeExpired, 40, StartAndEndConditions.None, 0);
    EffectCorrectionSettings(1, 2);
    TimeHPRecovery(1, 850, 2, 1077936128, 0);
});

Event(1997000, Default, function() {
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 0, 10, 0.1, 1, 0);
});

Event(3080000, Default, function() {
    ApplySpecialScalingToWeapon(SpecialScalingType.Hollowing, 0, 10, 0.1, 1, 0);
});


