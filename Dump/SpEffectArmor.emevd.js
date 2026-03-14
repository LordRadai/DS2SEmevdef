// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2_64\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(21140100, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(21210100, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(21210101, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableBackstab, 0);
});

Event(21210102, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.1);
});

Event(21210103, Default, function() {
    DisplayIcon(130, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 2);
});

Event(21230100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 2);
});

Event(21360100, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.01);
});

Event(21360101, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.015);
});

Event(21360102, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.01);
});

Event(21360103, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.015);
});

Event(21430100, Default, function() {
    DisplayIcon(170, StartAndEndConditions.None, 0);
    ModifyBulletParam(0, ShootingType.Bow, 1.05, 1, 1.05, 1.05, 1);
    ModifyBulletParam(0, ShootingType.Greatbow, 1.05, 1, 1.05, 1.05, 1);
    ModifyBulletParam(0, ShootingType.Crossbow, 1.05, 1, 1.05, 1.05, 1);
});

Event(21440102, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.CriticalJudgmentValid, 0);
});

Event(21460103, Default, function() {
    DisplayIcon(130, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 3);
});

Event(21470100, Default, function() {
    GenerateDamage(50000000, 3, -1);
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
});

Event(21470101, Default, function() {
    ModifyJumpDistance(60, 1.75, 4, 5, 0.44, 0.44, 1);
    GenerateDamage(50000000, 3, -1);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 2);
});

Event(21470102, Default, function() {
    GenerateDamage(50000000, 3, -1);
});

Event(21470103, Default, function() {
    ModifyJumpDistance(60, 1.75, 4, 5, 0.44, 0.44, 1);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 1);
    GenerateDamage(50000000, 3, -1);
});

Event(21470110, Default, function() {
    CreateBullet(50000010, 50000010, BulletAttackType.None, 1);
});

Event(21470120, Default, function() {
    EffectSFX(5425, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(3);
});

Event(21501100, Default, function() {
    ModifyStatusValue(ChrStatusValue.AttunementSlots, 0, 1);
});

Event(21502100, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.MaximumHPCorrectionValue, 0, 0.9);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMagic, 0, 1.03);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMiracle, 0, 1.03);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierSorcery, 0, 1.03);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMagic, 0, 1.03);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMiracle, 0, 1.03);
});

Event(22060100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
});

Event(22062100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
});

Event(22180100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
});

Event(22182100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
});

Event(22190101, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ChangeSpellCastingTime, 0, 0.95);
});

Event(22190102, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ChangeSpellCastingTime, 0, 0.95);
});

Event(22190103, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ChangeSpellCastingTime, 0, 0.95);
});

Event(22230102, Default, function() {
    IncreaseAttackPower(0, EquipmentAttribute.Bleed, 50);
    ChangeDamageRate(0, EquipmentAttribute.Bleed, 10);
});

Event(22310100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
});

Event(22360100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
});

Event(22370100, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.025);
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 2);
});

Event(22460100, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.025);
});

Event(22460101, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.05);
});

Event(22460102, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.1);
});

Event(22460103, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.05);
});

Event(22510100, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableHeadshot, 0);
});

Event(22510101, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableBackstab, 0);
});

Event(22512100, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableHeadshot, 0);
});

Event(22512101, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableBackstab, 0);
});

Event(22270100, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(22270101, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(22271100, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(22271101, Default, function() {
    DisplayIcon(90, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(23080101, Default, function() {
    DisplayIcon(130, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 1);
});

Event(23080102, Default, function() {
    DisplayIcon(130, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 1);
});

Event(23080103, Default, function() {
    DisplayIcon(130, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 2);
});

Event(23081100, Default, function() {
    DisplayIcon(130, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 1);
});

Event(23081101, Default, function() {
    DisplayIcon(130, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 2);
});

Event(23160100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 3);
});

Event(23171100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
});

Event(23330100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Endurance, 0, 1);
    ModifyStatusValue(ChrStatusValue.Vitality, 0, 1);
});

Event(25090100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
});

Event(25100100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Faith, 0, 2);
});

Event(25130100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 3);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 3);
    ApplySpEffectIfEventFlagSet(100730, 25130110, 0);
});

Event(25130110, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableHollowing, 0);
    ModifyStatusFlag(ChrStatusFlag.CurseImmunity, 0);
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 3);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 3);
});

Event(26260100, Default, function() {
    ModifyStatusRate(ChrStatusRate.MaximumEquipmentWeightCorrectionValue, 0, 1.03);
});

Event(26260102, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierSorcery, 0, 1.075);
});

Event(27680100, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 2);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 2);
    ModifyStatusRate(ChrStatusRate.ChangeSpellCastingTime, 0, 0.9);
});

Event(27690100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
    ModifyStatusRate(ChrStatusRate.MaximumNumberOfSpellUsesChanged, 0, 1.05);
});

Event(27700100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
    ModifyStatusRate(ChrStatusRate.MaximumNumberOfSpellUsesChanged, 0, 1.05);
});

Event(27710100, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 3);
    ModifyStatusRate(ChrStatusRate.ChangeSpellCastingTime, 0, 0.95);
});

Event(27830100, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.025);
});

Event(27830101, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.1);
});

Event(21610100, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ExtendEffectTime(1.05);
});

Event(21610101, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ExtendEffectTime(1.025);
});

Event(21610102, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ExtendEffectTime(1.1);
});

Event(21610103, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ExtendEffectTime(1.025);
});

Event(21630100, Default, function() {
    GenerateDamage(51000000, 120, -1);
    ApplySpEffectIfEventFlagSet(100730, 21630105, 0);
});

Event(21630105, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableHollowing, 0);
    ModifyStatusFlag(ChrStatusFlag.CurseImmunity, 0);
    GenerateDamage(51000000, 120, -1);
});

Event(21630110, Default, function() {
    RestoreSpellUsage(20, Fraction.RoundUp);
    EffectSFX(5466, 249, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    VirtualCommand(2);
});

Event(21640100, Default, function() {
    DisplayIcon(120, StartAndEndConditions.None, 0);
    EffectSFX(935, 249, SFXDeletionTiming.EffectTimeExpired, 40, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 1, 1069547520, 0);
    ApplySpEffectIfEventFlagSet(100730, 21640110, 0);
});

Event(21640110, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableHollowing, 0);
    ModifyStatusFlag(ChrStatusFlag.CurseImmunity, 0);
    DisplayIcon(120, StartAndEndConditions.None, 0);
    EffectSFX(935, 249, SFXDeletionTiming.EffectTimeExpired, 40, StartAndEndConditions.None, 0);
    TimeHPRecovery(1, 850, 1, 1069547520, 0);
});

Event(21650100, Default, function() {
    ModifyAttributeByCurrentValue(AttributeType.Vitality, 0, 99, -1, -1);
    ModifyAttributeByCurrentValue(AttributeType.Vigor, 0, 99, -1, -1);
    ModifyStatusValue(ChrStatusValue.Endurance, 0, 1);
    ModifyStatusValue(ChrStatusValue.Strength, 0, 1);
    ModifyStatusValue(ChrStatusValue.Dexterity, 0, 1);
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
    ApplySpEffectIfEventFlagSet(100730, 21650110, 0);
});

Event(21650110, Default, function() {
    ModifyStatusFlag(ChrStatusFlag.DisableHollowing, 0);
    ModifyStatusFlag(ChrStatusFlag.CurseImmunity, 0);
    ModifyAttributeByCurrentValue(AttributeType.Vitality, 0, 99, -1, -1);
    ModifyAttributeByCurrentValue(AttributeType.Vigor, 0, 99, -1, -1);
    ModifyStatusValue(ChrStatusValue.Endurance, 0, 1);
    ModifyStatusValue(ChrStatusValue.Strength, 0, 1);
    ModifyStatusValue(ChrStatusValue.Dexterity, 0, 1);
    ModifyStatusValue(ChrStatusValue.Intelligence, 0, 1);
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
});

Event(21660100, Default, function() {
    DisplayIcon(160, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.Unknown29, 0);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierMiracle, 0, 1.015);
    ModifyStatusRate(ChrStatusRate.SpellDamageMultiplierDarkMiracle, 0, 1.015);
});

Event(21670100, Default, function() {
    DisplayIcon(30, StartAndEndConditions.None, 0);
    VirtualCommand(0);
});

Event(21680100, Default, function() {
    ModifyStatusValue32(ChrStatusValue32.WetnessMimicry, 0, 10);
});

Event(21690103, Default, function() {
    ModifyStatusValue(ChrStatusValue.Vigor, 0, 2);
    ModifyStatusValue(ChrStatusValue.Endurance, 0, 1);
});

Event(21710100, Default, function() {
    DisplayIcon(100, StartAndEndConditions.None, 0);
    DisplayIcon(90, StartAndEndConditions.None, 0);
    ModifyStatusRate(ChrStatusRate.ObtainedSoulAmountCorrection, 0, 1.025);
    GenerateDamage(51040000, 2, -1);
});

Event(26650103, Default, function() {
    DisplayIcon(130, StartAndEndConditions.None, 0);
    EffectSFX(5446, 5, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    EffectSFX(5446, 6, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ModifyStatusFlag(ChrStatusFlag.DisableFootstepSound, 0);
    ModifyStatusValue(ChrStatusValue.FallDamageProtectionModifier, 0, 2);
});

Event(26660102, Default, function() {
    IncreaseAttackPower(0, EquipmentAttribute.Poison, 50);
});

Event(26700100, Default, function() {
    GenerateDamage(51020000, 7, -1);
});

Event(26700110, Default, function() {
    AbnormalStatusChange(1, 870, 5, 1089470464);
});

Event(26880100, Default, function() {
    ApplySpEffectOnKillEnemyGender(26880200, 26880210);
});

Event(26880101, Default, function() {
    ApplySpEffectOnKillEnemyGender(26880201, 26880211);
});

Event(26880102, Default, function() {
    ApplySpEffectOnKillEnemyGender(26880202, 26880212);
});

Event(26880103, Default, function() {
    ApplySpEffectOnKillEnemyGender(26880203, 26880213);
});

Event(26880210, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 5);
});

Event(26880211, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 20);
});

Event(26880212, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 5);
});

Event(26880213, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 5);
});

Event(26890100, Default, function() {
    ApplySpEffectOnKillEnemyGender(26890200, 26890210);
});

Event(26890101, Default, function() {
    ApplySpEffectOnKillEnemyGender(26890201, 26890211);
});

Event(26890102, Default, function() {
    ApplySpEffectOnKillEnemyGender(26890202, 26890212);
});

Event(26890103, Default, function() {
    ApplySpEffectOnKillEnemyGender(26890203, 26890213);
});

Event(26890210, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 5);
});

Event(26890211, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 20);
});

Event(26890212, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 5);
});

Event(26890213, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 5);
});

Event(26900100, Default, function() {
    ApplySpEffectOnKillEnemyGender(26900200, 26900210);
});

Event(26900101, Default, function() {
    ApplySpEffectOnKillEnemyGender(26900201, 26900211);
});

Event(26900102, Default, function() {
    ApplySpEffectOnKillEnemyGender(26900202, 26900212);
});

Event(26900103, Default, function() {
    ApplySpEffectOnKillEnemyGender(26900203, 26900213);
});

Event(26900210, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 5);
});

Event(26900211, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 20);
});

Event(26900212, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 5);
});

Event(26900213, Default, function() {
    DisplayIcon(110, StartAndEndConditions.None, 0);
    ModifyStatusValue(ChrStatusValue.HPOnKill, 0, 5);
});

Event(22480100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Faith, 0, 2);
    ModifyAttributeByCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

Event(22480101, Default, function() {
    ModifyStatusValue(ChrStatusValue.Adaptability, 0, 2);
    ModifyAttributeByCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

Event(22480102, Default, function() {
    ModifyStatusValue(ChrStatusValue.Adaptability, 0, 2);
    ModifyAttributeByCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

Event(22480103, Default, function() {
    ModifyStatusValue(ChrStatusValue.Adaptability, 0, 2);
    ModifyAttributeByCurrentValue(AttributeType.Intelligence, 0, 99, -1, -1);
});

Event(23070100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Vitality, 0, 2);
});

Event(25040100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
});

Event(25060102, Default, function() {
    ModifyStatusValue(ChrStatusValue.Faith, 0, 1);
});

Event(27510100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Dexterity, 0, 2);
    ModifyStatusValue(ChrStatusValue.Endurance, 0, 1);
});

Event(27550100, Default, function() {
    ModifyStatusValue(ChrStatusValue.Adaptability, 0, 2);
});


