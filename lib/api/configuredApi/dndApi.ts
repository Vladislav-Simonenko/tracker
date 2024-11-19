import { trackerSprilApi as api } from "../emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    usersControllerCreate: build.mutation<
      UsersControllerCreateApiResponse,
      UsersControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users`,
        method: "POST",
        body: queryArg.createUserDto,
      }),
    }),
    usersControllerFindAll: build.query<
      UsersControllerFindAllApiResponse,
      UsersControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/users` }),
    }),
    usersControllerFindOne: build.query<
      UsersControllerFindOneApiResponse,
      UsersControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/users/${queryArg.id}` }),
    }),
    usersControllerUpdate: build.mutation<
      UsersControllerUpdateApiResponse,
      UsersControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateUserDto,
      }),
    }),
    usersControllerRemove: build.mutation<
      UsersControllerRemoveApiResponse,
      UsersControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    usersControllerUpdateRole: build.mutation<
      UsersControllerUpdateRoleApiResponse,
      UsersControllerUpdateRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/users/${queryArg.id}/switch-role`,
        method: "PATCH",
        body: queryArg.switchRoleDto,
      }),
    }),
    authControllerRegister: build.mutation<
      AuthControllerRegisterApiResponse,
      AuthControllerRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/register`,
        method: "POST",
        body: queryArg.registerUserDto,
      }),
    }),
    authControllerSendEmail: build.mutation<
      AuthControllerSendEmailApiResponse,
      AuthControllerSendEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/send-email`,
        method: "POST",
        body: queryArg.sendEmailDto,
      }),
    }),
    authControllerVerifyEmail: build.query<
      AuthControllerVerifyEmailApiResponse,
      AuthControllerVerifyEmailApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/verify`,
        params: { token: queryArg.token },
      }),
    }),
    authControllerLogin: build.mutation<
      AuthControllerLoginApiResponse,
      AuthControllerLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/login`,
        method: "POST",
        body: queryArg.loginUserDto,
      }),
    }),
    authControllerForgotPassword: build.mutation<
      AuthControllerForgotPasswordApiResponse,
      AuthControllerForgotPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/forgot-password`,
        method: "POST",
        body: queryArg.forgotPasswordDto,
      }),
    }),
    authControllerResetPassword: build.mutation<
      AuthControllerResetPasswordApiResponse,
      AuthControllerResetPasswordApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/reset-password`,
        method: "POST",
        body: queryArg.resetPasswordDto,
      }),
    }),
    authControllerRefreshToken: build.mutation<
      AuthControllerRefreshTokenApiResponse,
      AuthControllerRefreshTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/api/auth/refresh-token`,
        method: "POST",
        body: queryArg.refreshTokenDto,
      }),
    }),
    authControllerLogout: build.mutation<
      AuthControllerLogoutApiResponse,
      AuthControllerLogoutApiArg
    >({
      query: () => ({ url: `/api/auth/logout`, method: "POST" }),
    }),
    heroControllerGetAllHeroes: build.query<
      HeroControllerGetAllHeroesApiResponse,
      HeroControllerGetAllHeroesApiArg
    >({
      query: () => ({ url: `/api/heroes` }),
    }),
    heroControllerCreateHero: build.mutation<
      HeroControllerCreateHeroApiResponse,
      HeroControllerCreateHeroApiArg
    >({
      query: (queryArg) => ({
        url: `/api/heroes`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    heroControllerGetHeroById: build.query<
      HeroControllerGetHeroByIdApiResponse,
      HeroControllerGetHeroByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/heroes/${queryArg.id}` }),
    }),
    heroControllerUpdateHero: build.mutation<
      HeroControllerUpdateHeroApiResponse,
      HeroControllerUpdateHeroApiArg
    >({
      query: (queryArg) => ({
        url: `/api/heroes/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    heroControllerDeleteHero: build.mutation<
      HeroControllerDeleteHeroApiResponse,
      HeroControllerDeleteHeroApiArg
    >({
      query: (queryArg) => ({
        url: `/api/heroes/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    raceControllerGetAllRaces: build.query<
      RaceControllerGetAllRacesApiResponse,
      RaceControllerGetAllRacesApiArg
    >({
      query: () => ({ url: `/api/races` }),
    }),
    raceControllerCreaterace: build.mutation<
      RaceControllerCreateraceApiResponse,
      RaceControllerCreateraceApiArg
    >({
      query: (queryArg) => ({
        url: `/api/races`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    raceControllerGetRaceById: build.query<
      RaceControllerGetRaceByIdApiResponse,
      RaceControllerGetRaceByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/races/${queryArg.id}` }),
    }),
    raceControllerUpdateRace: build.mutation<
      RaceControllerUpdateRaceApiResponse,
      RaceControllerUpdateRaceApiArg
    >({
      query: (queryArg) => ({
        url: `/api/races/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    raceControllerDeleteRace: build.mutation<
      RaceControllerDeleteRaceApiResponse,
      RaceControllerDeleteRaceApiArg
    >({
      query: (queryArg) => ({
        url: `/api/races/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    traitControllerGetAllTraits: build.query<
      TraitControllerGetAllTraitsApiResponse,
      TraitControllerGetAllTraitsApiArg
    >({
      query: () => ({ url: `/api/traits` }),
    }),
    traitControllerCreateTrait: build.mutation<
      TraitControllerCreateTraitApiResponse,
      TraitControllerCreateTraitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/traits`,
        method: "POST",
        body: queryArg.createTraitDto,
      }),
    }),
    traitControllerGetTraitById: build.query<
      TraitControllerGetTraitByIdApiResponse,
      TraitControllerGetTraitByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/traits/${queryArg.id}` }),
    }),
    traitControllerUpdateTrait: build.mutation<
      TraitControllerUpdateTraitApiResponse,
      TraitControllerUpdateTraitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/traits/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateTraitDto,
      }),
    }),
    traitControllerDeleteTrait: build.mutation<
      TraitControllerDeleteTraitApiResponse,
      TraitControllerDeleteTraitApiArg
    >({
      query: (queryArg) => ({
        url: `/api/traits/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    featureControllerGetAllFeatures: build.query<
      FeatureControllerGetAllFeaturesApiResponse,
      FeatureControllerGetAllFeaturesApiArg
    >({
      query: () => ({ url: `/api/features` }),
    }),
    featureControllerCreateFeature: build.mutation<
      FeatureControllerCreateFeatureApiResponse,
      FeatureControllerCreateFeatureApiArg
    >({
      query: (queryArg) => ({
        url: `/api/features`,
        method: "POST",
        body: queryArg.createFeatureDto,
      }),
    }),
    featureControllerGetFeatureById: build.query<
      FeatureControllerGetFeatureByIdApiResponse,
      FeatureControllerGetFeatureByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/features/${queryArg.id}` }),
    }),
    featureControllerUpdateFeature: build.mutation<
      FeatureControllerUpdateFeatureApiResponse,
      FeatureControllerUpdateFeatureApiArg
    >({
      query: (queryArg) => ({
        url: `/api/features/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateFeatureDto,
      }),
    }),
    featureControllerDeleteFeature: build.mutation<
      FeatureControllerDeleteFeatureApiResponse,
      FeatureControllerDeleteFeatureApiArg
    >({
      query: (queryArg) => ({
        url: `/api/features/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    languageControllerGetAllLanguages: build.query<
      LanguageControllerGetAllLanguagesApiResponse,
      LanguageControllerGetAllLanguagesApiArg
    >({
      query: () => ({ url: `/api/languages` }),
    }),
    languageControllerCreateLanguage: build.mutation<
      LanguageControllerCreateLanguageApiResponse,
      LanguageControllerCreateLanguageApiArg
    >({
      query: (queryArg) => ({
        url: `/api/languages`,
        method: "POST",
        body: queryArg.createLanguageDto,
      }),
    }),
    languageControllerGetLanguageById: build.query<
      LanguageControllerGetLanguageByIdApiResponse,
      LanguageControllerGetLanguageByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/languages/${queryArg.id}` }),
    }),
    languageControllerUpdateLanguage: build.mutation<
      LanguageControllerUpdateLanguageApiResponse,
      LanguageControllerUpdateLanguageApiArg
    >({
      query: (queryArg) => ({
        url: `/api/languages/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateLanguageDto,
      }),
    }),
    languageControllerDeleteLanguage: build.mutation<
      LanguageControllerDeleteLanguageApiResponse,
      LanguageControllerDeleteLanguageApiArg
    >({
      query: (queryArg) => ({
        url: `/api/languages/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    toolControllerGetAllTools: build.query<
      ToolControllerGetAllToolsApiResponse,
      ToolControllerGetAllToolsApiArg
    >({
      query: () => ({ url: `/api/tools` }),
    }),
    toolControllerCreateTool: build.mutation<
      ToolControllerCreateToolApiResponse,
      ToolControllerCreateToolApiArg
    >({
      query: (queryArg) => ({
        url: `/api/tools`,
        method: "POST",
        body: queryArg.createToolDto,
      }),
    }),
    toolControllerGetToolById: build.query<
      ToolControllerGetToolByIdApiResponse,
      ToolControllerGetToolByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/tools/${queryArg.id}` }),
    }),
    toolControllerUpdateTool: build.mutation<
      ToolControllerUpdateToolApiResponse,
      ToolControllerUpdateToolApiArg
    >({
      query: (queryArg) => ({
        url: `/api/tools/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateToolDto,
      }),
    }),
    toolControllerDeleteTool: build.mutation<
      ToolControllerDeleteToolApiResponse,
      ToolControllerDeleteToolApiArg
    >({
      query: (queryArg) => ({
        url: `/api/tools/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    itemControllerGetAllItems: build.query<
      ItemControllerGetAllItemsApiResponse,
      ItemControllerGetAllItemsApiArg
    >({
      query: () => ({ url: `/api/items` }),
    }),
    itemControllerCreateItem: build.mutation<
      ItemControllerCreateItemApiResponse,
      ItemControllerCreateItemApiArg
    >({
      query: (queryArg) => ({
        url: `/api/items`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    itemControllerGetItemById: build.query<
      ItemControllerGetItemByIdApiResponse,
      ItemControllerGetItemByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/items/${queryArg.id}` }),
    }),
    itemControllerUpdateItem: build.mutation<
      ItemControllerUpdateItemApiResponse,
      ItemControllerUpdateItemApiArg
    >({
      query: (queryArg) => ({
        url: `/api/items/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    itemControllerDeleteItem: build.mutation<
      ItemControllerDeleteItemApiResponse,
      ItemControllerDeleteItemApiArg
    >({
      query: (queryArg) => ({
        url: `/api/items/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    worldControllerGetAllWorlds: build.query<
      WorldControllerGetAllWorldsApiResponse,
      WorldControllerGetAllWorldsApiArg
    >({
      query: () => ({ url: `/api/worlds` }),
    }),
    worldControllerCreateWorld: build.mutation<
      WorldControllerCreateWorldApiResponse,
      WorldControllerCreateWorldApiArg
    >({
      query: (queryArg) => ({
        url: `/api/worlds`,
        method: "POST",
        body: queryArg.createWorldDto,
      }),
    }),
    worldControllerGetWorldById: build.query<
      WorldControllerGetWorldByIdApiResponse,
      WorldControllerGetWorldByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/worlds/${queryArg.id}` }),
    }),
    worldControllerUpdateWorld: build.mutation<
      WorldControllerUpdateWorldApiResponse,
      WorldControllerUpdateWorldApiArg
    >({
      query: (queryArg) => ({
        url: `/api/worlds/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateWorldDto,
      }),
    }),
    worldControllerDeleteWorld: build.mutation<
      WorldControllerDeleteWorldApiResponse,
      WorldControllerDeleteWorldApiArg
    >({
      query: (queryArg) => ({
        url: `/api/worlds/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    weaponControllerGetAllWeapons: build.query<
      WeaponControllerGetAllWeaponsApiResponse,
      WeaponControllerGetAllWeaponsApiArg
    >({
      query: () => ({ url: `/api/weapons` }),
    }),
    weaponControllerCreateWeapon: build.mutation<
      WeaponControllerCreateWeaponApiResponse,
      WeaponControllerCreateWeaponApiArg
    >({
      query: (queryArg) => ({
        url: `/api/weapons`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    weaponControllerGetWeaponById: build.query<
      WeaponControllerGetWeaponByIdApiResponse,
      WeaponControllerGetWeaponByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/weapons/${queryArg.id}` }),
    }),
    weaponControllerUpdateWeapon: build.mutation<
      WeaponControllerUpdateWeaponApiResponse,
      WeaponControllerUpdateWeaponApiArg
    >({
      query: (queryArg) => ({
        url: `/api/weapons/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    weaponControllerDeleteWeapon: build.mutation<
      WeaponControllerDeleteWeaponApiResponse,
      WeaponControllerDeleteWeaponApiArg
    >({
      query: (queryArg) => ({
        url: `/api/weapons/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    ruleControllerGetAllRules: build.query<
      RuleControllerGetAllRulesApiResponse,
      RuleControllerGetAllRulesApiArg
    >({
      query: () => ({ url: `/api/rules` }),
    }),
    ruleControllerCreateRule: build.mutation<
      RuleControllerCreateRuleApiResponse,
      RuleControllerCreateRuleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/rules`,
        method: "POST",
        body: queryArg.createRuleDto,
      }),
    }),
    ruleControllerGetRuleById: build.query<
      RuleControllerGetRuleByIdApiResponse,
      RuleControllerGetRuleByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/rules/${queryArg.id}` }),
    }),
    ruleControllerUpdateRule: build.mutation<
      RuleControllerUpdateRuleApiResponse,
      RuleControllerUpdateRuleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/rules/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateRuleDto,
      }),
    }),
    ruleControllerDeleteRule: build.mutation<
      RuleControllerDeleteRuleApiResponse,
      RuleControllerDeleteRuleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/rules/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    classControllerGetAllclass: build.query<
      ClassControllerGetAllclassApiResponse,
      ClassControllerGetAllclassApiArg
    >({
      query: () => ({ url: `/api/class` }),
    }),
    classControllerCreateclass: build.mutation<
      ClassControllerCreateclassApiResponse,
      ClassControllerCreateclassApiArg
    >({
      query: (queryArg) => ({
        url: `/api/class`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    classControllerGetClassById: build.query<
      ClassControllerGetClassByIdApiResponse,
      ClassControllerGetClassByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/class/${queryArg.id}` }),
    }),
    classControllerUpdateClass: build.mutation<
      ClassControllerUpdateClassApiResponse,
      ClassControllerUpdateClassApiArg
    >({
      query: (queryArg) => ({
        url: `/api/class/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    classControllerDeleteClass: build.mutation<
      ClassControllerDeleteClassApiResponse,
      ClassControllerDeleteClassApiArg
    >({
      query: (queryArg) => ({
        url: `/api/class/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    monsterControllerCreate: build.mutation<
      MonsterControllerCreateApiResponse,
      MonsterControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/monsters`,
        method: "POST",
        body: queryArg.createMonsterDto,
      }),
    }),
    monsterControllerFindAll: build.query<
      MonsterControllerFindAllApiResponse,
      MonsterControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/monsters` }),
    }),
    monsterControllerFindOne: build.query<
      MonsterControllerFindOneApiResponse,
      MonsterControllerFindOneApiArg
    >({
      query: (queryArg) => ({ url: `/api/monsters/${queryArg.id}` }),
    }),
    monsterControllerUpdate: build.mutation<
      MonsterControllerUpdateApiResponse,
      MonsterControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/monsters/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateMonsterDto,
      }),
    }),
    monsterControllerRemove: build.mutation<
      MonsterControllerRemoveApiResponse,
      MonsterControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/monsters/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    armorControllerGetAllArmor: build.query<
      ArmorControllerGetAllArmorApiResponse,
      ArmorControllerGetAllArmorApiArg
    >({
      query: () => ({ url: `/api/armors` }),
    }),
    armorControllerCreateArmor: build.mutation<
      ArmorControllerCreateArmorApiResponse,
      ArmorControllerCreateArmorApiArg
    >({
      query: (queryArg) => ({
        url: `/api/armors`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    armorControllerGetArmorById: build.query<
      ArmorControllerGetArmorByIdApiResponse,
      ArmorControllerGetArmorByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/armors/${queryArg.id}` }),
    }),
    armorControllerUpdateArmor: build.mutation<
      ArmorControllerUpdateArmorApiResponse,
      ArmorControllerUpdateArmorApiArg
    >({
      query: (queryArg) => ({
        url: `/api/armors/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    armorControllerDeleteArmor: build.mutation<
      ArmorControllerDeleteArmorApiResponse,
      ArmorControllerDeleteArmorApiArg
    >({
      query: (queryArg) => ({
        url: `/api/armors/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    invocationControllerGetAllInvocations: build.query<
      InvocationControllerGetAllInvocationsApiResponse,
      InvocationControllerGetAllInvocationsApiArg
    >({
      query: () => ({ url: `/api/eldritch-invocations` }),
    }),
    invocationControllerCreateInvocation: build.mutation<
      InvocationControllerCreateInvocationApiResponse,
      InvocationControllerCreateInvocationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/eldritch-invocations`,
        method: "POST",
        body: queryArg.createInvocationDto,
      }),
    }),
    invocationControllerGetInvocationById: build.query<
      InvocationControllerGetInvocationByIdApiResponse,
      InvocationControllerGetInvocationByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/eldritch-invocations/${queryArg.id}`,
      }),
    }),
    invocationControllerUpdateInvocation: build.mutation<
      InvocationControllerUpdateInvocationApiResponse,
      InvocationControllerUpdateInvocationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/eldritch-invocations/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateInvocationDto,
      }),
    }),
    invocationControllerDeleteInvocation: build.mutation<
      InvocationControllerDeleteInvocationApiResponse,
      InvocationControllerDeleteInvocationApiArg
    >({
      query: (queryArg) => ({
        url: `/api/eldritch-invocations/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    mitemControllerGetAllMitems: build.query<
      MitemControllerGetAllMitemsApiResponse,
      MitemControllerGetAllMitemsApiArg
    >({
      query: () => ({ url: `/api/magic-items` }),
    }),
    mitemControllerCreateMitem: build.mutation<
      MitemControllerCreateMitemApiResponse,
      MitemControllerCreateMitemApiArg
    >({
      query: (queryArg) => ({
        url: `/api/magic-items`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    mitemControllerGetMitemById: build.query<
      MitemControllerGetMitemByIdApiResponse,
      MitemControllerGetMitemByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/magic-items/${queryArg.id}` }),
    }),
    mitemControllerUpdateItem: build.mutation<
      MitemControllerUpdateItemApiResponse,
      MitemControllerUpdateItemApiArg
    >({
      query: (queryArg) => ({
        url: `/api/magic-items/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    mitemControllerDeleteItem: build.mutation<
      MitemControllerDeleteItemApiResponse,
      MitemControllerDeleteItemApiArg
    >({
      query: (queryArg) => ({
        url: `/api/magic-items/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    apsControllerGetAllAps: build.query<
      ApsControllerGetAllApsApiResponse,
      ApsControllerGetAllApsApiArg
    >({
      query: () => ({ url: `/api/aps` }),
    }),
    apsControllerCreateAps: build.mutation<
      ApsControllerCreateApsApiResponse,
      ApsControllerCreateApsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/aps`,
        method: "POST",
        body: queryArg.createApsDto,
      }),
    }),
    apsControllerGetApsById: build.query<
      ApsControllerGetApsByIdApiResponse,
      ApsControllerGetApsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/aps/${queryArg.id}` }),
    }),
    apsControllerUpdateAps: build.mutation<
      ApsControllerUpdateApsApiResponse,
      ApsControllerUpdateApsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/aps/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateApsDto,
      }),
    }),
    apsControllerDeleteWorld: build.mutation<
      ApsControllerDeleteWorldApiResponse,
      ApsControllerDeleteWorldApiArg
    >({
      query: (queryArg) => ({
        url: `/api/aps/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    wpControllerGetAllWp: build.query<
      WpControllerGetAllWpApiResponse,
      WpControllerGetAllWpApiArg
    >({
      query: () => ({ url: `/api/wp` }),
    }),
    wpControllerCreateWorld: build.mutation<
      WpControllerCreateWorldApiResponse,
      WpControllerCreateWorldApiArg
    >({
      query: (queryArg) => ({
        url: `/api/wp`,
        method: "POST",
        body: queryArg.createWpDto,
      }),
    }),
    wpControllerGetWpById: build.query<
      WpControllerGetWpByIdApiResponse,
      WpControllerGetWpByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/wp/${queryArg.id}` }),
    }),
    wpControllerUpdateWorld: build.mutation<
      WpControllerUpdateWorldApiResponse,
      WpControllerUpdateWorldApiArg
    >({
      query: (queryArg) => ({
        url: `/api/wp/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateWpDto,
      }),
    }),
    wpControllerDeleteWorld: build.mutation<
      WpControllerDeleteWorldApiResponse,
      WpControllerDeleteWorldApiArg
    >({
      query: (queryArg) => ({
        url: `/api/wp/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    bmControllerGetAllBms: build.query<
      BmControllerGetAllBmsApiResponse,
      BmControllerGetAllBmsApiArg
    >({
      query: () => ({ url: `/api/bm` }),
    }),
    bmControllerCreateBm: build.mutation<
      BmControllerCreateBmApiResponse,
      BmControllerCreateBmApiArg
    >({
      query: (queryArg) => ({
        url: `/api/bm`,
        method: "POST",
        body: queryArg.createBmDto,
      }),
    }),
    bmControllerGetBmById: build.query<
      BmControllerGetBmByIdApiResponse,
      BmControllerGetBmByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/bm/${queryArg.id}` }),
    }),
    bmControllerUpdateBm: build.mutation<
      BmControllerUpdateBmApiResponse,
      BmControllerUpdateBmApiArg
    >({
      query: (queryArg) => ({
        url: `/api/bm/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateBmDto,
      }),
    }),
    bmControllerDeleteBm: build.mutation<
      BmControllerDeleteBmApiResponse,
      BmControllerDeleteBmApiArg
    >({
      query: (queryArg) => ({
        url: `/api/bm/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    classSpellsControllerCreate: build.mutation<
      ClassSpellsControllerCreateApiResponse,
      ClassSpellsControllerCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/class-spells`,
        method: "POST",
        body: queryArg.createClassSpellDto,
      }),
    }),
    classSpellsControllerFindAll: build.query<
      ClassSpellsControllerFindAllApiResponse,
      ClassSpellsControllerFindAllApiArg
    >({
      query: () => ({ url: `/api/class-spells` }),
    }),
    classSpellsControllerFindOne: build.query<
      ClassSpellsControllerFindOneApiResponse,
      ClassSpellsControllerFindOneApiArg
    >({
      query: (queryArg) => ({
        url: `/api/class-spells/${queryArg.classId}/${queryArg.spellId}`,
      }),
    }),
    classSpellsControllerUpdate: build.mutation<
      ClassSpellsControllerUpdateApiResponse,
      ClassSpellsControllerUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/api/class-spells/${queryArg.classId}/${queryArg.spellId}`,
        method: "PUT",
        body: queryArg.updateClassSpellDto,
      }),
    }),
    classSpellsControllerRemove: build.mutation<
      ClassSpellsControllerRemoveApiResponse,
      ClassSpellsControllerRemoveApiArg
    >({
      query: (queryArg) => ({
        url: `/api/class-spells/${queryArg.classId}/${queryArg.spellId}`,
        method: "DELETE",
      }),
    }),
    spellControllerGetAllSpell: build.query<
      SpellControllerGetAllSpellApiResponse,
      SpellControllerGetAllSpellApiArg
    >({
      query: () => ({ url: `/api/spells` }),
    }),
    spellControllerCreateSpell: build.mutation<
      SpellControllerCreateSpellApiResponse,
      SpellControllerCreateSpellApiArg
    >({
      query: (queryArg) => ({
        url: `/api/spells`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    spellControllerGetSpellById: build.query<
      SpellControllerGetSpellByIdApiResponse,
      SpellControllerGetSpellByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/spells/${queryArg.id}` }),
    }),
    spellControllerUpdateSpell: build.mutation<
      SpellControllerUpdateSpellApiResponse,
      SpellControllerUpdateSpellApiArg
    >({
      query: (queryArg) => ({
        url: `/api/spells/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    spellControllerDeleteSpell: build.mutation<
      SpellControllerDeleteSpellApiResponse,
      SpellControllerDeleteSpellApiArg
    >({
      query: (queryArg) => ({
        url: `/api/spells/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    fsControllerGetAllFs: build.query<
      FsControllerGetAllFsApiResponse,
      FsControllerGetAllFsApiArg
    >({
      query: () => ({ url: `/api/fs` }),
    }),
    fsControllerCreateFs: build.mutation<
      FsControllerCreateFsApiResponse,
      FsControllerCreateFsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/fs`,
        method: "POST",
        body: queryArg.createFsDto,
      }),
    }),
    fsControllerGetFsById: build.query<
      FsControllerGetFsByIdApiResponse,
      FsControllerGetFsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/fs/${queryArg.id}` }),
    }),
    fsControllerUpdateFs: build.mutation<
      FsControllerUpdateFsApiResponse,
      FsControllerUpdateFsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/fs/${queryArg.id}`,
        method: "PUT",
        body: queryArg.updateFsDto,
      }),
    }),
    fsControllerDeleteFs: build.mutation<
      FsControllerDeleteFsApiResponse,
      FsControllerDeleteFsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/fs/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    ssControllerGetAllSs: build.query<
      SsControllerGetAllSsApiResponse,
      SsControllerGetAllSsApiArg
    >({
      query: () => ({ url: `/api/subclass-spells` }),
    }),
    ssControllerCreateSs: build.mutation<
      SsControllerCreateSsApiResponse,
      SsControllerCreateSsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subclass-spells`,
        method: "POST",
        body: queryArg.createSsDto,
      }),
    }),
    ssControllerGetSsById: build.query<
      SsControllerGetSsByIdApiResponse,
      SsControllerGetSsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subclass-spells/${queryArg.subclassId}/${queryArg.spellId}`,
      }),
    }),
    ssControllerUpdateSs: build.mutation<
      SsControllerUpdateSsApiResponse,
      SsControllerUpdateSsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subclass-spells/${queryArg.subclassId}/${queryArg.spellId}`,
        method: "PUT",
        body: queryArg.updateSsDto,
      }),
    }),
    ssControllerDeleteSs: build.mutation<
      SsControllerDeleteSsApiResponse,
      SsControllerDeleteSsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subclass-spells/${queryArg.subclassId}/${queryArg.spellId}`,
        method: "DELETE",
      }),
    }),
    subraceControllerGetAllsubrace: build.query<
      SubraceControllerGetAllsubraceApiResponse,
      SubraceControllerGetAllsubraceApiArg
    >({
      query: () => ({ url: `/api/subrace` }),
    }),
    subraceControllerCreateSubrace: build.mutation<
      SubraceControllerCreateSubraceApiResponse,
      SubraceControllerCreateSubraceApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subrace`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    subraceControllerGetSubraceById: build.query<
      SubraceControllerGetSubraceByIdApiResponse,
      SubraceControllerGetSubraceByIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/subrace/${queryArg.id}` }),
    }),
    subraceControllerUpdateSubrace: build.mutation<
      SubraceControllerUpdateSubraceApiResponse,
      SubraceControllerUpdateSubraceApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subrace/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    subraceControllerDeleteSubrace: build.mutation<
      SubraceControllerDeleteSubraceApiResponse,
      SubraceControllerDeleteSubraceApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subrace/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    subclassControllerGetAllSublasses: build.query<
      SubclassControllerGetAllSublassesApiResponse,
      SubclassControllerGetAllSublassesApiArg
    >({
      query: () => ({ url: `/api/subclass` }),
    }),
    subclassControllerCreateSubclass: build.mutation<
      SubclassControllerCreateSubclassApiResponse,
      SubclassControllerCreateSubclassApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subclass`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    subclassControllerGetSubclassbyId: build.query<
      SubclassControllerGetSubclassbyIdApiResponse,
      SubclassControllerGetSubclassbyIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/subclass/${queryArg.id}` }),
    }),
    subclassControllerUpdateSubclass: build.mutation<
      SubclassControllerUpdateSubclassApiResponse,
      SubclassControllerUpdateSubclassApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subclass/${queryArg.id}`,
        method: "PUT",
        body: queryArg.body,
      }),
    }),
    subclassControllerDeleteSubclass: build.mutation<
      SubclassControllerDeleteSubclassApiResponse,
      SubclassControllerDeleteSubclassApiArg
    >({
      query: (queryArg) => ({
        url: `/api/subclass/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    tsControllerGetAllTs: build.query<
      TsControllerGetAllTsApiResponse,
      TsControllerGetAllTsApiArg
    >({
      query: () => ({ url: `/api/trait-spells` }),
    }),
    tsControllerCreateTs: build.mutation<
      TsControllerCreateTsApiResponse,
      TsControllerCreateTsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/trait-spells`,
        method: "POST",
        body: queryArg.createTsDto,
      }),
    }),
    tsControllerGetTsById: build.query<
      TsControllerGetTsByIdApiResponse,
      TsControllerGetTsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/trait-spells/${queryArg.traitId}/${queryArg.spellId}`,
      }),
    }),
    tsControllerUpdateTs: build.mutation<
      TsControllerUpdateTsApiResponse,
      TsControllerUpdateTsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/trait-spells/${queryArg.traitId}/${queryArg.spellId}`,
        method: "PUT",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as DnDApi };
export type UsersControllerCreateApiResponse = unknown;
export type UsersControllerCreateApiArg = {
  createUserDto: CreateUserDto;
};
export type UsersControllerFindAllApiResponse = /** status 200  */ GetUserDto[];
export type UsersControllerFindAllApiArg = void;
export type UsersControllerFindOneApiResponse =
  /** status 200  */ GetUserByIdDto;
export type UsersControllerFindOneApiArg = {
  id: string;
};
export type UsersControllerUpdateApiResponse = unknown;
export type UsersControllerUpdateApiArg = {
  id: string;
  updateUserDto: UpdateUserDto;
};
export type UsersControllerRemoveApiResponse = /** status 200  */ DeleteUserDto;
export type UsersControllerRemoveApiArg = {
  id: string;
};
export type UsersControllerUpdateRoleApiResponse = unknown;
export type UsersControllerUpdateRoleApiArg = {
  id: string;
  switchRoleDto: SwitchRoleDto;
};
export type AuthControllerRegisterApiResponse = unknown;
export type AuthControllerRegisterApiArg = {
  registerUserDto: RegisterUserDto;
};
export type AuthControllerSendEmailApiResponse =
  /** status 200 Сообщение отправлено успешно */ any;
export type AuthControllerSendEmailApiArg = {
  sendEmailDto: SendEmailDto;
};
export type AuthControllerVerifyEmailApiResponse = unknown;
export type AuthControllerVerifyEmailApiArg = {
  token: string;
};
export type AuthControllerLoginApiResponse = unknown;
export type AuthControllerLoginApiArg = {
  loginUserDto: LoginUserDto;
};
export type AuthControllerForgotPasswordApiResponse = unknown;
export type AuthControllerForgotPasswordApiArg = {
  forgotPasswordDto: ForgotPasswordDto;
};
export type AuthControllerResetPasswordApiResponse = unknown;
export type AuthControllerResetPasswordApiArg = {
  resetPasswordDto: ResetPasswordDto;
};
export type AuthControllerRefreshTokenApiResponse = unknown;
export type AuthControllerRefreshTokenApiArg = {
  refreshTokenDto: RefreshTokenDto;
};
export type AuthControllerLogoutApiResponse = unknown;
export type AuthControllerLogoutApiArg = void;
export type HeroControllerGetAllHeroesApiResponse = unknown;
export type HeroControllerGetAllHeroesApiArg = void;
export type HeroControllerCreateHeroApiResponse = unknown;
export type HeroControllerCreateHeroApiArg = {
  /** Create a new hero with an image */
  body: {
    file?: Blob;
    name?: string;
    world_id?: number;
    user_id?: string;
    cha?: number;
    con?: number;
    dex?: number;
    int?: number;
    str?: number;
    wis?: number;
    notes?: string;
    armorBonus?: number;
    buff_hp?: number;
    copper_coins?: number;
    silver_coins?: number;
    electrum_coins?: number;
    gold_coins?: number;
    platinum_coins?: number;
    current_hp?: number;
    max_hp?: number;
    temp_hp?: number;
    subrace_id?: number;
    race_id?: number;
    creation_done?: boolean;
    traits?: string;
    ideals?: string;
    bounds?: string;
    flaws?: string;
    armor_id?: number;
    shield_id?: number;
    armor_bonus?: number;
    experience?: number;
    warlock_pact_id?: number;
    armor_types_prof?: string[];
    weapon_types_prof?: string[];
    languages_ids?: number[];
    tools_ids?: number[];
  };
};
export type HeroControllerGetHeroByIdApiResponse =
  /** status 200  */ GetHeroByIdDto;
export type HeroControllerGetHeroByIdApiArg = {
  /** ID героя */
  id: number;
};
export type HeroControllerUpdateHeroApiResponse = unknown;
export type HeroControllerUpdateHeroApiArg = {
  /** ID героя */
  id: number;
  /** Обновить героя с изображением */
  body: {
    file?: Blob;
    name?: string;
    world_id?: number;
    user_id?: string;
    cha?: number;
    con?: number;
    dex?: number;
    int?: number;
    str?: number;
    wis?: number;
    notes?: string;
    armorBonus?: number;
    buff_hp?: number;
    copper_coins?: number;
    silver_coins?: number;
    electrum_coins?: number;
    gold_coins?: number;
    platinum_coins?: number;
    current_hp?: number;
    max_hp?: number;
    temp_hp?: number;
    subrace_id?: number;
    race_id?: number;
    creation_done?: boolean;
    traits?: string;
    ideals?: string;
    bounds?: string;
    flaws?: string;
    armor_id?: number;
    shield_id?: number;
    armor_bonus?: number;
    experience?: number;
    warlock_pact_id?: number;
    armor_types_prof?: string[];
    weapon_types_prof?: string[];
    languages_ids?: number[];
    tools_ids?: number[];
  };
};
export type HeroControllerDeleteHeroApiResponse =
  /** status 200  */ DeleteHeroDto;
export type HeroControllerDeleteHeroApiArg = {
  /** ID героя */
  id: number;
};
export type RaceControllerGetAllRacesApiResponse = unknown;
export type RaceControllerGetAllRacesApiArg = void;
export type RaceControllerCreateraceApiResponse = unknown;
export type RaceControllerCreateraceApiArg = {
  /** Create a new race with an image */
  body: {
    file?: Blob;
    name?: string;
    description?: string;
    speed?: number;
  };
};
export type RaceControllerGetRaceByIdApiResponse = unknown;
export type RaceControllerGetRaceByIdApiArg = {
  id: string;
};
export type RaceControllerUpdateRaceApiResponse = unknown;
export type RaceControllerUpdateRaceApiArg = {
  id: number;
  /** Create race with an image */
  body: {
    file?: Blob;
    name?: string;
    description?: string;
    speed?: number;
  };
};
export type RaceControllerDeleteRaceApiResponse = unknown;
export type RaceControllerDeleteRaceApiArg = {
  id: string;
};
export type TraitControllerGetAllTraitsApiResponse = unknown;
export type TraitControllerGetAllTraitsApiArg = void;
export type TraitControllerCreateTraitApiResponse = unknown;
export type TraitControllerCreateTraitApiArg = {
  createTraitDto: CreateTraitDto;
};
export type TraitControllerGetTraitByIdApiResponse = unknown;
export type TraitControllerGetTraitByIdApiArg = {
  id: string;
};
export type TraitControllerUpdateTraitApiResponse = unknown;
export type TraitControllerUpdateTraitApiArg = {
  id: string;
  updateTraitDto: UpdateTraitDto;
};
export type TraitControllerDeleteTraitApiResponse = unknown;
export type TraitControllerDeleteTraitApiArg = {
  id: string;
};
export type FeatureControllerGetAllFeaturesApiResponse = unknown;
export type FeatureControllerGetAllFeaturesApiArg = void;
export type FeatureControllerCreateFeatureApiResponse = unknown;
export type FeatureControllerCreateFeatureApiArg = {
  createFeatureDto: CreateFeatureDto;
};
export type FeatureControllerGetFeatureByIdApiResponse = unknown;
export type FeatureControllerGetFeatureByIdApiArg = {
  id: string;
};
export type FeatureControllerUpdateFeatureApiResponse = unknown;
export type FeatureControllerUpdateFeatureApiArg = {
  id: string;
  updateFeatureDto: UpdateFeatureDto;
};
export type FeatureControllerDeleteFeatureApiResponse = unknown;
export type FeatureControllerDeleteFeatureApiArg = {
  id: string;
};
export type LanguageControllerGetAllLanguagesApiResponse = unknown;
export type LanguageControllerGetAllLanguagesApiArg = void;
export type LanguageControllerCreateLanguageApiResponse = unknown;
export type LanguageControllerCreateLanguageApiArg = {
  createLanguageDto: CreateLanguageDto;
};
export type LanguageControllerGetLanguageByIdApiResponse = unknown;
export type LanguageControllerGetLanguageByIdApiArg = {
  id: number;
};
export type LanguageControllerUpdateLanguageApiResponse = unknown;
export type LanguageControllerUpdateLanguageApiArg = {
  id: number;
  updateLanguageDto: UpdateLanguageDto;
};
export type LanguageControllerDeleteLanguageApiResponse = unknown;
export type LanguageControllerDeleteLanguageApiArg = {
  id: number;
};
export type ToolControllerGetAllToolsApiResponse = unknown;
export type ToolControllerGetAllToolsApiArg = void;
export type ToolControllerCreateToolApiResponse = unknown;
export type ToolControllerCreateToolApiArg = {
  createToolDto: CreateToolDto;
};
export type ToolControllerGetToolByIdApiResponse = unknown;
export type ToolControllerGetToolByIdApiArg = {
  id: number;
};
export type ToolControllerUpdateToolApiResponse = unknown;
export type ToolControllerUpdateToolApiArg = {
  id: number;
  updateToolDto: UpdateToolDto;
};
export type ToolControllerDeleteToolApiResponse = unknown;
export type ToolControllerDeleteToolApiArg = {
  id: number;
};
export type ItemControllerGetAllItemsApiResponse = unknown;
export type ItemControllerGetAllItemsApiArg = void;
export type ItemControllerCreateItemApiResponse = unknown;
export type ItemControllerCreateItemApiArg = {
  /** Create a new item with an image */
  body: {
    file?: Blob;
    name_rus?: string;
    name_eng?: string;
    homebrew?: boolean;
    price?: string;
    source?: string;
    weight?: string;
    description?: string;
    categories?: string[];
    world_id?: number;
  };
};
export type ItemControllerGetItemByIdApiResponse = unknown;
export type ItemControllerGetItemByIdApiArg = {
  id: string;
};
export type ItemControllerUpdateItemApiResponse = unknown;
export type ItemControllerUpdateItemApiArg = {
  id: string;
  /** Update an existing item with an image */
  body: {
    file?: Blob;
    name_rus?: string;
    name_eng?: string;
    homebrew?: boolean;
    price?: string;
    source?: string;
    weight?: string;
    description?: string;
    categories?: string[];
    world_id?: number;
  };
};
export type ItemControllerDeleteItemApiResponse = unknown;
export type ItemControllerDeleteItemApiArg = {
  id: string;
};
export type WorldControllerGetAllWorldsApiResponse = unknown;
export type WorldControllerGetAllWorldsApiArg = void;
export type WorldControllerCreateWorldApiResponse = unknown;
export type WorldControllerCreateWorldApiArg = {
  createWorldDto: CreateWorldDto;
};
export type WorldControllerGetWorldByIdApiResponse = unknown;
export type WorldControllerGetWorldByIdApiArg = {
  id: number;
};
export type WorldControllerUpdateWorldApiResponse = unknown;
export type WorldControllerUpdateWorldApiArg = {
  id: number;
  updateWorldDto: UpdateWorldDto;
};
export type WorldControllerDeleteWorldApiResponse = unknown;
export type WorldControllerDeleteWorldApiArg = {
  id: number;
};
export type WeaponControllerGetAllWeaponsApiResponse = unknown;
export type WeaponControllerGetAllWeaponsApiArg = void;
export type WeaponControllerCreateWeaponApiResponse = unknown;
export type WeaponControllerCreateWeaponApiArg = {
  /** Create a new weapon with an image */
  body: {
    file?: Blob;
    name_rus?: string;
    name_eng?: string;
    type?: number;
    damage_dice?: string;
    damage_type?: string;
    price?: string;
    source?: string;
    weight?: number;
    description?: string;
    properties?: string[];
    special?: string;
    homebrew?: boolean;
    world_id?: number;
  };
};
export type WeaponControllerGetWeaponByIdApiResponse = unknown;
export type WeaponControllerGetWeaponByIdApiArg = {
  id: string;
};
export type WeaponControllerUpdateWeaponApiResponse = unknown;
export type WeaponControllerUpdateWeaponApiArg = {
  id: string;
  /** Update an existing weapon with an image */
  body: {
    file?: Blob;
    name_rus?: string;
    name_eng?: string;
    type?: number;
    damage_dice?: string;
    damage_type?: string;
    price?: string;
    source?: string;
    weight?: number;
    description?: string;
    properties?: string[];
    special?: string;
    homebrew?: boolean;
    world_id?: number;
  };
};
export type WeaponControllerDeleteWeaponApiResponse = unknown;
export type WeaponControllerDeleteWeaponApiArg = {
  id: string;
};
export type RuleControllerGetAllRulesApiResponse = unknown;
export type RuleControllerGetAllRulesApiArg = void;
export type RuleControllerCreateRuleApiResponse = unknown;
export type RuleControllerCreateRuleApiArg = {
  createRuleDto: CreateRuleDto;
};
export type RuleControllerGetRuleByIdApiResponse = unknown;
export type RuleControllerGetRuleByIdApiArg = {
  id: string;
};
export type RuleControllerUpdateRuleApiResponse = unknown;
export type RuleControllerUpdateRuleApiArg = {
  id: string;
  updateRuleDto: UpdateRuleDto;
};
export type RuleControllerDeleteRuleApiResponse = unknown;
export type RuleControllerDeleteRuleApiArg = {
  id: string;
};
export type ClassControllerGetAllclassApiResponse = unknown;
export type ClassControllerGetAllclassApiArg = void;
export type ClassControllerCreateclassApiResponse = unknown;
export type ClassControllerCreateclassApiArg = {
  /** Create a new class with an image */
  body: {
    file?: Blob;
    name?: string;
    main_ability?: string;
    hit_dice?: number;
    description?: string;
    subclass_level?: number;
    spell_ability?: string;
    metamagic?: boolean;
  };
};
export type ClassControllerGetClassByIdApiResponse = unknown;
export type ClassControllerGetClassByIdApiArg = {
  id: string;
};
export type ClassControllerUpdateClassApiResponse = unknown;
export type ClassControllerUpdateClassApiArg = {
  id: number;
  /** Create class with an image */
  body: {
    file?: Blob;
    name?: string;
    main_ability?: string;
    hit_dice?: number;
    description?: string;
    subclass_level?: number;
    spell_ability?: string;
    metamagic?: boolean;
  };
};
export type ClassControllerDeleteClassApiResponse = unknown;
export type ClassControllerDeleteClassApiArg = {
  id: string;
};
export type MonsterControllerCreateApiResponse = unknown;
export type MonsterControllerCreateApiArg = {
  createMonsterDto: CreateMonsterDto;
};
export type MonsterControllerFindAllApiResponse = unknown;
export type MonsterControllerFindAllApiArg = void;
export type MonsterControllerFindOneApiResponse = unknown;
export type MonsterControllerFindOneApiArg = {
  id: number;
};
export type MonsterControllerUpdateApiResponse = unknown;
export type MonsterControllerUpdateApiArg = {
  id: number;
  updateMonsterDto: UpdateMonsterDto;
};
export type MonsterControllerRemoveApiResponse = unknown;
export type MonsterControllerRemoveApiArg = {
  id: number;
};
export type ArmorControllerGetAllArmorApiResponse = unknown;
export type ArmorControllerGetAllArmorApiArg = void;
export type ArmorControllerCreateArmorApiResponse = unknown;
export type ArmorControllerCreateArmorApiArg = {
  /** Create a new armor with an image */
  body: {
    file?: Blob;
    name_rus?: string;
    name_eng?: string;
    type?: number;
    base_ac?: number;
    ac?: string;
    price?: string;
    source?: string;
    weight?: number;
    description?: string;
    duration?: string;
    disadvantage?: boolean;
    requirement?: number;
    homebrew?: boolean;
  };
};
export type ArmorControllerGetArmorByIdApiResponse = unknown;
export type ArmorControllerGetArmorByIdApiArg = {
  id: number;
};
export type ArmorControllerUpdateArmorApiResponse = unknown;
export type ArmorControllerUpdateArmorApiArg = {
  id: number;
  /** Update an existing armor with an image */
  body: {
    file?: Blob;
    name_rus?: string;
    name_eng?: string;
    type?: number;
    base_ac?: number;
    ac?: string;
    price?: string;
    source?: string;
    weight?: number;
    description?: string;
    duration?: string;
    disadvantage?: boolean;
    requirement?: number;
    homebrew?: boolean;
  };
};
export type ArmorControllerDeleteArmorApiResponse = unknown;
export type ArmorControllerDeleteArmorApiArg = {
  id: number;
};
export type InvocationControllerGetAllInvocationsApiResponse = unknown;
export type InvocationControllerGetAllInvocationsApiArg = void;
export type InvocationControllerCreateInvocationApiResponse = unknown;
export type InvocationControllerCreateInvocationApiArg = {
  createInvocationDto: CreateInvocationDto;
};
export type InvocationControllerGetInvocationByIdApiResponse = unknown;
export type InvocationControllerGetInvocationByIdApiArg = {
  id: string;
};
export type InvocationControllerUpdateInvocationApiResponse = unknown;
export type InvocationControllerUpdateInvocationApiArg = {
  id: string;
  updateInvocationDto: UpdateInvocationDto;
};
export type InvocationControllerDeleteInvocationApiResponse = unknown;
export type InvocationControllerDeleteInvocationApiArg = {
  id: string;
};
export type MitemControllerGetAllMitemsApiResponse = unknown;
export type MitemControllerGetAllMitemsApiArg = void;
export type MitemControllerCreateMitemApiResponse = unknown;
export type MitemControllerCreateMitemApiArg = {
  /** Create a new magic item with an image */
  body: {
    id?: string;
    file?: Blob;
    name_rus?: string;
    cost_xge?: string;
    name_eng?: string;
    customization?: boolean;
    homebrew?: boolean;
    world_id?: number;
    cost_dmg?: string;
    source?: string;
    description?: string;
    type?: string;
    rarity?: string;
    ext_icon?: string;
    spell_id?: string;
    detailType?: string[];
    detailCustomization?: string[];
    allowed_weapon_ids?: string[];
    allowed_weapon_types?: number[];
  };
};
export type MitemControllerGetMitemByIdApiResponse = unknown;
export type MitemControllerGetMitemByIdApiArg = {
  id: string;
};
export type MitemControllerUpdateItemApiResponse = unknown;
export type MitemControllerUpdateItemApiArg = {
  id: string;
  /** Update an existing magic item with an image */
  body: {
    file?: Blob;
    name_rus?: string;
    cost_xge?: string;
    name_eng?: string;
    customization?: boolean;
    homebrew?: boolean;
    world_id?: number;
    cost_dmg?: string;
    source?: string;
    description?: string;
    type?: string;
    rarity?: string;
    ext_icon?: string;
    spell_id?: string;
    detailType?: string[];
    detailCustomization?: string[];
    allowed_weapon_ids?: string[];
    allowed_weapon_types?: number[];
  };
};
export type MitemControllerDeleteItemApiResponse = unknown;
export type MitemControllerDeleteItemApiArg = {
  id: string;
};
export type ApsControllerGetAllApsApiResponse = unknown;
export type ApsControllerGetAllApsApiArg = void;
export type ApsControllerCreateApsApiResponse = unknown;
export type ApsControllerCreateApsApiArg = {
  createApsDto: CreateApsDto;
};
export type ApsControllerGetApsByIdApiResponse = unknown;
export type ApsControllerGetApsByIdApiArg = {
  id: number;
};
export type ApsControllerUpdateApsApiResponse = unknown;
export type ApsControllerUpdateApsApiArg = {
  id: number;
  updateApsDto: UpdateApsDto;
};
export type ApsControllerDeleteWorldApiResponse = unknown;
export type ApsControllerDeleteWorldApiArg = {
  id: number;
};
export type WpControllerGetAllWpApiResponse = unknown;
export type WpControllerGetAllWpApiArg = void;
export type WpControllerCreateWorldApiResponse = unknown;
export type WpControllerCreateWorldApiArg = {
  createWpDto: CreateWpDto;
};
export type WpControllerGetWpByIdApiResponse = unknown;
export type WpControllerGetWpByIdApiArg = {
  id: number;
};
export type WpControllerUpdateWorldApiResponse = unknown;
export type WpControllerUpdateWorldApiArg = {
  id: number;
  updateWpDto: UpdateWpDto;
};
export type WpControllerDeleteWorldApiResponse = unknown;
export type WpControllerDeleteWorldApiArg = {
  id: number;
};
export type BmControllerGetAllBmsApiResponse = unknown;
export type BmControllerGetAllBmsApiArg = void;
export type BmControllerCreateBmApiResponse = unknown;
export type BmControllerCreateBmApiArg = {
  createBmDto: CreateBmDto;
};
export type BmControllerGetBmByIdApiResponse = unknown;
export type BmControllerGetBmByIdApiArg = {
  id: number;
};
export type BmControllerUpdateBmApiResponse = unknown;
export type BmControllerUpdateBmApiArg = {
  id: number;
  updateBmDto: UpdateBmDto;
};
export type BmControllerDeleteBmApiResponse = unknown;
export type BmControllerDeleteBmApiArg = {
  id: number;
};
export type ClassSpellsControllerCreateApiResponse = unknown;
export type ClassSpellsControllerCreateApiArg = {
  createClassSpellDto: CreateClassSpellDto;
};
export type ClassSpellsControllerFindAllApiResponse = unknown;
export type ClassSpellsControllerFindAllApiArg = void;
export type ClassSpellsControllerFindOneApiResponse = unknown;
export type ClassSpellsControllerFindOneApiArg = {
  classId: number;
  spellId: string;
};
export type ClassSpellsControllerUpdateApiResponse = unknown;
export type ClassSpellsControllerUpdateApiArg = {
  classId: number;
  spellId: string;
  updateClassSpellDto: UpdateClassSpellDto;
};
export type ClassSpellsControllerRemoveApiResponse = unknown;
export type ClassSpellsControllerRemoveApiArg = {
  classId: number;
  spellId: string;
};
export type SpellControllerGetAllSpellApiResponse = unknown;
export type SpellControllerGetAllSpellApiArg = void;
export type SpellControllerCreateSpellApiResponse = unknown;
export type SpellControllerCreateSpellApiArg = {
  /** Create a new spell with an image */
  body: {
    file?: Blob;
    id?: string;
    name_rus?: string;
    name_eng?: string;
    level?: number;
    school?: string;
    component_m?: string;
    source?: string;
    range?: string;
    duration?: string;
    time?: string;
    description?: string;
    upper?: string;
    ritual?: boolean;
    component_s?: boolean;
    component_v?: boolean;
  };
};
export type SpellControllerGetSpellByIdApiResponse = unknown;
export type SpellControllerGetSpellByIdApiArg = {
  id: string;
};
export type SpellControllerUpdateSpellApiResponse = unknown;
export type SpellControllerUpdateSpellApiArg = {
  id: string;
  /** Update an existing spell with an image */
  body: {
    file?: Blob;
    id?: string;
    name_rus?: string;
    name_eng?: string;
    level?: number;
    school?: string;
    component_m?: string;
    source?: string;
    range?: string;
    duration?: string;
    time?: string;
    description?: string;
    upper?: string;
    ritual?: boolean;
    component_s?: boolean;
    component_v?: boolean;
  };
};
export type SpellControllerDeleteSpellApiResponse = unknown;
export type SpellControllerDeleteSpellApiArg = {
  id: string;
};
export type FsControllerGetAllFsApiResponse = unknown;
export type FsControllerGetAllFsApiArg = void;
export type FsControllerCreateFsApiResponse = unknown;
export type FsControllerCreateFsApiArg = {
  createFsDto: CreateFsDto;
};
export type FsControllerGetFsByIdApiResponse = unknown;
export type FsControllerGetFsByIdApiArg = {
  id: number;
};
export type FsControllerUpdateFsApiResponse = unknown;
export type FsControllerUpdateFsApiArg = {
  id: number;
  updateFsDto: UpdateFsDto;
};
export type FsControllerDeleteFsApiResponse = unknown;
export type FsControllerDeleteFsApiArg = {
  id: number;
};
export type SsControllerGetAllSsApiResponse = unknown;
export type SsControllerGetAllSsApiArg = void;
export type SsControllerCreateSsApiResponse = unknown;
export type SsControllerCreateSsApiArg = {
  createSsDto: CreateSsDto;
};
export type SsControllerGetSsByIdApiResponse = unknown;
export type SsControllerGetSsByIdApiArg = {
  subclassId: number;
  spellId: string;
};
export type SsControllerUpdateSsApiResponse = unknown;
export type SsControllerUpdateSsApiArg = {
  subclassId: number;
  spellId: string;
  updateSsDto: UpdateSsDto;
};
export type SsControllerDeleteSsApiResponse = unknown;
export type SsControllerDeleteSsApiArg = {
  subclassId: number;
  spellId: string;
};
export type SubraceControllerGetAllsubraceApiResponse = unknown;
export type SubraceControllerGetAllsubraceApiArg = void;
export type SubraceControllerCreateSubraceApiResponse = unknown;
export type SubraceControllerCreateSubraceApiArg = {
  /** Create a new subrace with an image */
  body: {
    file?: Blob;
    race_id?: number;
    description?: string;
    name?: string;
    speed?: number;
    features_done?: boolean;
  };
};
export type SubraceControllerGetSubraceByIdApiResponse = unknown;
export type SubraceControllerGetSubraceByIdApiArg = {
  id: number;
};
export type SubraceControllerUpdateSubraceApiResponse = unknown;
export type SubraceControllerUpdateSubraceApiArg = {
  id: number;
  /** Update an existing subrace with an image */
  body: {
    file?: Blob;
    race_id?: number;
    description?: string;
    name?: string;
    speed?: number;
    features_done?: boolean;
  };
};
export type SubraceControllerDeleteSubraceApiResponse = unknown;
export type SubraceControllerDeleteSubraceApiArg = {
  id: number;
};
export type SubclassControllerGetAllSublassesApiResponse = unknown;
export type SubclassControllerGetAllSublassesApiArg = void;
export type SubclassControllerCreateSubclassApiResponse = unknown;
export type SubclassControllerCreateSubclassApiArg = {
  /** Create a new subclass with an image */
  body: {
    file?: Blob;
    name?: string;
    class_id?: number;
    source?: string;
    spell_ability?: string;
    description?: string;
  };
};
export type SubclassControllerGetSubclassbyIdApiResponse = unknown;
export type SubclassControllerGetSubclassbyIdApiArg = {
  id: number;
};
export type SubclassControllerUpdateSubclassApiResponse = unknown;
export type SubclassControllerUpdateSubclassApiArg = {
  id: number;
  /** Update an existing subclass with an image */
  body: {
    file?: Blob;
    name?: string;
    class_id?: number;
    source?: string;
    spell_ability?: string;
    description?: string;
  };
};
export type SubclassControllerDeleteSubclassApiResponse = unknown;
export type SubclassControllerDeleteSubclassApiArg = {
  id: number;
};
export type TsControllerGetAllTsApiResponse = unknown;
export type TsControllerGetAllTsApiArg = void;
export type TsControllerCreateTsApiResponse = unknown;
export type TsControllerCreateTsApiArg = {
  createTsDto: CreateTsDto;
};
export type TsControllerGetTsByIdApiResponse = unknown;
export type TsControllerGetTsByIdApiArg = {
  traitId: string;
  spellId: string;
};
export type TsControllerUpdateTsApiResponse = unknown;
export type TsControllerUpdateTsApiArg = {
  traitId: string;
  spellId: string;
};
export type CreateUserDto = {
  /** The email of the user */
  email: string;
  /** The password of the user */
  password: string;
  /** The login of the user */
  login: string;
  /** The role of the user */
  role: string;
  /** The fullname of the user */
  fullname: string;
};
export type GetHeroDto = {
  id: number;
  name: string;
  world_id: number;
  user_id: string;
  cha: number;
  con: number;
  dex: number;
  int: number;
  str: number;
  wis: number;
  notes: string;
  armorBonus: number;
  armor_types_prof: string[];
  buff_hp: number;
  copper_coins: number;
  silver_coins: number;
  electrum_coins: number;
  gold_coins: number;
  platinum_coins: number;
  current_hp: number;
  image_url: string;
  max_hp: number;
  temp_hp: number;
  subrace_id: number;
  race_id: number;
  weapon_types_prof: string[];
  creation_done: boolean;
  traits: string;
  ideals: string;
  bounds: string;
  flaws: string;
  languages_ids: string[];
  tools_ids: string[];
  armor_id: number;
  shield_id: number;
  armor_bonus: number;
  experience: number;
  warlock_pact_id: number;
};
export type GetUserDto = {
  id: string;
  email: string;
  fullname: string;
  login: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  heroes: GetHeroDto[];
};
export type GetUserByIdDto = {
  id: string;
};
export type UpdateUserDto = {
  /** The email of the user */
  email: string;
  /** The password of the user */
  password: string;
  /** The login of the user */
  login: string;
  /** The role of the user */
  role: string;
  /** The isVerified of the user */
  isVerified: boolean;
};
export type DeleteUserDto = {
  id: string;
};
export type SwitchRoleDto = {
  /** The role of the user */
  role: string;
};
export type RegisterUserDto = {
  /** The email of the user */
  email: string;
  /** The password of the user */
  password: string;
  /** Password confirmation */
  confirmPassword: string;
  /** The login of the user */
  login: string;
};
export type SendEmailDto = {
  /** Email получателя */
  to: string;
  /** Тема письма */
  subject: string;
  /** Текст письма */
  message: string;
};
export type LoginUserDto = {
  /** User email */
  email: string;
  /** User password */
  password: string;
};
export type ForgotPasswordDto = {
  /** User email */
  email: string;
};
export type ResetPasswordDto = {
  /** Password reset token */
  token: string;
  /** New password */
  newPassword: string;
};
export type RefreshTokenDto = {
  /** Refresh token */
  refreshToken: string;
};
export type GetHeroByIdDto = {
  id: number;
  name: string;
  world_id: number;
  user_id: string;
  cha: number;
  con: number;
  dex: number;
  int: number;
  str: number;
  wis: number;
  notes: string;
  armorBonus: number;
  armor_types_prof: string[];
  buff_hp: number;
  copper_coins: number;
  silver_coins: number;
  electrum_coins: number;
  gold_coins: number;
  platinum_coins: number;
  current_hp: number;
  image_url: string;
  max_hp: number;
  temp_hp: number;
  subrace_id: number;
  race_id: number;
  weapon_types_prof: string[];
  creation_done: boolean;
  traits: string;
  ideals: string;
  bounds: string;
  flaws: string;
  languages_ids: string[];
  tools_ids: string[];
  armor_id: number;
  shield_id: number;
  armor_bonus: number;
  experience: number;
  warlock_pact_id: number;
};
export type DeleteHeroDto = {
  id: number;
};
export type CreateTraitDto = {
  /** Unique ID of the trait */
  id: string;
  /** Russian name of the trait */
  name_rus: string;
  /** English name of the trait */
  name_eng: string;
  /** Requirements of the trait */
  requirements: string;
  /** Description of the trait */
  description: string;
  /** Source of the trait */
  source: string;
  /** Indicates if the trait is homebrew */
  homebrew: boolean;
};
export type UpdateTraitDto = {
  /** Unique ID of the trait */
  id: string;
  /** Russian name of the trait */
  name_rus: string;
  /** English name of the trait */
  name_eng: string;
  /** Requirements of the trait */
  requirements: string;
  /** Description of the trait */
  description: string;
  /** Source of the trait */
  source: string;
  /** Indicates if the trait is homebrew */
  homebrew: boolean;
};
export type CreateFeatureDto = {
  /** Unique ID of the feature */
  id: string;
  /** Class ID */
  class_id?: number;
  /** Subclass ID */
  subclass_id?: number;
  /** Description of the feature */
  description?: string;
  /** Level of the feature */
  level?: number;
  /** Name of the feature */
  name: string;
  /** Upgrade information for the feature */
  upgrade?: string;
  /** Source of the feature */
  source: string;
  /** Race ID */
  race_id?: number;
  /** Subrace ID */
  subrace_id?: number;
  /** Spell ID */
  spell_id?: string;
};
export type UpdateFeatureDto = {
  /** Unique ID of the feature */
  id: string;
  /** Class ID */
  class_id?: number;
  /** Subclass ID */
  subclass_id?: number;
  /** Description of the feature */
  description?: string;
  /** Level of the feature */
  level?: number;
  /** Name of the feature */
  name: string;
  /** Upgrade information for the feature */
  upgrade?: string;
  /** Source of the feature */
  source: string;
  /** Race ID */
  race_id?: number;
  /** Subrace ID */
  subrace_id?: number;
  /** Spell ID */
  spell_id?: string;
};
export type CreateLanguageDto = {
  /** the language spoken by the characters */
  name: string;
};
export type UpdateLanguageDto = {
  /** the language spoken by the characters */
  name: string;
};
export type CreateToolDto = {
  /** the tool spoken by the characters */
  name: string;
};
export type UpdateToolDto = {
  /** the tool spoken by the characters */
  name: string;
};
export type CreateWorldDto = {
  /** Who created the world */
  user_id: string;
  /** World name */
  name: string;
  /** World sources */
  sources: string[];
};
export type UpdateWorldDto = {
  /** Who created the world */
  user_id: string;
  /** World name */
  name: string;
  /** World sources */
  sources: string[];
};
export type CreateRuleDto = {
  /** Rule id */
  id: string;
  /** Rule name */
  name: string;
  /** Rule description */
  description: string;
};
export type UpdateRuleDto = {
  /** Rule id */
  id: string;
  /** Rule name */
  name: string;
  /** Rule description */
  description: string;
};
export type CreateMonsterDto = {
  /** Unique identifier of the monster. */
  id: number;
  /** Russian name of the monster. */
  name_rus: string;
  /** English name of the monster. */
  name_eng: string;
  /** Size details of the monster in JSON format. */
  size: object;
  /** Type of the monster. */
  type: string;
  /** Challenge rating of the monster, represents its difficulty. */
  challenge_rating: string;
  /** Unique URL slug for the monster entry. */
  url: string;
  /** Source of the monster information. */
  source: string;
  /** Experience points awarded for defeating the monster. */
  experience: number;
  /** Armor class of the monster. */
  armor_class: number;
  /** List of armors the monster is wearing. */
  armors: string[];
  /** Hit points and remaining health of the monster. */
  hits: object;
  /** Speed types and values for the monster in JSON format. */
  speed: string[];
  /** Ability scores of the monster, stored in JSON. */
  ability: object;
  /** Skills the monster is proficient in. */
  skills: string[];
  /** Senses of the monster. */
  senses: string[];
  /** Languages the monster can speak. */
  languages: string[];
  /** Feats the monster has access to. */
  feats: string[];
  /** Actions the monster can take during combat. */
  actions: string[];
  /** Bonus actions the monster can perform. */
  bonus_actions: string[];
  /** Tags categorizing the monster. */
  tags: string[];
  /** Array of image paths for the monster. */
  images: string[];
  /** Alignment of the monster. */
  alignment: string;
  /** Saving throw proficiencies of the monster. */
  saving_throws: string[];
  /** Condition immunities of the monster. */
  condition_immunities: string[];
  /** Damage immunities the monster possesses. */
  damage_immunities: string[];
  /** Proficiency bonus of the monster. */
  proficiency_bonus: string;
  /** Reactions available to the monster. */
  reactions: string[];
  /** Description of the reaction ability. */
  reaction: string;
  /** Damage resistances of the monster. */
  damage_resistances: string[];
  /** Legendary abilities of the monster. */
  legendary: object;
  /** Abilities the monster can use in its lair. */
  lair: object;
};
export type UpdateMonsterDto = {
  /** Unique identifier of the monster. */
  id?: number;
  /** Russian name of the monster. */
  name_rus?: string;
  /** English name of the monster. */
  name_eng?: string;
  /** Size details of the monster in JSON format. */
  size?: object;
  /** Type of the monster. */
  type?: string;
  /** Challenge rating of the monster, represents its difficulty. */
  challenge_rating?: string;
  /** Unique URL slug for the monster entry. */
  url?: string;
  /** Source of the monster information. */
  source?: string;
  /** Experience points awarded for defeating the monster. */
  experience?: number;
  /** Armor class of the monster. */
  armor_class?: number;
  /** List of armors the monster is wearing. */
  armors?: string[];
  /** Hit points and remaining health of the monster. */
  hits?: object;
  /** Speed types and values for the monster in JSON format. */
  speed?: string[];
  /** Ability scores of the monster, stored in JSON. */
  ability?: object;
  /** Skills the monster is proficient in. */
  skills?: string[];
  /** Senses of the monster. */
  senses?: string[];
  /** Languages the monster can speak. */
  languages?: string[];
  /** Feats the monster has access to. */
  feats?: string[];
  /** Actions the monster can take during combat. */
  actions?: string[];
  /** Bonus actions the monster can perform. */
  bonus_actions?: string[];
  /** Tags categorizing the monster. */
  tags?: string[];
  /** Array of image paths for the monster. */
  images?: string[];
  /** Alignment of the monster. */
  alignment?: string;
  /** Saving throw proficiencies of the monster. */
  saving_throws?: string[];
  /** Condition immunities of the monster. */
  condition_immunities?: string[];
  /** Damage immunities the monster possesses. */
  damage_immunities?: string[];
  /** Proficiency bonus of the monster. */
  proficiency_bonus?: string;
  /** Reactions available to the monster. */
  reactions?: string[];
  /** Description of the reaction ability. */
  reaction?: string;
  /** Damage resistances of the monster. */
  damage_resistances?: string[];
  /** Legendary abilities of the monster. */
  legendary?: object;
  /** Abilities the monster can use in its lair. */
  lair?: object;
};
export type CreateInvocationDto = {
  /** Invocation id */
  id: string;
  /** Invocation name in Russian */
  name_rus: string;
  /** Invocation name in English */
  name_eng: string;
  /** Invocation requirements */
  requirements: string;
  /** Invocation description */
  description: string;
  /** Invocation source */
  source: string;
  /** Spell_id */
  spell_id: string;
};
export type UpdateInvocationDto = {
  /** Invocation id */
  id: string;
  /** Invocation name in Russian */
  name_rus: string;
  /** Invocation name in English */
  name_eng: string;
  /** Invocation requirements */
  requirements: string;
  /** Invocation description */
  description: string;
  /** Invocation source */
  source: string;
  /** Spell_id */
  spell_id: string;
};
export type CreateApsDto = {
  /** Spell */
  spell_id: string;
  /** Subclass */
  subclass_id?: number;
  /** Class */
  class_id?: number;
};
export type UpdateApsDto = {
  /** Spell */
  spell_id: string;
  /** Subclass */
  subclass_id?: number;
  /** Class */
  class_id?: number;
};
export type CreateWpDto = {
  /** warlock pacts name */
  name: string;
  /** warlock pacts description */
  description: string;
};
export type UpdateWpDto = {
  /** warlock pacts name */
  name: string;
  /** warlock pacts description */
  description: string;
};
export type CreateBmDto = {
  /** world id */
  world_id: number;
  /** initiative */
  initiative?: number;
  /** max hp */
  max_hp?: number;
  /** current hp */
  current_hp?: number;
  /** hero id */
  hero_id?: number;
  /** monster id */
  monster_id?: number;
  /** hidden or no? */
  hidden: boolean;
  /** battle name */
  name?: string;
};
export type UpdateBmDto = {
  /** world id */
  world_id: number;
  /** initiative */
  initiative?: number;
  /** max hp */
  max_hp?: number;
  /** current hp */
  current_hp?: number;
  /** hero id */
  hero_id?: number;
  /** monster id */
  monster_id?: number;
  /** hidden or no? */
  hidden: boolean;
  /** battle name */
  name?: string;
};
export type CreateClassSpellDto = {
  /** Class id */
  class_id: number;
  /** Class id */
  spell_id: string;
};
export type UpdateClassSpellDto = {};
export type CreateFsDto = {
  /** Fighting style name */
  name: string;
  /** Fighting style description */
  description: string;
};
export type UpdateFsDto = {
  /** Fighting style name */
  name: string;
  /** Fighting style description */
  description: string;
};
export type CreateSsDto = {
  /** subclass-spells spell id  */
  spell_id: string;
  /** subclass-spells subclass id */
  subclass_id: number;
};
export type UpdateSsDto = {
  /** subclass-spells spell id  */
  spell_id: string;
  /** subclass-spells subclass id */
  subclass_id: number;
};
export type CreateTsDto = {
  /** Trait spell trait id */
  trait_id: string;
  /** Trait spell spell id */
  spell_id: string;
};
export const {
  useUsersControllerCreateMutation,
  useUsersControllerFindAllQuery,
  useUsersControllerFindOneQuery,
  useUsersControllerUpdateMutation,
  useUsersControllerRemoveMutation,
  useUsersControllerUpdateRoleMutation,
  useAuthControllerRegisterMutation,
  useAuthControllerSendEmailMutation,
  useAuthControllerVerifyEmailQuery,
  useAuthControllerLoginMutation,
  useAuthControllerForgotPasswordMutation,
  useAuthControllerResetPasswordMutation,
  useAuthControllerRefreshTokenMutation,
  useAuthControllerLogoutMutation,
  useHeroControllerGetAllHeroesQuery,
  useHeroControllerCreateHeroMutation,
  useHeroControllerGetHeroByIdQuery,
  useHeroControllerUpdateHeroMutation,
  useHeroControllerDeleteHeroMutation,
  useRaceControllerGetAllRacesQuery,
  useRaceControllerCreateraceMutation,
  useRaceControllerGetRaceByIdQuery,
  useRaceControllerUpdateRaceMutation,
  useRaceControllerDeleteRaceMutation,
  useTraitControllerGetAllTraitsQuery,
  useTraitControllerCreateTraitMutation,
  useTraitControllerGetTraitByIdQuery,
  useTraitControllerUpdateTraitMutation,
  useTraitControllerDeleteTraitMutation,
  useFeatureControllerGetAllFeaturesQuery,
  useFeatureControllerCreateFeatureMutation,
  useFeatureControllerGetFeatureByIdQuery,
  useFeatureControllerUpdateFeatureMutation,
  useFeatureControllerDeleteFeatureMutation,
  useLanguageControllerGetAllLanguagesQuery,
  useLanguageControllerCreateLanguageMutation,
  useLanguageControllerGetLanguageByIdQuery,
  useLanguageControllerUpdateLanguageMutation,
  useLanguageControllerDeleteLanguageMutation,
  useToolControllerGetAllToolsQuery,
  useToolControllerCreateToolMutation,
  useToolControllerGetToolByIdQuery,
  useToolControllerUpdateToolMutation,
  useToolControllerDeleteToolMutation,
  useItemControllerGetAllItemsQuery,
  useItemControllerCreateItemMutation,
  useItemControllerGetItemByIdQuery,
  useItemControllerUpdateItemMutation,
  useItemControllerDeleteItemMutation,
  useWorldControllerGetAllWorldsQuery,
  useWorldControllerCreateWorldMutation,
  useWorldControllerGetWorldByIdQuery,
  useWorldControllerUpdateWorldMutation,
  useWorldControllerDeleteWorldMutation,
  useWeaponControllerGetAllWeaponsQuery,
  useWeaponControllerCreateWeaponMutation,
  useWeaponControllerGetWeaponByIdQuery,
  useWeaponControllerUpdateWeaponMutation,
  useWeaponControllerDeleteWeaponMutation,
  useRuleControllerGetAllRulesQuery,
  useRuleControllerCreateRuleMutation,
  useRuleControllerGetRuleByIdQuery,
  useRuleControllerUpdateRuleMutation,
  useRuleControllerDeleteRuleMutation,
  useClassControllerGetAllclassQuery,
  useClassControllerCreateclassMutation,
  useClassControllerGetClassByIdQuery,
  useClassControllerUpdateClassMutation,
  useClassControllerDeleteClassMutation,
  useMonsterControllerCreateMutation,
  useMonsterControllerFindAllQuery,
  useMonsterControllerFindOneQuery,
  useMonsterControllerUpdateMutation,
  useMonsterControllerRemoveMutation,
  useArmorControllerGetAllArmorQuery,
  useArmorControllerCreateArmorMutation,
  useArmorControllerGetArmorByIdQuery,
  useArmorControllerUpdateArmorMutation,
  useArmorControllerDeleteArmorMutation,
  useInvocationControllerGetAllInvocationsQuery,
  useInvocationControllerCreateInvocationMutation,
  useInvocationControllerGetInvocationByIdQuery,
  useInvocationControllerUpdateInvocationMutation,
  useInvocationControllerDeleteInvocationMutation,
  useMitemControllerGetAllMitemsQuery,
  useMitemControllerCreateMitemMutation,
  useMitemControllerGetMitemByIdQuery,
  useMitemControllerUpdateItemMutation,
  useMitemControllerDeleteItemMutation,
  useApsControllerGetAllApsQuery,
  useApsControllerCreateApsMutation,
  useApsControllerGetApsByIdQuery,
  useApsControllerUpdateApsMutation,
  useApsControllerDeleteWorldMutation,
  useWpControllerGetAllWpQuery,
  useWpControllerCreateWorldMutation,
  useWpControllerGetWpByIdQuery,
  useWpControllerUpdateWorldMutation,
  useWpControllerDeleteWorldMutation,
  useBmControllerGetAllBmsQuery,
  useBmControllerCreateBmMutation,
  useBmControllerGetBmByIdQuery,
  useBmControllerUpdateBmMutation,
  useBmControllerDeleteBmMutation,
  useClassSpellsControllerCreateMutation,
  useClassSpellsControllerFindAllQuery,
  useClassSpellsControllerFindOneQuery,
  useClassSpellsControllerUpdateMutation,
  useClassSpellsControllerRemoveMutation,
  useSpellControllerGetAllSpellQuery,
  useSpellControllerCreateSpellMutation,
  useSpellControllerGetSpellByIdQuery,
  useSpellControllerUpdateSpellMutation,
  useSpellControllerDeleteSpellMutation,
  useFsControllerGetAllFsQuery,
  useFsControllerCreateFsMutation,
  useFsControllerGetFsByIdQuery,
  useFsControllerUpdateFsMutation,
  useFsControllerDeleteFsMutation,
  useSsControllerGetAllSsQuery,
  useSsControllerCreateSsMutation,
  useSsControllerGetSsByIdQuery,
  useSsControllerUpdateSsMutation,
  useSsControllerDeleteSsMutation,
  useSubraceControllerGetAllsubraceQuery,
  useSubraceControllerCreateSubraceMutation,
  useSubraceControllerGetSubraceByIdQuery,
  useSubraceControllerUpdateSubraceMutation,
  useSubraceControllerDeleteSubraceMutation,
  useSubclassControllerGetAllSublassesQuery,
  useSubclassControllerCreateSubclassMutation,
  useSubclassControllerGetSubclassbyIdQuery,
  useSubclassControllerUpdateSubclassMutation,
  useSubclassControllerDeleteSubclassMutation,
  useTsControllerGetAllTsQuery,
  useTsControllerCreateTsMutation,
  useTsControllerGetTsByIdQuery,
  useTsControllerUpdateTsMutation,
} = injectedRtkApi;
