import "./style.css"
import { getServerTranslation } from "@/i18n/server"

export default async function PrivacyPolicyPage() {
    const { t } = await getServerTranslation("privacy-policy")
    return (
        <main>
            <section className="privacy-policy-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="privacy-content">
                                <h2>
                                    <strong>{t("privacyPolicy.mainTitle")}</strong>
                                </h2>
                                <p>{t("privacyPolicy.introduction.paragraph1")}</p>
                                <p>{t("privacyPolicy.introduction.paragraph2")}</p>

                                <div className="privacy-section">
                                    <h2>
                                        <strong>{t("privacyPolicy.informationCollection.title")}</strong>
                                    </h2>
                                    <p>
                                        <strong>{t("privacyPolicy.informationCollection.contactInfo.label")}</strong>{" "}
                                        {t("privacyPolicy.informationCollection.contactInfo.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.informationCollection.paymentInfo.label")}</strong>{" "}
                                        {t("privacyPolicy.informationCollection.paymentInfo.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.informationCollection.postInfo.label")}</strong>{" "}
                                        {t("privacyPolicy.informationCollection.postInfo.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.informationCollection.demographicInfo.label")}</strong>{" "}
                                        {t("privacyPolicy.informationCollection.demographicInfo.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.informationCollection.otherInfo.label")}</strong>{" "}
                                        {t("privacyPolicy.informationCollection.otherInfo.description")}
                                    </p>
                                </div>

                                <div className="privacy-section">
                                    <h2>
                                        <strong>{t("privacyPolicy.extractingInfo.title")}</strong>
                                    </h2>
                                    <p>
                                        <strong>{t("privacyPolicy.extractingInfo.directCollection.label")}</strong>{" "}
                                        {t("privacyPolicy.extractingInfo.directCollection.description")}{" "}
                                        <strong>{t("privacyPolicy.extractingInfo.passiveCollection.label")}</strong>{" "}
                                        {t("privacyPolicy.extractingInfo.passiveCollection.description")}{" "}
                                        <strong>{t("privacyPolicy.extractingInfo.thirdPartyInfo.label")}</strong>{" "}
                                        {t("privacyPolicy.extractingInfo.thirdPartyInfo.description")}
                                    </p>
                                </div>

                                <div className="privacy-section">
                                    <h2>
                                        <strong>{t("privacyPolicy.useOfInfo.title")}</strong>
                                    </h2>
                                    <p>
                                        <strong>{t("privacyPolicy.useOfInfo.contact.label")}</strong>{" "}
                                        {t("privacyPolicy.useOfInfo.contact.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.useOfInfo.respond.label")}</strong>{" "}
                                        {t("privacyPolicy.useOfInfo.respond.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.useOfInfo.improve.label")}</strong>{" "}
                                        {t("privacyPolicy.useOfInfo.improve.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.useOfInfo.trends.label")}</strong>{" "}
                                        {t("privacyPolicy.useOfInfo.trends.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.useOfInfo.security.label")}</strong>{" "}
                                        {t("privacyPolicy.useOfInfo.security.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.useOfInfo.marketing.label")}</strong>{" "}
                                        {t("privacyPolicy.useOfInfo.marketing.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.useOfInfo.transactional.label")}</strong>{" "}
                                        {t("privacyPolicy.useOfInfo.transactional.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.useOfInfo.legal.text")}</strong>
                                    </p>
                                </div>

                                <div className="privacy-section">
                                    <h2>
                                        <strong>{t("privacyPolicy.sharingInfo.title")}</strong>
                                    </h2>
                                    <p>
                                        <strong>{t("privacyPolicy.sharingInfo.serviceProviders.label")}</strong>{" "}
                                        {t("privacyPolicy.sharingInfo.serviceProviders.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.sharingInfo.businessPartners.label")}</strong>{" "}
                                        {t("privacyPolicy.sharingInfo.businessPartners.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.sharingInfo.legalCompliance.label")}</strong>{" "}
                                        {t("privacyPolicy.sharingInfo.legalCompliance.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.sharingInfo.businessSuccessor.label")}</strong>{" "}
                                        {t("privacyPolicy.sharingInfo.businessSuccessor.description")}
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.sharingInfo.otherReasons.label")}</strong>{" "}
                                        {t("privacyPolicy.sharingInfo.otherReasons.description")}
                                    </p>
                                </div>

                                <div className="privacy-section">
                                    <h2>
                                        <strong>{t("privacyPolicy.emailOptOut.title")}</strong>
                                    </h2>
                                    <p>
                                        <strong>{t("privacyPolicy.emailOptOut.optOut.label")}</strong>{" "}
                                        {t("privacyPolicy.emailOptOut.optOut.description")}
                                    </p>
                                </div>

                                <div className="privacy-section">
                                    <h2>
                                        <strong>{t("privacyPolicy.thirdPartySites.title")}</strong>
                                    </h2>
                                    <p>{t("privacyPolicy.thirdPartySites.description")}</p>
                                </div>

                                <div className="privacy-section">
                                    <h2>
                                        <strong>{t("privacyPolicy.agreements.title")}</strong>
                                    </h2>
                                    <p>{t("privacyPolicy.agreements.anonymousVisit")}</p>
                                    <p>{t("privacyPolicy.agreements.policyLink")}</p>
                                    <p>{t("privacyPolicy.agreements.privacyLinkLocation")}</p>
                                    <p>
                                        <strong>{t("privacyPolicy.agreements.policyChanges.label")}</strong>
                                    </p>
                                    <p>{t("privacyPolicy.agreements.policyChanges.method")}</p>
                                    <p>
                                        <strong>{t("privacyPolicy.agreements.personalInfoChange.label")}</strong>
                                    </p>
                                    <ul>
                                        <li>{t("privacyPolicy.agreements.personalInfoChange.methods.email")}</li>
                                        <li>{t("privacyPolicy.agreements.personalInfoChange.methods.phone")}</li>
                                        <li>{t("privacyPolicy.agreements.personalInfoChange.methods.account")}</li>
                                        <li>{t("privacyPolicy.agreements.personalInfoChange.methods.chat")}</li>
                                    </ul>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.doNotTrack.title")}</strong>
                                    </h3>
                                    <p>{t("privacyPolicy.doNotTrack.description")}</p>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.behavioralTracking.title")}</strong>
                                    </h3>
                                    <p>{t("privacyPolicy.behavioralTracking.description")}</p>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.coppa.title")}</strong>
                                    </h3>
                                    <p>{t("privacyPolicy.coppa.description")}</p>
                                    <p>{t("privacyPolicy.coppa.noMarketingToChildren")}</p>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.fairInfoPractices.title")}</strong>
                                    </h3>
                                    <p>{t("privacyPolicy.fairInfoPractices.description")}</p>
                                    <p>
                                        <strong>{t("privacyPolicy.fairInfoPractices.dataBreach.label")}</strong>
                                    </p>
                                    <p>
                                        <strong>{t("privacyPolicy.fairInfoPractices.dataBreach.notification")}</strong>
                                    </p>
                                    <p>{t("privacyPolicy.fairInfoPractices.dataBreach.timeframe")}</p>
                                    <p>{t("privacyPolicy.fairInfoPractices.individualRedress")}</p>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.canSpam.title")}</strong>
                                    </h3>
                                    <p>{t("privacyPolicy.canSpam.description")}</p>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.emailCollection.title")}</strong>
                                    </h3>
                                    <ul>
                                        <li>{t("privacyPolicy.emailCollection.purposes.sendInfo")}</li>
                                        <li>{t("privacyPolicy.emailCollection.purposes.processOrders")}</li>
                                        <li>{t("privacyPolicy.emailCollection.purposes.additionalInfo")}</li>
                                        <li>{t("privacyPolicy.emailCollection.purposes.marketing")}</li>
                                    </ul>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.canSpamCompliance.title")}</strong>
                                    </h3>
                                    <ul>
                                        <li>{t("privacyPolicy.canSpamCompliance.rules.noFalseInfo")}</li>
                                        <li>{t("privacyPolicy.canSpamCompliance.rules.identifyAds")}</li>
                                        <li>{t("privacyPolicy.canSpamCompliance.rules.includeAddress")}</li>
                                        <li>{t("privacyPolicy.canSpamCompliance.rules.monitorThirdParty")}</li>
                                        <li>{t("privacyPolicy.canSpamCompliance.rules.honorOptOut")}</li>
                                        <li>{t("privacyPolicy.canSpamCompliance.rules.unsubscribeLink")}</li>
                                    </ul>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.unsubscribe.title")}</strong>
                                    </h3>
                                    <p>{t("privacyPolicy.unsubscribe.instructions")}</p>
                                    <p>{t("privacyPolicy.unsubscribe.removal")}</p>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.updates.title")}</strong>
                                    </h3>
                                    <p>{t("privacyPolicy.updates.description")}</p>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.jurisdiction.title")}</strong>
                                    </h3>
                                    <p>{t("privacyPolicy.jurisdiction.description")}</p>
                                </div>

                                <div className="privacy-section">
                                    <h3>
                                        <strong>{t("privacyPolicy.grievance.title")}</strong>
                                    </h3>
                                    <p>{t("privacyPolicy.grievance.description")}</p>
                                    <div className="contact-info">
                                        <p>
                                            <strong>{t("privacyPolicy.grievance.contact.companyName")}</strong>
                                            <br />
                                            {t("privacyPolicy.grievance.contact.address")}
                                            <br />
                                            {t("privacyPolicy.grievance.contact.phone")}
                                            <br />
                                            {t("privacyPolicy.grievance.contact.email")}
                                        </p>
                                    </div>
                                    <p>{t("privacyPolicy.grievance.additionalContact")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </section>
        </main>
    )
}
