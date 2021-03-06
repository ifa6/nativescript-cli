///<reference path="../.d.ts"/>
"use strict";

class AnalyticsSettingsService implements IAnalyticsSettingsService {
	constructor(private $userSettingsService: UserSettings.IUserSettingsService,
		private $staticConfig: IStaticConfig) { }

	public canDoRequest(): IFuture<boolean> {
		return (() => { return true; }).future<boolean>()();
	}

	public getUserId(): IFuture<string> {
		return this.$userSettingsService.getSettingValue<string>(this.$staticConfig.ANALYTICS_INSTALLATION_ID_SETTING_NAME);
	}
}
$injector.register("analyticsSettingsService", AnalyticsSettingsService);