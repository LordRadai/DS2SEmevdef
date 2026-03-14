// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2_64\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(60010000, Default, function() {
    EffectCorrectionSettings(1, 2.8);
    TimeHPRecovery(1, 850, 500, 1093769626, 1);
});

Event(60020000, Default, function() {
    EffectCorrectionSettings(1, 2.8);
    TimeHPRecovery(1, 850, 850, 1100375654, 1);
});

Event(60030000, Default, function() {
    EffectCorrectionSettings(1, 2.8);
    TimeHPRecovery(1, 850, 1300, 1105618534, 1);
});

Event(60035000, Default, function() {
    EffectSFX(893, 249, SFXDeletionTiming.EffectTimeExpired, 6, StartAndEndConditions.None, 0);
    EffectCorrectionSettings(1, 2);
    TimeHPRecovery(1, 850, 2000, 1110546842, 0);
});

Event(60040000, Default, function() {
    RestoreSpellUsage(35, Fraction.RoundUp);
});

Event(60050000, Default, function() {
    RestoreSpellUsage(50, Fraction.RoundUp);
});

Event(60060000, Default, function() {
    RestoreSpellUsage(70, Fraction.RoundUp);
});

Event(60070000, Default, function() {
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    EffectSFX(862, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 3, 100);
});

Event(60090000, Default, function() {
    EffectSFX(873, 9, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 850, 1082549862, 1);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 3, 100);
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 3, 100);
});

Event(60100000, Default, function() {
    EffectSFX(874, 9, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 1500, 1089470464, 1);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 3, 100);
    AbnormalStatusChange(1, 871, 0);
    AbnormalStatusChange(1, 871, 8);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 3, 100);
});

Event(60105000, Default, function() {
    TimeHPRecovery(1, 851, 1120403456, 1092616192, 1);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueBleeding, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePetrification, 3, 100);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCurse, 3, 100);
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

Event(60110000, Default, function() {
    TimeHPRecovery(1, 850, 850, 1100375654, 1);
    RestoreSpellUsage(50, Fraction.RoundUp);
});

Event(60120000, Default, function() {
    TimeHPRecovery(1, 850, 1500, 1107637043, 1);
    RestoreSpellUsage(70, Fraction.RoundUp);
});

Event(60151000, Default, function() {
    RestoreHumanity(true);
});

Event(60155000, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 550, 1072064102, 1);
});

Event(60155001, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 600, 1073741824, 1);
});

Event(60155002, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 650, 1074161254, 1);
});

Event(60155003, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 700, 1075000115, 1);
});

Event(60155004, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 750, 1075838976, 1);
});

Event(60155005, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 800, 1076258406, 1);
});

Event(60155006, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 800, 1076258406, 1);
});

Event(60155100, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 600, 1073741824, 1);
});

Event(60155101, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 650, 1074161254, 1);
});

Event(60155102, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 700, 1075000115, 1);
});

Event(60155103, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 750, 1075838976, 1);
});

Event(60155104, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 800, 1076258406, 1);
});

Event(60155105, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 850, 1077097267, 1);
});

Event(60155106, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 850, 1077097267, 1);
});

Event(60155010, Default, function() {
    EffectCorrectionSettings(1, 2.5);
    TimeHPRecovery(1, 850, 700, 1066192077, 1);
});

Event(60155020, Default, function() {
    TimeHPRecovery(1, 851, 1097859072, 1092616192, 1);
});

Event(60155030, Default, function() {
    TimeHPRecovery(1, 851, 1106247680, 1092616192, 1);
});

Event(60160000, Default, function() {
    EffectSFX(847, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.Magic, 15);
});

Event(60170000, Default, function() {
    EffectSFX(848, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.Lightning, 15);
});

Event(60180000, Default, function() {
    EffectSFX(849, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.Fire, 15);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueCombustion, 90, 1.2);
});

Event(60190000, Default, function() {
    EffectSFX(850, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.Dark, 15);
});

Event(60200000, Default, function() {
    EffectSFX(851, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.Poison, 20);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePoison, 90, 1.2);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueViolent, 90, 1.2);
});

Event(60210000, Default, function() {
    EffectSFX(852, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.Bleed, 20);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValueBleeding, 90, 1.2);
});

Event(60220000, Default, function() {
    EffectSFX(853, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.WeaponDestruction, 20);
});

Event(60230000, Default, function() {
    EffectSFX(854, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    IncreaseDefensePower(90, EquipmentAttribute.Petrify, 20);
    ModifyStatusRate(ChrStatusRate.StatusAbnormalityRecoverySpeedCorrectionValuePetrification, 90, 1.2);
});

Event(60240000, Default, function() {
    WeaponSFX(901, 0.1, 0, 1, 0, 0);
    EffectSFX(955, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ChangeDamageRate(90, EquipmentAttribute.Magic, 20);
    IncreaseAttackPower(90, EquipmentAttribute.Magic, 40);
});

Event(60250000, Default, function() {
    WeaponSFX(909, 0.1, 0, 1, 0, 0);
    EffectSFX(956, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ChangeDamageRate(90, EquipmentAttribute.Lightning, 20);
    IncreaseAttackPower(90, EquipmentAttribute.Lightning, 40);
});

Event(60260000, Default, function() {
    WeaponSFX(903, 0.1, 0, 1, 0, 0);
    EffectSFX(957, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.FlameWeapon, 90);
    ChangeDamageRate(90, EquipmentAttribute.Fire, 20);
    IncreaseAttackPower(90, EquipmentAttribute.Fire, 40);
});

Event(60270000, Default, function() {
    WeaponSFX(905, 0.1, 0, 1, 0, 0);
    EffectSFX(958, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ChangeDamageRate(90, EquipmentAttribute.Dark, 20);
    IncreaseAttackPower(90, EquipmentAttribute.Dark, 40);
});

Event(60280000, Default, function() {
    WeaponSFX(907, 0.1, 0, 1, 0, 0);
    EffectSFX(959, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ChangeDamageRate(90, EquipmentAttribute.Poison, 50);
    IncreaseAttackPower(90, EquipmentAttribute.Poison, 100);
});

Event(60290000, Default, function() {
    WeaponSFX(921, 0.1, 0, 1, 0, 0);
    EffectSFX(960, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ChangeDamageRate(90, EquipmentAttribute.Bleed, 50);
    IncreaseAttackPower(90, EquipmentAttribute.Bleed, 100);
});

Event(60310000, Default, function() {
    EffectCorrectionSettings(1, 0.75);
    EffectSFX(865, 249, SFXDeletionTiming.EffectTimeExpired, 50, StartAndEndConditions.None, 0);
    ModifyStaminaRecoverySpeed(60, 1.15);
});

Event(60320000, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    EffectSFX(868, 9, SFXDeletionTiming.EffectTimeExpired, 60, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.DropItemMagnificationCorrectionExtraLargeEnabled, 300);
    ModifyStatusRate(ChrStatusRate.DropItemMagnificationCorrectionExtraLarge, 300, 1);
});

Event(60350000, Default, function() {
    WarpPlayer(WarpType.Bonfire, -1, -1);
    ModifyStatusFlag(ChrStatusFlag.DamageDisabled, 5);
});

Event(60355000, Default, function() {
    WarpPlayer(WarpType.Bonfire, -1, -1);
    ModifyStatusFlag(ChrStatusFlag.DamageDisabled, 5);
});

Event(60360000, Default, function() {
    WarpPlayer(WarpType.Bonfire, -1, -1);
    ModifyStatusFlag(ChrStatusFlag.DamageDisabled, 5);
    SoulChange(1, 931, 1, 1120403456);
});

Event(60370000, Default, function() {
    ApplyRandomSpEffect(60370001, 60370002, 60370003, 60370004, 60370005);
});

Event(60370001, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 0, 878);
});

Event(60370002, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 1, 878);
});

Event(60370003, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 2, 878);
});

Event(60370004, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 3, 878);
});

Event(60370005, Default, function() {
    InfiniteEffectTime();
    ApplyChameleonDisguise(0, 4, 878);
});

Event(60375000, Default, function() {
    UnknownCommand100020(60375001);
});

Event(60375001, Default, function() {
    InfiniteEffectTime();
    UnknownCommand100021(0, 0, 878);
});

Event(60405000, Default, function() {
    FullBodySFX(500010, SFXDeletionTiming.EffectTimeExpired);
    VirtualCommand(1);
    CreateBullet(60405000, 60405000, BulletAttackType.None, 1);
});

Event(60405001, Default, function() {
    EquipmentChange(21330100, 0, 0, 0);
});

Event(60405010, Default, function() {
    CreateBullet(60405030, 60405030, BulletAttackType.None, 1);
    CreateBullet(60405010, 60405010, BulletAttackType.None, 1);
    CreateBullet(60405011, 60405011, BulletAttackType.None, 1);
});

Event(60405020, Default, function() {
    CreateBullet(60405030, 60405030, BulletAttackType.None, 1);
    CreateBullet(60405020, 60405020, BulletAttackType.None, 1);
    CreateBullet(60405011, 60405011, BulletAttackType.None, 1);
});

Event(60405030, Default, function() {
    FullBodySFX(500020, SFXDeletionTiming.EffectTimeExpired);
    VirtualCommand(1);
});

Event(60406000, Default, function() {
    FullBodySFX(500110, SFXDeletionTiming.EffectTimeExpired);
    VirtualCommand(1);
    CreateBullet(60406000, 60406000, BulletAttackType.None, 1);
});

Event(60406001, Default, function() {
    EquipmentChange(21330100, 21330101, 21330102, 21330103);
});

Event(60406010, Default, function() {
    CreateBullet(60406010, 60406010, BulletAttackType.None, 1);
    CreateBullet(60406011, 60406011, BulletAttackType.None, 1);
});

Event(60406020, Default, function() {
    EffectSFX(954, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.DamageCorrectionWhenAttacking, 5.5, 1.15);
});

Event(60406030, Default, function() {
    FullBodySFX(500120, SFXDeletionTiming.EffectTimeExpired);
    VirtualCommand(1);
});

Event(60410000, Default, function() {
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquippedWeapons, 0, 30);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquipmentArmor, 0, 50);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquipmentRings, 0, 20);
});

Event(60430000, Default, function() {
    CreateBullet(60430000, 60430000, BulletAttackType.None, 1);
});

Event(60450000, Default, function() {
    CreatePrismStone(26, 1, 1.1);
});

Event(60470000, Default, function() {
    CreateBullet(60470000, 60470000, BulletAttackType.None, 1);
});

Event(60480000, Default, function() {
    CreateBullet(60480000, 60480000, BulletAttackType.None, 1);
});

Event(60490000, Default, function() {
    CreateBullet(60490000, 60490000, BulletAttackType.None, 1);
});

Event(60500000, Default, function() {
    CreateBullet(60500000, 60500000, BulletAttackType.None, 1);
});

Event(60510000, Default, function() {
    AbnormalStatusChange(1, 872, 8, 1092616192, 0, 0, 650, 249);
});

Event(60530000, Default, function() {
    CreateBullet(60530000, 60530000, BulletAttackType.None, 1);
});

Event(60531000, Default, function() {
    CreateBullet(60531000, 60531000, BulletAttackType.None, 1);
});

Event(60531010, Default, function() {
    EffectSFX(826, 249, SFXDeletionTiming.EffectTimeExpired, 2, StartAndEndConditions.None, 0);
    ModifyEstusUsage(EstusModificationType.ReduceTo0, 30);
});

Event(60540000, Default, function() {
    CreateBullet(60540000, 60540000, BulletAttackType.PhysicsSkill, 0.26);
});

Event(60550000, Default, function() {
    CreateBullet(60550000, 60550000, BulletAttackType.MagicPower, 0.65);
});

Event(60560000, Default, function() {
    CreateBullet(60560000, 60560000, BulletAttackType.Thunder, 0.65);
});

Event(60570000, Default, function() {
    CreateBullet(60570000, 60570000, BulletAttackType.Flame, 0.65);
});

Event(60575000, Default, function() {
    CreateBullet(60575000, 60575000, BulletAttackType.Flame, 0.75);
});

Event(60580000, Default, function() {
    CreateBullet(60580000, 60580000, BulletAttackType.Darkness, 0.65);
});

Event(60590000, Default, function() {
    CreateBullet(60590000, 60590000, BulletAttackType.PhysicsSkill, 0.26);
});

Event(60595000, Default, function() {
    CreateBullet(60595000, 60595000, BulletAttackType.None, 1);
    CreateBullet(60595010, 60595010, BulletAttackType.Poison, 0.65);
});

Event(60600000, Default, function() {
    CreateBullet(60600000, 60600000, BulletAttackType.PhysicsSkill, 0.26);
});

Event(60610000, Default, function() {
    CreateBullet(60610000, 60610000, BulletAttackType.None, 1);
});

Event(60610010, Default, function() {
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeRightHandCurrentWeapon, 0, -5);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeLeftHandCurrentWeapon, 0, -5);
    ModifyStatusValue32(ChrStatusValue32.EquipmentDurabilityValueChangeAllEquipmentArmor, 0, -10);
});

Event(60620000, Default, function() {
    CreateBullet(60620000, 60620000, BulletAttackType.Thunder, 1);
});

Event(60625000, Default, function() {
    SoulChange(1, 930, 0, 50);
});

Event(60630000, Default, function() {
    SoulChange(1, 930, 0, 200);
});

Event(60640000, Default, function() {
    SoulChange(1, 930, 0, 400);
});

Event(60650000, Default, function() {
    SoulChange(1, 930, 0, 800);
});

Event(60660000, Default, function() {
    SoulChange(1, 930, 0, 1000);
});

Event(60670000, Default, function() {
    SoulChange(1, 930, 0, 2000);
});

Event(60680000, Default, function() {
    SoulChange(1, 930, 0, 3000);
});

Event(60690000, Default, function() {
    SoulChange(1, 930, 0, 5000);
});

Event(60700000, Default, function() {
    SoulChange(1, 930, 0, 8000);
});

Event(60710000, Default, function() {
    SoulChange(1, 930, 0, 10000);
});

Event(60720000, Default, function() {
    SoulChange(1, 930, 0, 20000);
});

Event(62000000, Default, function() {
    InvasionCooldownReset();
});

Event(62020000, Default, function() {
    RequestPenaltyReset();
});

Event(62030000, Default, function() {
    CreateSummonSign(SignType.WhiteSignSoapstone);
});

Event(62040000, Default, function() {
    CreateSummonSign(SignType.SmallWhiteSignSoapstone);
});

Event(62045000, Default, function() {
    CreateSummonSign(SignType.RedSignSoapstone);
});

Event(62050000, Default, function() {
    IntrusionRequest(IntrusionType.RevengeBlueSpirit);
});

Event(62060000, Default, function() {
    IntrusionRequest(IntrusionType.DarkSpirit);
});

Event(62070000, Default, function() {
    CreateSummonSign(SignType.DragonEye);
});

Event(62100000, Default, function() {
    IssueHostDamageDuringCooperativeMultiplayer(62100010);
});

Event(62100010, Default, function() {
    EffectSFX(1128, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 350, 1084227584, 1);
});

Event(62110000, Default, function() {
    InvasionCooldownReset();
});

Event(62160000, Default, function() {
    RequestMultiplayerTermination();
});

Event(62170000, Default, function() {
    EffectSFX(1124, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    VirtualCommand(3600);
});

Event(62170010, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.EnemyHostility, 3600);
});

Event(64000000, Default, function() {
    SoulChange(1, 930, 0, 8000);
});

Event(64010000, Default, function() {
    SoulChange(1, 930, 0, 6000);
});

Event(64020000, Default, function() {
    SoulChange(1, 930, 0, 6000);
});

Event(64030000, Default, function() {
    SoulChange(1, 930, 0, 10000);
});

Event(64040000, Default, function() {
    SoulChange(1, 930, 0, 6000);
});

Event(64050000, Default, function() {
    SoulChange(1, 930, 0, 6000);
});

Event(64060000, Default, function() {
    SoulChange(1, 930, 0, 25000);
});

Event(64070000, Default, function() {
    SoulChange(1, 930, 0, 8000);
});

Event(64080000, Default, function() {
    SoulChange(1, 930, 0, 6000);
});

Event(64090000, Default, function() {
    SoulChange(1, 930, 0, 6000);
});

Event(64100000, Default, function() {
    SoulChange(1, 930, 0, 10000);
});

Event(64110000, Default, function() {
    SoulChange(1, 930, 0, 8000);
});

Event(64120000, Default, function() {
    SoulChange(1, 930, 0, 25000);
});

Event(64130000, Default, function() {
    SoulChange(1, 930, 0, 6000);
});

Event(64140000, Default, function() {
    SoulChange(1, 930, 0, 25000);
});

Event(64150000, Default, function() {
    SoulChange(1, 930, 0, 8000);
});

Event(64160000, Default, function() {
    SoulChange(1, 930, 0, 6000);
});

Event(64170000, Default, function() {
    SoulChange(1, 930, 0, 25000);
});

Event(64180000, Default, function() {
    SoulChange(1, 930, 0, 18000);
});

Event(64190000, Default, function() {
    SoulChange(1, 930, 0, 12000);
});

Event(64200000, Default, function() {
    SoulChange(1, 930, 0, 15000);
});

Event(64210000, Default, function() {
    SoulChange(1, 930, 0, 50000);
});

Event(64220000, Default, function() {
    SoulChange(1, 930, 0, 14000);
});

Event(64230000, Default, function() {
    SoulChange(1, 930, 0, 75000);
});

Event(64240000, Default, function() {
    SoulChange(1, 930, 0, 25000);
});

Event(64250000, Default, function() {
    SoulChange(1, 930, 0, 30000);
});

Event(64260000, Default, function() {
    SoulChange(1, 930, 0, 16000);
});

Event(64270000, Default, function() {
    SoulChange(1, 930, 0, 16000);
});

Event(64280000, Default, function() {
    SoulChange(1, 930, 0, 22000);
});

Event(64290000, Default, function() {
    SoulChange(1, 930, 0, 6000);
});

Event(64300000, Default, function() {
    SoulChange(1, 930, 0, 60000);
});

Event(64310000, Default, function() {
    SoulChange(1, 930, 0, 75000);
});

Event(64320000, Default, function() {
    SoulChange(1, 930, 0, 60000);
});

Event(64330000, Default, function() {
    SoulChange(1, 930, 0, 60000);
});

Event(64530000, Default, function() {
    SoulChange(1, 930, 0, 30000);
});

Event(64540000, Default, function() {
    SoulChange(1, 930, 0, 30000);
});

Event(64550000, Default, function() {
    SoulChange(1, 930, 0, 30000);
});

Event(64580000, Default, function() {
    SoulChange(1, 930, 0, 30000);
});

Event(64500000, Default, function() {
    SoulChange(1, 930, 0, 16000);
});

Event(64510000, Default, function() {
    SoulChange(1, 930, 0, 16000);
});

Event(64520000, Default, function() {
    SoulChange(1, 930, 0, 16000);
});

Event(64560000, Default, function() {
    SoulChange(1, 930, 0, 16000);
});

Event(64590000, Default, function() {
    SoulChange(1, 930, 0, 16000);
});

Event(64600000, Default, function() {
    SoulChange(1, 930, 0, 0);
});

Event(64610000, Default, function() {
    SoulChange(1, 930, 0, 16000);
});

Event(60036000, Default, function() {
    EffectSFX(972, 249, SFXDeletionTiming.EffectTimeExpired, 25, StartAndEndConditions.None, 0);
    EffectCorrectionSettings(0.7, 1);
    TimeHPRecovery(1, 850, 1000, 1140457472, 0);
});

Event(60235000, Default, function() {
    EffectSFX(962, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.Strength, 45, 5);
});

Event(60236000, Default, function() {
    EffectSFX(964, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.Dexterity, 45, 5);
});

Event(60237000, Default, function() {
    EffectSFX(966, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.Intelligence, 45, 5);
});

Event(60238000, Default, function() {
    EffectSFX(968, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.Faith, 45, 5);
});

Event(60239000, Default, function() {
    EffectSFX(969, 20, SFXDeletionTiming.Invalid, 0, StartAndEndConditions.None, 0);
    EffectSFX(970, 249, SFXDeletionTiming.EffectTimeExpired, 7, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.EnemyDamage, 120, 1.2);
    ModifyStatusRate(ChrStatusRate.EnemyDamageReduction, 120, 0.8);
});

Event(65240000, Default, function() {
    WeaponSFX(901, 0.1, 0, 1, 0, 0);
    EffectSFX(955, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseAttackUnknown(90, EquipmentAttribute.Magic, 100);
});

Event(65250000, Default, function() {
    WeaponSFX(909, 0.1, 0, 1, 0, 0);
    EffectSFX(956, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseAttackUnknown(90, EquipmentAttribute.Lightning, 100);
});

Event(65260000, Default, function() {
    WeaponSFX(903, 0.1, 0, 1, 0, 0);
    EffectSFX(957, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.FlameWeapon, 90);
    IncreaseAttackUnknown(90, EquipmentAttribute.Fire, 100);
});

Event(65270000, Default, function() {
    WeaponSFX(905, 0.1, 0, 1, 0, 0);
    EffectSFX(958, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseAttackUnknown(90, EquipmentAttribute.Dark, 100);
});

Event(65280000, Default, function() {
    WeaponSFX(907, 0.1, 0, 1, 0, 0);
    EffectSFX(959, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseAttackUnknown(90, EquipmentAttribute.Poison, 40);
});

Event(65290000, Default, function() {
    WeaponSFX(921, 0.1, 0, 1, 0, 0);
    EffectSFX(960, 20, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    IncreaseAttackUnknown(90, EquipmentAttribute.Bleed, 40);
});


