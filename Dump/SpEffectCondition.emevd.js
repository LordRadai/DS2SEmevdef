// ==EMEVD==
// @docs    ds2scholar-common.emedf.json
// @compress    None
// @game    Bloodborne
// @string    "N:\\FRPG2\\Tool\\excel\\emevd\\SpEffectMustSub.emevd\u0000"
// @linked    [0]
// @version    3.6.2
// ==/EMEVD==

Event(600, Default, function() {
    HealFlatOverTime(0, 0, true);
    HealPercentageAmountOverTime(0, 0, true);
    DamageValuePercentage(0, 0, true);
    EffectSFX(0, 0, SFXDeletionTiming.EffectTimeExpired, 0, StartAndEndConditions.None, 0);
    ApplyStatusEffect(StatusEffectType.Poison, 0, 0, 0, 0, 0);
    ApplyStatusEffect(StatusEffectType.Toxic, 0, 0, 0, 0, 0);
});

Event(601, Default, function() {
    SpecialEffectIdSpecification(96030010);
});

Event(748, Default, function() {
    ApplySpEffectByIntelligence(0, 0, 0, 0, 0);
    HomingSoulMass(0, 0, 0, 0);
});

Event(749, Default, function() {
    CharacterArmorAttributeValueChange(0, EquipmentAttribute.Magic, 0);
});

Event(750, Default, function() {
    ChangeDamageRate(0, EquipmentAttribute.Magic, 0);
});

Event(751, Default, function() {
    InvasionCooldownReset();
});

Event(752, Default, function() {
    CreateSummonSign(SignType.WhiteSignSoapstone);
});

Event(753, Default, function() {
    IntrusionRequest(IntrusionType.DarkSpirit);
});

Event(754, Default, function() {
    WarpPlayer(WarpType.Bonfire, -1, -1);
});

Event(755, Default, function() {
    RestoreHumanity(true);
});

Event(756, Default, function() {
    SetDeathPermission(false);
});

Event(757, Default, function() {
    ModifyMovementSpeed(0, 1, TargetCharacter.Player);
});

Event(758, Default, function() {
    ChangeRotationSpeed(0, 1, TargetCharacter.Player);
});

Event(759, Default, function() {
    SpellParrySetting(0, SpellParryType.MagicPower, 0);
});

Event(760, Default, function() {
    PreventStatusEffect(StatusEffectType.Poison, 0);
});

Event(761, Default, function() {
    ApplyStatusEffect(StatusEffectType.Poison, 0, 0, 0, 0, 0);
});

Event(762, Default, function() {
    PreventStatusEffect(StatusEffectType.Bleed, 0);
});

Event(763, Default, function() {
    ApplyStatusEffect(StatusEffectType.Bleed, 0, 0, 0, 0, 0);
});

Event(764, Default, function() {
    PreventStatusEffect(StatusEffectType.WeaponDestruction, 0);
});

Event(765, Default, function() {
    ApplyStatusEffect(StatusEffectType.WeaponDestruction, 0, 0, 0, 0, 0);
});

Event(766, Default, function() {
    PreventStatusEffect(StatusEffectType.Curse, 0);
});

Event(767, Default, function() {
    ApplyStatusEffect(StatusEffectType.Curse, 0, 0, 0, 0, 0);
});

Event(768, Default, function() {
    PreventStatusEffect(StatusEffectType.Combustion, 0);
});

Event(769, Default, function() {
    ApplyStatusEffect(StatusEffectType.Combustion, 0, 0, 0, 0, 0);
});

Event(770, Default, function() {
    PreventStatusEffect(StatusEffectType.SpellSealing, 0);
});

Event(771, Default, function() {
    ApplyStatusEffect(StatusEffectType.SpellSealing, 0, 0, 0, 0, 0);
});

Event(772, Default, function() {
    PreventStatusEffect(StatusEffectType.WaterWet, 0);
});

Event(773, Default, function() {
    ApplyStatusEffect(StatusEffectType.WaterWet, 0, 0, 0, 0, 0);
});

Event(774, Default, function() {
    PreventStatusEffect(StatusEffectType.BloodSoaked, 0);
});

Event(775, Default, function() {
    ApplyStatusEffect(StatusEffectType.BloodSoaked, 0, 0, 0, 0, 0);
});

Event(776, Default, function() {
    PreventStatusEffect(StatusEffectType.Toxic, 0);
});

Event(777, Default, function() {
    ApplyStatusEffect(StatusEffectType.Toxic, 0, 0, 0, 0, 0);
});

Event(778, Default, function() {
    PreventStatusEffect(StatusEffectType.Oily, 0);
});

Event(779, Default, function() {
    ApplyStatusEffect(StatusEffectType.Oily, 0, 0, 0, 0, 0);
});

Event(780, Default, function() {
    PreventStatusEffect(StatusEffectType.Petrification, 0);
});

Event(781, Default, function() {
    ApplyStatusEffect(StatusEffectType.Petrification, 0, 0, 0, 0, 0);
});

Event(782, Default, function() {
    PreventStatusEffect(StatusEffectType.PoisonWet, 0);
});

Event(783, Default, function() {
    ApplyStatusEffect(StatusEffectType.PoisonWet, 0, 0, 0, 0, 0);
});

Event(784, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown12, 0);
});

Event(785, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown12, 0, 0, 0, 0, 0);
});

Event(786, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown13, 0);
});

Event(787, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown13, 0, 0, 0, 0, 0);
});

Event(788, Default, function() {
    PreventStatusEffect(StatusEffectType.Unknown14, 0);
});

Event(789, Default, function() {
    ApplyStatusEffect(StatusEffectType.Unknown14, 0, 0, 0, 0, 0);
});


