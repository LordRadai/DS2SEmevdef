// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2_64\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(40010000, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 1.05);
});

Event(40010001, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 1.075);
});

Event(40010002, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 1.125);
});

Event(40020000, Default, function() {
    DisplayIcon(10, StartAndEndConditions.None, 0);
    EffectSFX(930, 249, SFXDeletionTiming.EffectTimeExpired, 50, StartAndEndConditions.None, 0);
    ModifyStaminaRecoverySpeed(0, 1.15);
});

Event(40020001, Default, function() {
    DisplayIcon(10, StartAndEndConditions.None, 0);
    EffectSFX(930, 249, SFXDeletionTiming.EffectTimeExpired, 50, StartAndEndConditions.None, 0);
    ModifyStaminaRecoverySpeed(0, 1.2);
});

Event(40020002, Default, function() {
    DisplayIcon(10, StartAndEndConditions.None, 0);
    EffectSFX(930, 249, SFXDeletionTiming.EffectTimeExpired, 50, StartAndEndConditions.None, 0);
    ModifyStaminaRecoverySpeed(0, 1.25);
});

Event(40030000, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.1);
});

Event(40030001, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.15);
});

Event(40030002, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.2);
});

Event(40040000, Default, function() {
    DisplayIcon(150, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 1.03);
    ModifyStatusRate(ChrStatusRate.MaximumStaminaCorrectionValue, 0, 1.05);
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.05);
});

Event(40040001, Default, function() {
    DisplayIcon(150, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 1.05);
    ModifyStatusRate(ChrStatusRate.MaximumStaminaCorrectionValue, 0, 1.1);
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.1);
});

Event(40040002, Default, function() {
    DisplayIcon(150, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 1.075);
    ModifyStatusRate(ChrStatusRate.MaximumStaminaCorrectionValue, 0, 1.125);
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.125);
});

Event(40050000, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.AllPhysical, 50);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 0, 0.9);
});

Event(40050001, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.AllPhysical, 75);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 0, 0.9);
});

Event(40050002, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.AllPhysical, 100);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 0, 0.875);
});

Event(40060000, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Magic, 5);
});

Event(40060001, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Magic, 8);
});

Event(40060002, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Magic, 10);
});

Event(40070000, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Fire, 5);
});

Event(40070001, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Fire, 8);
});

Event(40070002, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Fire, 10);
});

Event(40080000, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Lightning, 5);
});

Event(40080001, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Lightning, 8);
});

Event(40080002, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Lightning, 10);
});

Event(40090000, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Dark, 5);
});

Event(40090001, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Dark, 8);
});

Event(40090002, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Dark, 10);
});

Event(40100000, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Poison, 15);
});

Event(40110000, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Bleed, 15);
});

Event(40120000, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.WeaponDurabilityReductionCorrection, 0, 0.8);
    ModifyStatusRate(ChrStatusRate.ArmorDurabilityReductionCorrection, 0, 0.8);
    ModifyStatusRate(ChrStatusRate.RingDurabilityReductionCorrection, 0, 0.8);
});

Event(40120001, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.WeaponDurabilityReductionCorrection, 0, 0.65);
    ModifyStatusRate(ChrStatusRate.ArmorDurabilityReductionCorrection, 0, 0.75);
    ModifyStatusRate(ChrStatusRate.RingDurabilityReductionCorrection, 0, 0.75);
});

Event(40120002, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.WeaponDurabilityReductionCorrection, 0, 0.5);
    ModifyStatusRate(ChrStatusRate.ArmorDurabilityReductionCorrection, 0, 0.65);
    ModifyStatusRate(ChrStatusRate.RingDurabilityReductionCorrection, 0, 0.65);
});

Event(40130000, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Curse, 40);
});

Event(40135000, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Petrify, 40);
});

Event(40140000, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Magic, 6);
    IncreaseDefensePower(0, EquipmentAttribute.Lightning, 6);
    IncreaseDefensePower(0, EquipmentAttribute.Fire, 6);
    IncreaseDefensePower(0, EquipmentAttribute.Dark, 6);
});

Event(40150000, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Poison, 12);
    IncreaseDefensePower(0, EquipmentAttribute.Bleed, 12);
    IncreaseDefensePower(0, EquipmentAttribute.WeaponDestruction, 12);
    IncreaseDefensePower(0, EquipmentAttribute.Curse, 12);
    IncreaseDefensePower(0, EquipmentAttribute.Petrify, 12);
});

Event(40160000, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    IncreaseAttackPower(0, EquipmentAttribute.AllPhysical, 20);
});

Event(40160001, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    IncreaseAttackPower(0, EquipmentAttribute.AllPhysical, 35);
});

Event(40160002, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    IncreaseAttackPower(0, EquipmentAttribute.AllPhysical, 50);
});

Event(40210000, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 5);
});

Event(40220000, Default, function() {
    ModifyStatusValue(ChrStatusValue.Faith, 0, 5);
});

Event(40230000, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.AttackPoiseDamage, 0, 30);
});

Event(40260000, Default, function() {
    DisplayIcon(60, StartAndEndConditions.RemainingHPPercentage0To100, 30);
    EffectSFX(931, 220, SFXDeletionTiming.EffectTimeExpired, 10, StartAndEndConditions.RemainingHPPercentage0To100, 30);
    ModifyStatusValue(ChrStatusValue.AttackCorrectionMoribundHPRatio0100, 0, 30);
    ModifyStatusRate(ChrStatusRate.AttackDamageCorrectionWhenNearDeath, 0, 1.2);
});

Event(40280000, Default, function() {
    DisplayIcon(60, StartAndEndConditions.RemainingHPPercentage0To100, 30);
    EffectSFX(932, 220, SFXDeletionTiming.EffectTimeExpired, 20, StartAndEndConditions.RemainingHPPercentage0To100, 30);
    ModifyStatusValue(ChrStatusValue.DamageTakenAndNeardeathHPRatio0100, 0, 30);
    ModifyStatusRate(ChrStatusRate.DamageCompensationWhenNearDeath, 0, 0.65);
});

Event(40290000, Default, function() {
    DisplayIcon(70, StartAndEndConditions.None, 0);
    EffectSFX(933, 220, SFXDeletionTiming.EffectTimeExpired, 30, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.Poise, 0, 10);
});

Event(40290001, Default, function() {
    DisplayIcon(70, StartAndEndConditions.None, 0);
    EffectSFX(933, 220, SFXDeletionTiming.EffectTimeExpired, 30, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.Poise, 0, 20);
});

Event(40290002, Default, function() {
    DisplayIcon(70, StartAndEndConditions.None, 0);
    EffectSFX(933, 220, SFXDeletionTiming.EffectTimeExpired, 30, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.Poise, 0, 30);
});

Event(40295000, Default, function() {
    ModifyStatusRate(ChrStatusRate.CounterDamageCorrectionValue, 0, 1.125);
});

Event(40300000, Default, function() {
    DestroyEquipment(EquipmentDestructionActivationConditions.Death, 1);
    DestroyEquipment(EquipmentDestructionActivationConditions.PetrificationDisabledActivation, 0);
    DisplayIcon(80, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableDeathPenaltyAndPetrification, 0);
});

Event(40310000, Default, function() {
    DestroyEquipment(EquipmentDestructionActivationConditions.Death, 1);
    DisplayIcon(80, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableDeathPenalty, 0);
});

Event(40320000, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ExtendEffectTime(1.15);
});

Event(40320001, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ExtendEffectTime(1.25);
});

Event(40320002, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ExtendEffectTime(1.4);
});

Event(40330000, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ChangeSpellCastingTime, 0, 0.8);
});

Event(40330001, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ChangeSpellCastingTime, 0, 0.65);
});

Event(40330002, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ChangeSpellCastingTime, 0, 0.6);
});

Event(40340000, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumNumberOfSpellUsesChanged, 0, 1.1);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 0.8);
});

Event(40340001, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumNumberOfSpellUsesChanged, 0, 1.2);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 0.75);
});

Event(40340002, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumNumberOfSpellUsesChanged, 0, 1.3);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 0.5);
});

Event(40350000, Default, function() {
    ModifyStatusValue(ChrStatusValue.AttunementSlots, 0, 1);
});

Event(40350001, Default, function() {
    ModifyStatusValue(ChrStatusValue.AttunementSlots, 0, 2);
});

Event(40350002, Default, function() {
    ModifyStatusValue(ChrStatusValue.AttunementSlots, 0, 3);
});

Event(40360000, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(40360001, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(40360002, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(40370000, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.1);
});

Event(40370001, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.2);
});

Event(40370002, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.3);
});

Event(40390000, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 30);
    ModifyStatusValue32(ChrStatusValue32.SFXIDWhenHPRecoversWhenDefeated, 0, 934);
    ModifyStatusValue32(ChrStatusValue32.SFXDummyPolyIDWhenRecoveringHPWhenDefeated, 0, 249);
});

Event(40390001, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 50);
    ModifyStatusValue32(ChrStatusValue32.SFXIDWhenHPRecoversWhenDefeated, 0, 934);
    ModifyStatusValue32(ChrStatusValue32.SFXDummyPolyIDWhenRecoveringHPWhenDefeated, 0, 249);
});

Event(40390002, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 80);
    ModifyStatusValue32(ChrStatusValue32.SFXIDWhenHPRecoversWhenDefeated, 0, 934);
    ModifyStatusValue32(ChrStatusValue32.SFXDummyPolyIDWhenRecoveringHPWhenDefeated, 0, 249);
});

Event(40400000, Default, function() {
    DisplayIcon(120, StartAndEndConditions.None, 0);
    EffectSFX(935, 249, SFXDeletionTiming.EffectTimeExpired, 40, StartAndEndConditions.None, 0);
    EffectCorrectionSettings(1, 2);
    TimeHPRecovery(1, 850, 3, 1069547520, 0);
});

Event(40410000, Default, function() {
    ModifyStatusRate(ChrStatusRate.DeadPersonDemeritInvalidationCorrection, 0, 0.5);
});

Event(40420000, Default, function() {
    DisplayIcon(130, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 4);
});

Event(40430000, Default, function() {
    DisplayIcon(140, StartAndEndConditions.None, 0);
    EffectSFX(937, 7, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyEnemyAggroToPlayer(2);
});

Event(40440000, Default, function() {
    EffectSFX(938, 3, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableBackstab, 0);
    ModifyStatusFlag(ChrStatusFlag.ReduceBackDamage, 0);
    ModifyStatusRate(ChrStatusRate.Unknown61, 0, 0.8);
    ModifyStatusRate(ChrStatusRate.Unknown62, 0, 0.15);
});

Event(40460000, Default, function() {
    EffectSFX(939, 5, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(939, 6, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableFootstepSound, 0);
});

Event(40470000, Default, function() {
    DisplayIcon(170, StartAndEndConditions.None, 0);
    ModifyBulletParam(0, ShootingType.Bow, 1.075, 1, 1.075, 1.075, 1);
    ModifyBulletParam(0, ShootingType.Greatbow, 1.075, 1, 1.075, 1.075, 1);
    ModifyBulletParam(0, ShootingType.Crossbow, 1.075, 1, 1.075, 1.075, 1);
});

Event(40480000, Default, function() {
    EffectSFX(940, 220, SFXDeletionTiming.EffectTimeExpired, 30, StartAndEndConditions.None, 0);
    DisplayIcon(180, StartAndEndConditions.None, 0);
    DamageAccumulationBullet(30, 10, 10, 40480000, 40480000);
});

Event(40500000, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.HideLeftWeapon, 0);
});

Event(40510000, Default, function() {
    IncreaseAttackPower(0, EquipmentAttribute.Fire, 5);
});

Event(40520000, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.ForcedLivingDisplay, 0);
    EffectSFX(869, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
});

Event(40530000, Default, function() {
    DamageReflection(30, 10, 50, 500, 40530000, 40530000);
});

Event(40530001, Default, function() {
    DamageReflection(50, 9, 50, 400, 40530000, 40530000);
});

Event(40530002, Default, function() {
    DamageReflection(70, 8, 50, 300, 40530000, 40530000);
});

Event(40540000, Default, function() {
    InvasionCooldownReset();
});

Event(40550000, Default, function() {
    ModifyStatusValue32(ChrStatusValue32.SpiritMimicry, 0, 2);
    DrawDisableFullBodySFX(0);
});

Event(40610000, Default, function() {
    PlaySEWhenEnemiesNearbyPlayer(35, 5, 5, 6, 10, 100000027);
});

Event(40620000, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.HideRightWeapon, 0);
});

Event(40700000, Default, function() {
    SummonSearchRequest(ForcedSummonSearchType.CrestOfTheRat);
    IncreaseAttackPower(0, EquipmentAttribute.Poison, 50);
});

Event(40710000, Default, function() {
    SummonSearchRequest(ForcedSummonSearchType.BellKeeper);
});

Event(40720000, Default, function() {
    SummonSearchRequest(ForcedSummonSearchType.GuardiansSeal);
});

Event(40730000, Default, function() {
    IncreaseAttackPower(0, EquipmentAttribute.Bleed, 50);
});

Event(40740000, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 1.03);
});

Event(40750000, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusValue32(ChrStatusValue32.HPGradualDecreaseValueWhenUsingSpellDarkMagic, 0, 30);
    ModifyStatusValue32(ChrStatusValue32.HPGradualDecreaseValueWhenUsingSpellDarkMiracle, 0, 30);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMagic, 0, 1.075);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMiracle, 0, 1.075);
});

Event(40760000, Default, function() {
    StrongBarehandEquipment(0, 3406000, 3407000, 3408000);
});

Event(40770000, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMiracle, 0, 1.05);
});

Event(40780000, Default, function() {
    ModifyEstusUsage(EstusModificationType.BoostBy50, 0);
});

Event(40010003, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 1.15);
});

Event(40060003, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Magic, 15);
});

Event(40070003, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Fire, 15);
});

Event(40080003, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Lightning, 15);
});

Event(40090003, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Dark, 15);
});

Event(41000000, Default, function() {
    ModifyStatusValue(ChrStatusValue.Adaptability, 0, 5);
    ModifyStatusFlag(ChrStatusFlag.Unknown31, 0);
});

Event(41010000, Default, function() {
    ModifyStatusValue(ChrStatusValue.Strength, 0, 5);
});

Event(41020000, Default, function() {
    ModifyStatusValue(ChrStatusValue.Dexterity, 0, 5);
});

Event(41030000, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    EffectSFX(5449, 220, SFXDeletionTiming.EffectTimeExpired, 45, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.AntiStabilityModifier, 0, 20);
    ModifyStatusValue(ChrStatusValue.Unknown22, 0, 4);
});

Event(41040000, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    IncreaseAttackPower(0, EquipmentAttribute.Magic, 30);
    DecreaseDefensePower(0, EquipmentAttribute.AllPhysical, 80);
});

Event(41050000, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    IncreaseAttackPower(0, EquipmentAttribute.Lightning, 30);
    DecreaseDefensePower(0, EquipmentAttribute.AllPhysical, 80);
});

Event(41060000, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    IncreaseAttackPower(0, EquipmentAttribute.Fire, 30);
    DecreaseDefensePower(0, EquipmentAttribute.AllPhysical, 80);
});

Event(41070000, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    IncreaseAttackPower(0, EquipmentAttribute.Dark, 30);
    DecreaseDefensePower(0, EquipmentAttribute.AllPhysical, 80);
});

Event(41090000, Default, function() {
    ModifyStatusRate(ChrStatusRate.ShieldStability, 0, 5);
});

Event(41100000, Default, function() {
    DisplayIcon(40, StartAndEndConditions.None, 0);
    ApplyEquipLoadbasedFlatDamageToWeapon(60, 80, 100, 0, 50, 10, 1);
});

Event(41110000, Default, function() {
    ModifyAttributeByCurrentValue(AttributeType.Vigor, 6, 60, 7, 3);
    ModifyAttributeByCurrentValue(AttributeType.Endurance, 6, 60, 7, 3);
    ModifyAttributeByCurrentValue(AttributeType.Vitality, 6, 60, 7, 3);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 0, 1.085);
});

Event(41120000, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableChrPhantomColor, 0);
    DrawDisableFullBodySFX(0);
});

Event(41130000, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    EffectSFX(5450, 220, SFXDeletionTiming.EffectTimeExpired, 23, StartAndEndConditions.None, 0);
    AddSpellDeflectChance(50, 5451);
});

Event(40100001, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Poison, 30);
});

Event(40110001, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Bleed, 30);
});

Event(40140001, Default, function() {
    DisplayIcon(20, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Magic, 12);
    IncreaseDefensePower(0, EquipmentAttribute.Lightning, 12);
    IncreaseDefensePower(0, EquipmentAttribute.Fire, 12);
    IncreaseDefensePower(0, EquipmentAttribute.Dark, 12);
});

Event(40150001, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    IncreaseDefensePower(0, EquipmentAttribute.Poison, 20);
    IncreaseDefensePower(0, EquipmentAttribute.Bleed, 20);
    IncreaseDefensePower(0, EquipmentAttribute.WeaponDestruction, 20);
    IncreaseDefensePower(0, EquipmentAttribute.Curse, 20);
    IncreaseDefensePower(0, EquipmentAttribute.Petrify, 20);
});

Event(42000000, Default, function() {
    DisplayIcon(310, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableSoulAbsorption, 0);
});


