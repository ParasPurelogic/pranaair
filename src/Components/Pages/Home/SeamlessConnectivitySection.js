
import Image from "next/image"
import Link from "next/link"
import { getServerTranslation } from "@/i18n/server"

export default async function SeamleassConnectivitySection() {
  const { t } = await getServerTranslation("home")
  return (
    <section className="seamless-connective">
      <div className="container">
        <div className="connectivity-header">
          <div className="seamless-connect-heading">
            <h2>{t("seamlessConnectivity.title")}</h2>
          </div>
          <div className="seamless-txt">
            <p>
              {t("seamlessConnectivity.description")}
            </p>
          </div>
        </div>

        <div className="seamless-tab">
          <ul className="nav nav-tabs tabs-header" id="connectivityTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="tab1-seamless-tab"
                data-bs-toggle="tab"
                data-bs-target="#tab1-seamless"
                type="button"
                role="tab"
                aria-controls="tab1-seamless"
                aria-selected="true"
              >
                {t("connectivity.mobileApp")} <i className="tab-arrow"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab2-seamless-tab"
                data-bs-toggle="tab"
                data-bs-target="#tab2-seamless"
                type="button"
                role="tab"
                aria-controls="tab2-seamless"
                aria-selected="false"
              >
                {t("connectivity.webDashboard")} <i className="tab-arrow"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="tab3-seamless-tab"
                data-bs-toggle="tab"
                data-bs-target="#tab3-seamless"
                type="button"
                role="tab"
                aria-controls="tab3-seamless"
                aria-selected="false"
              >
                {t("connectivity.tvApp")} <i className="tab-arrow"></i>
              </button>
            </li>
          </ul>

          <div className="tab-content tab-bg" id="connectivityTabsContent">
            <div
              className="tab-pane fade show active"
              id="tab1-seamless"
              role="tabpanel"
              aria-labelledby="tab1-seamless-tab"
            >
              {/* AQI Mobile App Tab Content */}
              <div className="panel-content">
                <div className="connectivety-tab-text">
                  <ul className="mob-heading">
                    <li>
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/mobile-AQI-APP-icon.png"
                        alt="aqi mobile app logo"
                        width={100}
                        height={100}
                      />
                    </li>
                    <li>
                      <h3>{t("connectivity.mobileAppTitle")}</h3>
                      <h4>{t("connectivity.mobileAppSubtitle")}</h4>
                    </li>
                  </ul>
                  <p>
                    {t("connectivity.mobileAppDescription")}
                  </p>
                  <div className="connect-btn-box">
                    <Link href="https://apps.apple.com/tt/app/aqi/id1439684571" className="iso-btn">
                      <ul className="seamless-connect-btn">
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/app-store.png"
                            alt="ios app logo"
                            width={35}
                            height={35}
                          />
                        </li>
                        <li>
                          <span className="btn-txt-small">  {t("connectivity.downloadO")}</span>
                          <br />
                          <span className="btan-txt">  {t("connectivity.appStore")}</span>
                        </li>
                      </ul>
                    </Link>
                    <Link href="https://play.google.com/store/apps/details?id=com.aqi.data" className="play-store-btn">
                      <ul className="seamless-connect-btn">
                        <li>
                          <Image
                            src="https://www.pranaair.com/wp-content/uploads/2024/07/google-play.png"
                            alt="android app"
                            width={35}
                            height={35}
                          />
                        </li>
                        <li>
                          <span className="btn-txt-small">{t("connectivity.getItOn")}</span>
                          <br />
                          <span className="btan-txt">{t("connectivity.googlePlay")}</span>
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
                <div className="connectivety-tab-bg">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-mobile-air-quality-app.png"
                    alt="AQI mobile app"
                    width={300}
                    height={500}
                    className="app-image"
                  />
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="tab2-seamless"
              role="tabpanel"
              aria-labelledby="tab2-seamless-tab"
            >
              {/* Web-Dashboard Tab Content */}
              <div className="panel-content">
                <div className="connectivety-tab-text">
                  <h3>{t("connectivity.webDashboardTitle")}</h3>
                  <h4>{t("connectivity.webDashboardSubtitle")}</h4>
                  <p>
                    {t("connectivity.webDashboardDescription")}
                  </p>
                  <Link href="https://www.aqi.in/userlogin" className="dashboard-button">
                    <ul className="seamless-connect-btn dash-btn">
                      <li>
                        <Image
                          src="https://www.pranaair.com/wp-content/uploads/2024/07/AQI-api-logo.png"
                          alt="aqi logo"
                          width={40}
                          height={40}
                        />
                      </li>
                      <li>
                        <span className="btn-txt-small"> {t("connectivity.view")}</span>
                        <br />
                        <span className="btan-txt"> {t("connectivity.dashboard")}</span>
                      </li>
                    </ul>
                  </Link>
                </div>
                <div className="connectivety-tab-bg">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/08/aqi-web-dashboard.png"
                    alt="Web dashboard"
                    width={500}
                    height={300}
                    className="web-dash"
                  />
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="tab3-seamless"
              role="tabpanel"
              aria-labelledby="tab3-seamless-tab"
            >
              {/* AQI TV App Tab Content */}
              <div className="panel-content">
                <div className="connectivety-tab-text">
                  <ul className="mob-heading">
                    <li>
                      <Image
                        src="https://www.pranaair.com/wp-content/uploads/2024/08/tv-aqi-app-icon.png"
                        alt="AQI TV app"
                        width={100}
                        height={100}
                      />
                    </li>
                    <li>
                      <h3>{t("connectivity.tvConnectivityTitle")}</h3>
                      <h4>{t("connectivity.tvConnectivitySubtitle")}</h4>
                    </li>
                  </ul>
                  <p>
                    {t("connectivity.tvConnectivityDescription")}
                  </p>
                </div>
                <div className="connectivety-tab-bg">
                  <Image
                    src="https://www.pranaair.com/wp-content/uploads/2024/07/Tv-connectivity.png"
                    alt="TV app"
                    width={500}
                    height={300}
                    className="tv-screen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
