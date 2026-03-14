// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2_64\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(31070000, Default, function() {
    ApplySpEffectByIntelligence(15, 24, 30, 40, 31070090);
});

Event(31070090, Default, function() {
    HomingSoulMass(6, 30, 31070010, 31070010);
});

Event(31070091, Default, function() {
    HomingSoulMass(6, 30, 31070011, 31070010);
});

Event(31070092, Default, function() {
    HomingSoulMass(6, 30, 31070012, 31070010);
});

Event(31070093, Default, function() {
    HomingSoulMass(6, 30, 31070013, 31070010);
});

Event(31070094, Default, function() {
    HomingSoulMass(6, 30, 31070014, 31070010);
});

Event(31070095, Default, function() {
    HomingSoulMass(6, 30, 31070015, 31070010);
});

Event(31070096, Default, function() {
    HomingSoulMass(6, 30, 31070016, 31070010);
});

Event(31070097, Default, function() {
    HomingSoulMass(6, 30, 31070017, 31070010);
});

Event(31070098, Default, function() {
    HomingSoulMass(6, 30, 31070018, 31070010);
});

Event(31070099, Default, function() {
    HomingSoulMass(6, 30, 31070019, 31070010);
});

Event(31070100, Default, function() {
    HomingSoulMass(6, 30, 31070020, 31070010);
});

Event(31070101, Default, function() {
    HomingSoulMass(6, 30, 31070021, 31070010);
});

Event(31070102, Default, function() {
    HomingSoulMass(6, 30, 31070022, 31070010);
});

Event(31070103, Default, function() {
    HomingSoulMass(6, 30, 31070023, 31070010);
});

Event(31070104, Default, function() {
    HomingSoulMass(6, 30, 31070024, 31070010);
});

Event(31080000, Default, function() {
    ApplySpEffectByIntelligence(24, 30, 40, 50, 31080090);
});

Event(31080090, Default, function() {
    HomingSoulMass(6, 30, 31080010, 31080010);
});

Event(31080091, Default, function() {
    HomingSoulMass(6, 30, 31080011, 31080010);
});

Event(31080092, Default, function() {
    HomingSoulMass(6, 30, 31080012, 31080010);
});

Event(31080093, Default, function() {
    HomingSoulMass(6, 30, 31080013, 31080010);
});

Event(31080094, Default, function() {
    HomingSoulMass(6, 30, 31080014, 31080010);
});

Event(31080095, Default, function() {
    HomingSoulMass(6, 30, 31080015, 31080010);
});

Event(31080096, Default, function() {
    HomingSoulMass(6, 30, 31080016, 31080010);
});

Event(31080097, Default, function() {
    HomingSoulMass(6, 30, 31080017, 31080010);
});

Event(31080098, Default, function() {
    HomingSoulMass(6, 30, 31080018, 31080010);
});

Event(31080099, Default, function() {
    HomingSoulMass(6, 30, 31080019, 31080010);
});

Event(31080100, Default, function() {
    HomingSoulMass(6, 30, 31080020, 31080010);
});

Event(31080101, Default, function() {
    HomingSoulMass(6, 30, 31080021, 31080010);
});

Event(31080102, Default, function() {
    HomingSoulMass(6, 30, 31080022, 31080010);
});

Event(31080103, Default, function() {
    HomingSoulMass(6, 30, 31080023, 31080010);
});

Event(31080104, Default, function() {
    HomingSoulMass(6, 30, 31080024, 31080010);
});

Event(31180000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5177, 0.1, 0, 1, 0, 0);
    EffectSFX(5310, 21, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 15, 0.7, 1.5, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Magic, 15);
    IncreaseAttackPower(90, EquipmentAttribute.Magic, 30);
});

Event(31181000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5177, 0.1, 0, 1, 0, 0);
    EffectSFX(5310, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 15, 0.7, 1.5, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Magic, 15);
    IncreaseAttackPower(90, EquipmentAttribute.Magic, 30);
});

Event(31190000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5178, 0.1, 0, 1, 0, 0);
    EffectSFX(5311, 21, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 27, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Magic, 20);
    IncreaseAttackPower(90, EquipmentAttribute.Magic, 30);
});

Event(31191000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5178, 0.1, 0, 1, 0, 0);
    EffectSFX(5311, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 27, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Magic, 20);
    IncreaseAttackPower(90, EquipmentAttribute.Magic, 30);
});

Event(31200000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5179, 0.1, 0, 1, 0, 0);
    EffectSFX(5312, 21, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 14, 42, 0.3, 1.1, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Magic, 30);
    IncreaseAttackPower(90, EquipmentAttribute.Magic, 15);
});

Event(31201000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5179, 0.1, 0, 1, 0, 0);
    EffectSFX(5312, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 14, 42, 0.3, 1.1, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Magic, 30);
    IncreaseAttackPower(90, EquipmentAttribute.Magic, 15);
});

Event(31210000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5180, 0.1, 0, 1, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 27, 0.7, 2, 1, 1, 1, 1);
    ModifyStatusRate(ChrStatusRate.ShieldStability, 30, 5);
    ModifyStatusRate(ChrStatusRate.PhysicalDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.MagicDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.LightningDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.FireDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.DarkDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.PoisonDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.BleedingDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.WeaponDestructionDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.CursedDamageCutRate, 30, 100);
});

Event(31211000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5180, 0.1, 0, 1, 0, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 27, 0.7, 2, 1, 1, 1, 1);
    ModifyStatusRate(ChrStatusRate.ShieldStability, 30, 5);
    ModifyStatusRate(ChrStatusRate.PhysicalDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.MagicDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.LightningDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.FireDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.DarkDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.PoisonDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.BleedingDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.WeaponDestructionDamageCutRate, 30, 100);
    ModifyStatusRate(ChrStatusRate.CursedDamageCutRate, 30, 100);
});

Event(31230000, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5182, 5, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5182, 6, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 22, 0.65, 1.25, 1, 1, 1, 1);
    ModifyStatusFlag(ChrStatusFlag.DisableFootstepSound, 90);
});

Event(31240000, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5183, 5, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5183, 6, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 22, 0.65, 1.25, 1, 1, 1, 1);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 90, 100);
});

Event(31250001, Default, function() {
    WeaponSFX(5184, 0.1, 0, 1, 0, 0);
    VirtualCommand(1);
});

Event(31250002, Default, function() {
    AllowEffectTimeExtension();
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.85, 1.25, 1, 1, 1, 1);
    ModifyStatusFlag(ChrStatusFlag.HideLeftWeapon, 90);
});

Event(31251001, Default, function() {
    WeaponSFX(5184, 0.1, 0, 1, 0, 0);
    VirtualCommand(1);
});

Event(31251002, Default, function() {
    AllowEffectTimeExtension();
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.85, 1.25, 1, 1, 1, 1);
    ModifyStatusFlag(ChrStatusFlag.HideRightWeapon, 90);
});

Event(31260000, Default, function() {
    EffectSFX(5185, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeRightHandCurrentWeapon, 0, 20);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeLeftHandCurrentWeapon, 0, 20);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquipmentArmor, 0, 30);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquipmentRings, 0, 10);
});

Event(31270000, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5186, 10, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 21, 0.75, 1.5, 1, 1, 1, 1);
    ModifyStatusValue32(ChrStatusValue32.PlayerLightSwitching, 45, 50);
});

Event(31280000, Default, function() {
    EffectSFX(5032, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    SingleDamageGeneration(32230050);
    SingleDamageGeneration(32080050);
});

Event(31280010, Default, function() {
    ApplyRandomSpEffect(31280001, 31280002, 31280003, 31280004, 31280005);
});

Event(31280001, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 0, 5187);
});

Event(31280002, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 1, 5187);
});

Event(31280003, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 2, 5187);
});

Event(31280004, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 3, 5187);
});

Event(31280005, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 4, 5187);
});

Event(31290000, Default, function() {
    EffectSFX(5033, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(31290001, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5188, 249, SFXDeletionTiming.EffectTimeExpired, 5, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 29, 87, 0.5, 2, 1, 1, 1, 1);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 60, 0.7);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMagic, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMiracle, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierSorcery, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMagic, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMiracle, 60, 1.2);
});

Event(32010000, Default, function() {
    CreateBulletByAttribute(32010010, 32010010, AttributeType.Faith, 12, 22, 32, 42);
});

Event(32010010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 300, 1065353216, 1);
    EffectSFX(5200, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32010011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 450, 1065353216, 1);
    EffectSFX(5200, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32010012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 500, 1065353216, 1);
    EffectSFX(5200, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32010013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 550, 1065353216, 1);
    EffectSFX(5200, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32010014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 12, 22, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 600, 1065353216, 1);
    EffectSFX(5200, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32020000, Default, function() {
    CreateBulletByAttribute(32020010, 32020010, AttributeType.Faith, 15, 18, 28, 38);
});

Event(32020010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 400, 1067450368, 1);
    EffectSFX(5201, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32020011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 600, 1067450368, 1);
    EffectSFX(5201, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32020012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 800, 1067450368, 1);
    EffectSFX(5201, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32020013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 825, 1067450368, 1);
    EffectSFX(5201, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32020014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 18, 28, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 850, 1067450368, 1);
    EffectSFX(5201, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32030000, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 10, 14, 0.5, 1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 1300, 1069547520, 1);
    EffectSFX(5202, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32040000, Default, function() {
    CreateBulletByAttribute(32040010, 32040010, AttributeType.Faith, 18, 28, 38, 48);
});

Event(32040010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 600, 1071644672, 1);
    EffectSFX(5203, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32040011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 1000, 1071644672, 1);
    EffectSFX(5203, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32040012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 1100, 1071644672, 1);
    EffectSFX(5203, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32040013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 1200, 1071644672, 1);
    EffectSFX(5203, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32040014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 28, 38, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 1300, 1071644672, 1);
    EffectSFX(5203, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32050000, Default, function() {
    CreateBulletByAttribute(32050010, 32050010, AttributeType.Faith, 32, 42, 52, 62);
});

Event(32050010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 500, 1071644672, 1);
    EffectSFX(5204, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32050011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 600, 1071644672, 1);
    EffectSFX(5204, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32050012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 700, 1071644672, 1);
    EffectSFX(5204, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32050013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 1000, 1071644672, 1);
    EffectSFX(5204, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32050014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 52, 62, 1, 1.1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 1100, 1071644672, 1);
    EffectSFX(5204, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32060000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(32060010, Default, function() {
    EffectSFX(5226, 249, SFXDeletionTiming.EffectTimeExpired, 25, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 10, 16, 0.5, 1, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 840, 1123024896, 0);
});

Event(32070000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(32070010, Default, function() {
    EffectSFX(5206, 249, SFXDeletionTiming.EffectTimeExpired, 25, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 15, 35, 0.5, 1.3, 1, 1, 1, 1);
    TimeHPRecovery(1, 850, 840, 1114636288, 0);
});

Event(32080000, Default, function() {
    CreateBulletByAttribute(32080010, 32080010, AttributeType.Faith, 18, 28, 38, 48);
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(32080010, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 1, 1.1, 1, 1, 1, 1);
    EffectSFX(5207, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5206, 249, SFXDeletionTiming.EffectTimeExpired, 25, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 400, 1120403456, 0);
});

Event(32080011, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 1, 1.1, 1, 1, 1, 1);
    EffectSFX(5207, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5206, 249, SFXDeletionTiming.EffectTimeExpired, 25, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 500, 1120403456, 0);
});

Event(32080012, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 0.9, 1, 1, 1, 1, 1);
    EffectSFX(5207, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5206, 249, SFXDeletionTiming.EffectTimeExpired, 25, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 750, 1123680256, 0);
});

Event(32080013, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 0.9, 1, 1, 1, 1, 1);
    EffectSFX(5207, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5206, 249, SFXDeletionTiming.EffectTimeExpired, 25, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 880, 1123773879, 0);
});

Event(32080014, Default, function() {
    ScaleSpEffectByAttribute(SpEffectScaleType.Value, AttributeType.Faith, 38, 48, 0.9, 1, 1, 1, 1, 1);
    EffectSFX(5207, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5206, 249, SFXDeletionTiming.EffectTimeExpired, 25, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 1250, 1127387721, 0);
});

Event(32080050, Default, function() {
    VirtualCommand(0.5);
});

Event(32090000, Default, function() {
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    AbnormalStatusChange(1, 871, 11);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 1, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 1, 100);
    EffectSFX(5208, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(32170011, Default, function() {
    EffectSFX(5216, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(2);
});

Event(32190000, Default, function() {
    CreateBulletByAttribute(32190010, 32190010, AttributeType.Faith, 10, 14, 24, 34);
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(32190010, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5069, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    FullBodySFX(501010, SFXDeletionTiming.EffectTimeExpired);
    EffectSFX(5218, 150, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 151, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 152, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 153, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseDefensePower(60, EquipmentAttribute.Magic, 10);
    IncreaseDefensePower(60, EquipmentAttribute.Lightning, 10);
    IncreaseDefensePower(60, EquipmentAttribute.Fire, 10);
    IncreaseDefensePower(60, EquipmentAttribute.Dark, 10);
});

Event(32190011, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5069, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    FullBodySFX(501010, SFXDeletionTiming.EffectTimeExpired);
    EffectSFX(5218, 150, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 151, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 152, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 153, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseDefensePower(70, EquipmentAttribute.Magic, 15);
    IncreaseDefensePower(70, EquipmentAttribute.Lightning, 15);
    IncreaseDefensePower(70, EquipmentAttribute.Fire, 15);
    IncreaseDefensePower(70, EquipmentAttribute.Dark, 15);
});

Event(32190012, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5069, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    FullBodySFX(501010, SFXDeletionTiming.EffectTimeExpired);
    EffectSFX(5218, 150, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 151, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 152, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 153, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseDefensePower(80, EquipmentAttribute.Magic, 15);
    IncreaseDefensePower(80, EquipmentAttribute.Lightning, 15);
    IncreaseDefensePower(80, EquipmentAttribute.Fire, 15);
    IncreaseDefensePower(80, EquipmentAttribute.Dark, 15);
});

Event(32190013, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5069, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    FullBodySFX(501010, SFXDeletionTiming.EffectTimeExpired);
    EffectSFX(5218, 150, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 151, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 152, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 153, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.Magic, 15);
    IncreaseDefensePower(90, EquipmentAttribute.Lightning, 15);
    IncreaseDefensePower(90, EquipmentAttribute.Fire, 15);
    IncreaseDefensePower(90, EquipmentAttribute.Dark, 15);
});

Event(32190014, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5069, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    FullBodySFX(501010, SFXDeletionTiming.EffectTimeExpired);
    EffectSFX(5218, 150, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 151, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 152, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5218, 153, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseDefensePower(95, EquipmentAttribute.Magic, 15);
    IncreaseDefensePower(95, EquipmentAttribute.Lightning, 15);
    IncreaseDefensePower(95, EquipmentAttribute.Fire, 15);
    IncreaseDefensePower(95, EquipmentAttribute.Dark, 15);
});

Event(32200000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(32200010, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5070, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    FullBodySFX(501020, SFXDeletionTiming.EffectTimeExpired);
    EffectSFX(5219, 150, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5219, 151, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5219, 152, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5219, 153, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 14, 42, 0.2, 1, 1, 1, 1, 1);
    IncreaseDefensePower(90, EquipmentAttribute.Magic, 25);
    IncreaseDefensePower(90, EquipmentAttribute.Lightning, 25);
    IncreaseDefensePower(90, EquipmentAttribute.Fire, 25);
    IncreaseDefensePower(90, EquipmentAttribute.Dark, 25);
});

Event(32210000, Default, function() {
    EffectSFX(5071, 9, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(5220, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    WarpPlayer(WarpType.Bonfire, -1, -1);
});

Event(32220000, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5221, 249, SFXDeletionTiming.EffectTimeExpired, 20, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 18, 0.7, 2, 1, 1, 1, 1);
    VirtualCommand(60);
});

Event(32230000, Default, function() {
    CreateBulletByAttribute(32230010, 32230010, AttributeType.Faith, 15, 20, 25, 35);
    SingleDamageGeneration(32080050);
});

Event(32230010, Default, function() {
    EffectSFX(5222, 249, SFXDeletionTiming.EffectTimeExpired, 6, StartAndEndConditions.None, 0);
    IncreaseAttackPower(40, EquipmentAttribute.AllPhysical, 50);
    IncreaseDefensePower(40, EquipmentAttribute.AllPhysical, 75);
    IncreaseAttackUnknown(40, EquipmentAttribute.AllPhysical, 50);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 40, 0.9);
});

Event(32230011, Default, function() {
    EffectSFX(5222, 249, SFXDeletionTiming.EffectTimeExpired, 6, StartAndEndConditions.None, 0);
    IncreaseAttackPower(45, EquipmentAttribute.AllPhysical, 50);
    IncreaseDefensePower(45, EquipmentAttribute.AllPhysical, 75);
    IncreaseAttackUnknown(45, EquipmentAttribute.AllPhysical, 50);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 45, 0.9);
});

Event(32230012, Default, function() {
    EffectSFX(5222, 249, SFXDeletionTiming.EffectTimeExpired, 6, StartAndEndConditions.None, 0);
    IncreaseAttackPower(50, EquipmentAttribute.AllPhysical, 50);
    IncreaseDefensePower(50, EquipmentAttribute.AllPhysical, 75);
    IncreaseAttackUnknown(50, EquipmentAttribute.AllPhysical, 50);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 50, 0.9);
});

Event(32230013, Default, function() {
    EffectSFX(5222, 249, SFXDeletionTiming.EffectTimeExpired, 6, StartAndEndConditions.None, 0);
    IncreaseAttackPower(60, EquipmentAttribute.AllPhysical, 50);
    IncreaseDefensePower(60, EquipmentAttribute.AllPhysical, 75);
    IncreaseAttackUnknown(60, EquipmentAttribute.AllPhysical, 50);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 60, 0.9);
});

Event(32230014, Default, function() {
    EffectSFX(5222, 249, SFXDeletionTiming.EffectTimeExpired, 6, StartAndEndConditions.None, 0);
    IncreaseAttackPower(65, EquipmentAttribute.AllPhysical, 50);
    IncreaseDefensePower(65, EquipmentAttribute.AllPhysical, 75);
    IncreaseAttackUnknown(65, EquipmentAttribute.AllPhysical, 50);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 65, 0.9);
});

Event(32230050, Default, function() {
    VirtualCommand(0.5);
});

Event(32240000, Default, function() {
    AdversaryDetection();
});

Event(32250000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(32250010, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5224, 249, SFXDeletionTiming.EffectTimeExpired, 9, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 25, 0.65, 2, 1, 1, 1, 1);
    IncreaseDefensePower(60, EquipmentAttribute.Poison, 15);
    IncreaseDefensePower(60, EquipmentAttribute.Bleed, 15);
    IncreaseDefensePower(60, EquipmentAttribute.WeaponDestruction, 15);
    IncreaseDefensePower(60, EquipmentAttribute.Curse, 30);
    IncreaseDefensePower(60, EquipmentAttribute.Petrify, 30);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueBleeding, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueWeaponDestruction, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCurse, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCombustion, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 60, 1.2);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePetrification, 60, 1.2);
});

Event(32260000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5225, 0.1, 0, 1, 0, 0);
    EffectSFX(5315, 21, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 18, 54, 0.3, 1.1, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Lightning, 30);
    IncreaseAttackPower(90, EquipmentAttribute.Lightning, 15);
});

Event(32261000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5225, 0.1, 0, 1, 0, 0);
    EffectSFX(5315, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 18, 54, 0.3, 1.1, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Lightning, 30);
    IncreaseAttackPower(90, EquipmentAttribute.Lightning, 15);
});

Event(33050003, Default, function() {
    CreateBullet(33050004, 33050004, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(33060003, Default, function() {
    CreateBullet(33060004, 33060004, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(33070003, Default, function() {
    CreateBullet(33070004, 33070004, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(33170000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5256, 0.1, 0, 1, 0, 0);
    EffectSFX(5316, 21, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ChangeDamageRate(90, EquipmentAttribute.Fire, 20);
    ModifyStatusFlag(ChrStatusFlag.FlameWeapon, 90);
    IncreaseAttackPower(90, EquipmentAttribute.Fire, 15);
});

Event(33171000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5256, 0.1, 0, 1, 0, 0);
    EffectSFX(5316, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ChangeDamageRate(90, EquipmentAttribute.Fire, 20);
    ModifyStatusFlag(ChrStatusFlag.FlameWeapon, 90);
    IncreaseAttackPower(90, EquipmentAttribute.Fire, 15);
});

Event(33180000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(33180010, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5257, 249, SFXDeletionTiming.EffectTimeExpired, 9, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.Fire, 30);
});

Event(33190000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(33190010, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5258, 249, SFXDeletionTiming.EffectTimeExpired, 9, StartAndEndConditions.None, 0);
    ModifyStatusValue32(ChrStatusValue32.WetnessMimicry, 25, 4);
    ModifyStatusValue(ChrStatusValue.MaterialReplacement, 25, 3);
    IncreaseDefensePower(25, EquipmentAttribute.AllPhysical, 100);
    IncreaseDefensePower(25, EquipmentAttribute.Magic, 20);
    IncreaseDefensePower(25, EquipmentAttribute.Lightning, 20);
    IncreaseDefensePower(25, EquipmentAttribute.Fire, 20);
    IncreaseDefensePower(25, EquipmentAttribute.Dark, 20);
    IncreaseDefensePower(25, EquipmentAttribute.Poison, 20);
    IncreaseDefensePower(25, EquipmentAttribute.Bleed, 20);
    IncreaseDefensePower(25, EquipmentAttribute.Curse, 20);
    IncreaseDefensePower(25, EquipmentAttribute.Petrify, 20);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 25, 0.6);
    ModifyStatusValue32(ChrStatusValue32.Unknown33, 25, 100);
    ModifyStatusValue(ChrStatusValue.Weight, 25, 65);
    ModifyMovementSpeed(25, 0.9, TargetCharacter.Player);
});

Event(33200000, Default, function() {
    EffectSFX(5259, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 150, 1065353216, 1);
    VirtualCommand(3);
});

Event(33210000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(33210005, Default, function() {
    AllowEffectTimeExtension();
    GenerateDamage(33210010, 1, -1);
    EffectSFX(5260, 249, SFXDeletionTiming.EffectTimeExpired, 9, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.FlameWeapon, 30);
    VirtualCommand(30);
});

Event(33210010, Default, function() {
    CreateBullet(33210020, 33210020, BulletAttackType.None, 1);
    CreateBullet(33210021, 33210021, BulletAttackType.None, 1);
    CreateBullet(33210022, 33210022, BulletAttackType.None, 1);
});

Event(34050000, Default, function() {
    RagdollExplosion(10, 5, 34050010, 34050010, 34050010, 34050010);
});

Event(34040000, Default, function() {
    ApplySpEffectByIntelligence(30, 40, 50, 60, 34040090);
});

Event(34040090, Default, function() {
    HomingSoulMass(8, 30, 34040010, 34040010);
});

Event(34040091, Default, function() {
    HomingSoulMass(8, 30, 34040011, 34040010);
});

Event(34040092, Default, function() {
    HomingSoulMass(8, 30, 34040012, 34040010);
});

Event(34040093, Default, function() {
    HomingSoulMass(8, 30, 34040013, 34040010);
});

Event(34040094, Default, function() {
    HomingSoulMass(8, 30, 34040014, 34040010);
});

Event(34040095, Default, function() {
    HomingSoulMass(8, 30, 34040015, 34040010);
});

Event(34040096, Default, function() {
    HomingSoulMass(8, 30, 34040016, 34040010);
});

Event(34040097, Default, function() {
    HomingSoulMass(8, 30, 34040017, 34040010);
});

Event(34040098, Default, function() {
    HomingSoulMass(8, 30, 34040018, 34040010);
});

Event(34040099, Default, function() {
    HomingSoulMass(8, 30, 34040019, 34040010);
});

Event(34040100, Default, function() {
    HomingSoulMass(8, 30, 34040020, 34040010);
});

Event(34040101, Default, function() {
    HomingSoulMass(8, 30, 34040021, 34040010);
});

Event(34040102, Default, function() {
    HomingSoulMass(8, 30, 34040022, 34040010);
});

Event(34040103, Default, function() {
    HomingSoulMass(8, 30, 34040023, 34040010);
});

Event(34040104, Default, function() {
    HomingSoulMass(8, 30, 34040024, 34040010);
});

Event(34060000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5285, 0.1, 0, 1, 0, 0);
    EffectSFX(5317, 21, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 24, 0.3, 1.1, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Dark, 30);
    IncreaseAttackPower(90, EquipmentAttribute.Dark, 15);
});

Event(34061000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5285, 0.1, 0, 1, 0, 0);
    EffectSFX(5317, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 10, 24, 0.3, 1.1, 1, 1, 1, 1);
    ChangeDamageRate(90, EquipmentAttribute.Dark, 30);
    IncreaseAttackPower(90, EquipmentAttribute.Dark, 15);
});

Event(34070000, Default, function() {
    CreateBulletByAttribute(34070010, 34070010, AttributeType.Intelligence, 14, 24, 34, 44);
});

Event(34070010, Default, function() {
    EffectSFX(5286, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    DecreaseDefensePower(20, EquipmentAttribute.AllPhysical, 200);
});

Event(34070011, Default, function() {
    EffectSFX(5286, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    DecreaseDefensePower(30, EquipmentAttribute.AllPhysical, 200);
});

Event(34070012, Default, function() {
    EffectSFX(5286, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    DecreaseDefensePower(40, EquipmentAttribute.AllPhysical, 200);
});

Event(34070013, Default, function() {
    EffectSFX(5286, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    DecreaseDefensePower(50, EquipmentAttribute.AllPhysical, 200);
});

Event(34070014, Default, function() {
    EffectSFX(5286, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    DecreaseDefensePower(60, EquipmentAttribute.AllPhysical, 200);
});

Event(34080000, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DamageDisabled, 1.75);
    SpellParrySetting(1.9, SpellParryType.MagicPower, 5287);
    SpellParrySetting(1.9, SpellParryType.Thunder, 5287);
    SpellParrySetting(1.9, SpellParryType.Flame, 5287);
    SpellParrySetting(1.9, SpellParryType.Darkness, 5287);
});

Event(34090000, Default, function() {
    SpellParrySetting(1.9, SpellParryType.MagicPower, 5298);
    SpellParrySetting(1.9, SpellParryType.Thunder, 5298);
    SpellParrySetting(1.9, SpellParryType.Flame, 5298);
    SpellParrySetting(1.9, SpellParryType.Darkness, 5298);
});

Event(34100000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(34100010, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5288, 249, SFXDeletionTiming.EffectTimeExpired, 5, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Intelligence, 21, 61, 1, 4.5, 1, 1, 1, 1);
    ModifyStatusValue32(ChrStatusValue32.FieldOfViewSwitching, 20, 1);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenReceivingDamage, 20, 0.85);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 20, 0.8);
});

Event(35060000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(35060001, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(35060002, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(35060003, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(35060004, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(35060010, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5294, 249, SFXDeletionTiming.EffectTimeExpired, 5, StartAndEndConditions.None, 0);
    EffectSFX(5145, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 60, 1.2);
});

Event(35060011, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5294, 249, SFXDeletionTiming.EffectTimeExpired, 5, StartAndEndConditions.None, 0);
    EffectSFX(5145, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 60, 1.1);
});

Event(35060012, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5294, 249, SFXDeletionTiming.EffectTimeExpired, 5, StartAndEndConditions.None, 0);
    EffectSFX(5145, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 50, 1.05);
});

Event(35060013, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5294, 249, SFXDeletionTiming.EffectTimeExpired, 5, StartAndEndConditions.None, 0);
    EffectSFX(5145, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 40, 1.025);
});

Event(35060014, Default, function() {
    AllowEffectTimeExtension();
    EffectSFX(5294, 249, SFXDeletionTiming.EffectTimeExpired, 5, StartAndEndConditions.None, 0);
    EffectSFX(5145, 249, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 10, 30, 0.9, 3, 1, 1, 1, 1);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 30, 1.025);
});

Event(35070000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(60, EquipmentAttribute.Dark, 35);
    IncreaseAttackPower(60, EquipmentAttribute.Dark, 0);
});

Event(35070001, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(60, EquipmentAttribute.Dark, 30);
    IncreaseAttackPower(60, EquipmentAttribute.Dark, 0);
});

Event(35070002, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(30, EquipmentAttribute.Dark, 15);
    IncreaseAttackPower(30, EquipmentAttribute.Dark, 0);
});

Event(35070003, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(20, EquipmentAttribute.Dark, 10);
    IncreaseAttackPower(20, EquipmentAttribute.Dark, 0);
});

Event(35070004, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(10, EquipmentAttribute.Dark, 10);
    IncreaseAttackPower(10, EquipmentAttribute.Dark, 0);
});

Event(35071000, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(60, EquipmentAttribute.Dark, 35);
    IncreaseAttackPower(60, EquipmentAttribute.Dark, 0);
});

Event(35071001, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(60, EquipmentAttribute.Dark, 30);
    IncreaseAttackPower(60, EquipmentAttribute.Dark, 0);
});

Event(35071002, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(30, EquipmentAttribute.Dark, 15);
    IncreaseAttackPower(30, EquipmentAttribute.Dark, 0);
});

Event(35071003, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(20, EquipmentAttribute.Dark, 10);
    IncreaseAttackPower(20, EquipmentAttribute.Dark, 0);
});

Event(35071004, Default, function() {
    AllowEffectTimeExtension();
    WeaponSFX(5295, 0.1, 0, 1, 0, 0);
    CreateBullet(35071010, 35071010, BulletAttackType.None, 1);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 12, 36, 0.3, 1.2, 1, 1, 1, 1);
    ChangeDamageRate(10, EquipmentAttribute.Dark, 10);
    IncreaseAttackPower(10, EquipmentAttribute.Dark, 0);
});

Event(35090000, Default, function() {
    CreateBulletByAttribute(35090010, 35090010, AttributeType.Faith, 32, 42, 52, 62);
});

Event(35090010, Default, function() {
    EffectSFX(5297, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    AbnormalStatusChange(1, 872, 5, 1092616192, 0, 0, 0, 0);
});

Event(35090011, Default, function() {
    EffectSFX(5297, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    AbnormalStatusChange(1, 872, 5, 1097859072, 0, 0, 0, 0);
});

Event(35090012, Default, function() {
    EffectSFX(5297, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    AbnormalStatusChange(1, 872, 5, 1099431936, 0, 0, 0, 0);
});

Event(35090013, Default, function() {
    EffectSFX(5297, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    AbnormalStatusChange(1, 872, 5, 1101004800, 0, 0, 0, 0);
});

Event(35090014, Default, function() {
    EffectSFX(5297, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    AbnormalStatusChange(1, 872, 5, 1103626240, 0, 0, 0, 0);
});

Event(33320003, Default, function() {
    CreateBullet(33320004, 33320004, BulletAttackType.None, 1);
    VirtualCommand(3);
});

Event(34300022, Default, function() {
    CreateBullet(34300030, 34300030, BulletAttackType.Darkness, 1);
});

Event(32300000, Default, function() {
    SingleDamageGeneration(32080050);
    SingleDamageGeneration(32230050);
});

Event(32300005, Default, function() {
    AllowEffectTimeExtension();
    DisplayIcon(80, StartAndEndConditions.None, 0);
    EffectSFX(5666, 220, SFXDeletionTiming.EffectTimeExpired, 20, StartAndEndConditions.None, 0);
    ScaleSpEffectByAttribute(SpEffectScaleType.Duration, AttributeType.Faith, 14, 44, 0.25, 1, 1, 1, 1, 1);
    SpEffectOnDies(240, 32300010);
});

Event(32300010, Default, function() {
    CreateBullet(32300010, 32300010, BulletAttackType.None, 1);
});

Event(35300000, Default, function() {
    CreateBulletByAttribute(35300010, 35300010, AttributeType.Faith, 30, 40, 50, 60);
});

Event(35300010, Default, function() {
    EffectSFX(5691, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.Unknown60, 15, 1.1);
    ModifyStatusValue32(ChrStatusValue32.Unknown25, 15, 10);
    ModifyMovementSpeed(15, 0.8, TargetCharacter.Player);
    ModifyMovementSpeed(15, 0.5, TargetCharacter.Enemy);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Player);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Enemy);
});

Event(35300011, Default, function() {
    EffectSFX(5691, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.Unknown60, 15, 1.2);
    ModifyStatusValue32(ChrStatusValue32.Unknown25, 15, 20);
    ModifyMovementSpeed(15, 0.8, TargetCharacter.Player);
    ModifyMovementSpeed(15, 0.5, TargetCharacter.Enemy);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Player);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Enemy);
});

Event(35300012, Default, function() {
    EffectSFX(5691, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.Unknown60, 15, 1.3);
    ModifyStatusValue32(ChrStatusValue32.Unknown25, 15, 30);
    ModifyMovementSpeed(15, 0.8, TargetCharacter.Player);
    ModifyMovementSpeed(15, 0.5, TargetCharacter.Enemy);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Player);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Enemy);
});

Event(35300013, Default, function() {
    EffectSFX(5691, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.Unknown60, 15, 1.4);
    ModifyStatusValue32(ChrStatusValue32.Unknown25, 15, 40);
    ModifyMovementSpeed(15, 0.8, TargetCharacter.Player);
    ModifyMovementSpeed(15, 0.5, TargetCharacter.Enemy);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Player);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Enemy);
});

Event(35300014, Default, function() {
    EffectSFX(5691, 249, SFXDeletionTiming.EffectTimeExpired, 4, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.Unknown60, 15, 1.5);
    ModifyStatusValue32(ChrStatusValue32.Unknown25, 15, 50);
    ModifyMovementSpeed(15, 0.8, TargetCharacter.Player);
    ModifyMovementSpeed(15, 0.5, TargetCharacter.Enemy);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Player);
    ChangeRotationSpeed(15, 0.5, TargetCharacter.Enemy);
});


