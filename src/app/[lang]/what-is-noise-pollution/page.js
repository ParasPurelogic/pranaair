"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"

export default function NoisePollutionPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ paddingTop: "30px", paddingBottom: "60px", backgroundColor: "#8789ab" }}
      >
        <div className="container">
          <div className="text-center" style={{ paddingTop: "15px" }}>
            <img
              className="aligncenter"
              src="https://www.pranaair.com/wp-content/uploads/2023/03/noise-pollution.png"
              alt="what is noise pollution"
              width="200"
              height="221"
            />
            <h1 className="whitetext" style={{ textAlign: "center" }}>
              <span className="heading_top_white" style={{ fontSize: "50pt", lineHeight: "1.1" }}>
                What is Noise pollution?
              </span>
            </h1>
            <p className="whitetext topsection" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "16pt" }}>
                Noise is a term used to describe any excessive or unwanted sound that can negatively impact humans and
                animals. As it causing physical and psychological stress to those who are exposed to it for longer
                durations. It is usually caused by human activities. Such as transportation, construction, industrial
                activities, and recreational activities. And it causes noise pollution.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Sound vs Noise Section */}
      <section className="sound-vs-noise" style={{ paddingBottom: "60px", backgroundColor: "#ffffff" }}>
        <div className="container">
          <div style={{ paddingTop: "15px" }}>
            <div className="air_heading">
              <h2 className="headingfont" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "36pt" }}>Difference between</span>
              </h2>
              <h2 className="headingfont" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "36pt" }}>
                  <span style={{ color: "#f099cf" }}>Sound </span>and <span style={{ color: "#f099cf" }}>Noise</span>
                </span>
              </h2>
            </div>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                Noise and sound are two related but distinct concepts in acoustics and communication. Sound refers to
                any audible vibration of air particles that propagate through a medium, such as air, water, or solids.
                Hence, it is a physical phenomenon that can perceive by the human ear and has characteristics such as
                frequency, amplitude, and waveform.
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                On the other hand, noise refers to any unwanted or disturbing sound that causes physical discomfort.
                Because, it is a type of sound that is considered undesirable or irrelevant in a particular context or
                situation. Noise can characterize by its randomness, irregularity, or unpredictability. And it can arise
                from various sources, such as machinery, traffic, crowds, or environmental factors.
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                Thus, the main difference between noise and sound is that sound is a physical phenomenon. And it can be
                intentional or desired. While noise is a subjective perception of sound that is unwanted or distracting.
                Additionally, while sound can have positive effects on human emotions and behavior. Noise can cause
                stress, annoyance, or even health problems in certain cases.
              </span>
            </p>
            <img
              className="size-large aligncenter"
              src="https://www.pranaair.com/wp-content/uploads/2023/03/differences-of-sound-and-noise-1024x390.jpg"
              alt="differences of sound and noise"
              width="1024"
              height="390"
            />
          </div>
        </div>
      </section>

      {/* When Noise Irritates Section */}
      <section
        className="noise-irritation"
        style={{ paddingTop: "50px", paddingBottom: "60px", backgroundColor: "#f0f0f3" }}
      >
        <div className="container">
          <div style={{ paddingTop: "15px" }}>
            <h2 className="air_heading" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>
                When can <span style={{ color: "#8789ab" }}>noise irritate you?</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt", color: "#646478" }}>
                When noise irritates you, it can cause physical and psychological discomfort, stress, and distraction.
                The degree of irritation can vary depending on the type, intensity, duration, and frequency of the
                noise. As well as individual factors such as personality, mood, and sensitivity to sound.
              </span>
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "18pt", color: "#646478" }}>Common signs of noise irritation include:</span>
            </p>
          </div>

          <div className="row" style={{ paddingTop: "25px" }}>
            <div className="col-md-3 noisesign">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ color: "#8789ab" }}>Annoyance</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Feeling agitated, frustrated, </span>
                <span style={{ fontSize: "14pt" }}>or impatient due to the noise.</span>
              </p>
            </div>
            <div className="col-md-3 noisesigns">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ color: "#8789ab" }}>Distraction</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Having difficulty focusing, concentrating, or completing tasks due to noise.
                </span>
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/03/signs-of-noise-pollution.png"
                alt="noise irritation"
                width="100%"
                height="auto"
              />
              <div className="noisesigns">
                <h3 style={{ textAlign: "center" }}>
                  <span style={{ color: "#8789ab" }}>Stress</span>
                </h3>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>Feeling tense, anxious, or overwhelmed due to the noise.</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 noisesign">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ color: "#8789ab" }}>Sleep disturbances</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Having difficulty falling or staying asleep due to the noise.</span>
              </p>
            </div>
            <div className="col-md-3 noisesigns">
              <h3 style={{ textAlign: "center" }}>
                <span style={{ color: "#8789ab" }}>Discomfort</span>
              </h3>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Experiencing physical discomforts, such as headaches, nausea, or muscle tension due to the noise.
                </span>
              </p>
            </div>
            <div className="col-md-12 noisesigns">
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt", color: "#646478" }}>
                  To avoid or reduce noise irritation, it is important to identify the sources of noise. As to minimize
                  exposure to them. And to use protective measures such as earplugs or noise-canceling headphones.
                  Additionally, creating a quiet and peaceful environment, practicing relaxation techniques, and
                  engaging in stress-reducing activities can help alleviate the negative effects of noise on your
                  well-being.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Noise Pollution Section */}
      <section className="noise-pollution-definition" style={{ paddingTop: "50px" }}>
        <div className="container">
          <div style={{ paddingTop: "15px" }}>
            <h2 className="air_heading" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>
                What is <span style={{ color: "#8789ab" }}>noise pollution?</span>
              </span>
            </h2>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                Unwanted, disturbing, and distractive levels of sound that can cause discomfort to humans and animals is
                called noise pollution. It can also affect wildlife by interfering with their communication, migration
                patterns, and feeding habits. Moreover, it can also have ecological effects, such as the disruption of
                animal behavior, communication, and migration patterns.
              </span>
            </p>
          </div>
          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/03/what-is-noise-pollution.png"
            alt="noise pollution definition"
            width="100%"
            height="auto"
            style={{ paddingTop: "25px", paddingBottom: "60px" }}
          />
        </div>
      </section>

      {/* Causes of Noise Pollution Section */}
      <section
        className="causes-noise-pollution"
        style={{ paddingTop: "50px", paddingBottom: "50px", backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div style={{ paddingBottom: "35px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>
                <strong>
                  <span style={{ lineHeight: "1" }}>
                    <span style={{ color: "#8789ab" }}>Causes</span> of noise pollution
                  </span>
                </strong>
              </span>
            </h2>
            <p className="air_heading" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                Various human activities cause noise pollution. This can result in discomfort experienced by humans
                especially small children and the elderly and animals. Some common sources of noise pollution include:
              </span>
            </p>
          </div>

          <div className="row" style={{ paddingBottom: "10px" }}>
            <div className="col-md-4 text-center">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/indusrial-activities.png"
                alt="noise pollution by industrial activities"
                width="170"
                height="170"
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Industrial Activities</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>
                C&amp;D activities, industrial processes, loud machinery processes, etc. can generate noise. Moreover,
                excessive noise from industrial processes can reduce productivity and increase worker safety risks.
              </span>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4 text-center">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/entertainment-activities.png"
                alt="noise pollution by entertainment activities"
                width="170"
                height="170"
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Entertainment activities</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>
                Loud music, fireworks, etc. can cause an excessive amount of noise. Long-term exposure to loud noise
                from recreational activities can also cause hearing loss and other related health problems.
              </span>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4 text-center">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/urbanization.png"
                alt="noise pollution by urbanization"
                width="170"
                height="170"
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Urbanization</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>
                Increased urbanization, including the construction of buildings and roads, can lead to increased noise
                pollution. Noise pollution in urban areas can also have an impact on wildlife. As by changing their
                behaviour and communication patterns.
              </span>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4 text-center">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/natural-disasters.png"
                alt="noise pollution by natural disasters"
                width="170"
                height="170"
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Natural disasters</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>
                Natural disasters such as earthquakes, hurricanes, volcanic eruptions, tornadoes, and thunderstorms can
                also cause noise pollution. As through the sound of strong winds, thunder, and other related sounds.
              </span>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "25px" }}>
            <div className="col-md-4 text-center">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/household-activities.png"
                alt="noise pollution by household activities"
                width="170"
                height="170"
              />
            </div>
            <div className="col-md-8">
              <h4>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Household activities</span>
                </strong>
              </h4>
              <span style={{ fontSize: "14pt" }}>
                Various household activities such as vacuum cleaning, blenders, and certain household appliances can
                generate noise. Noise can be annoying to family members, neighbours, and even pets, resulting in
                increased stress.
              </span>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "30px" }}>
            <div className="col-md-12">
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  To mitigate the negative effects of noise pollution, various strategies have used. As by including
                  noise barriers, soundproofing, and regulations to limit noise levels from various sources.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO Recommendation Section */}
      <section className="who-recommendation" style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/loud-noise-speaker.png"
                alt="WHO logo"
                width="148"
                height="164"
              />
            </div>
            <div className="col-md-9">
              <span style={{ fontSize: "14pt" }}>
                The World Health Organization (WHO) and the United States Environmental Protection Agency (EPA)
                recommend reducing environmental noise levels to less than 70 decibels (dBA) during a 24-hour period to
                prevent noise-induced hearing loss (or 75 dBA over an 8-hour period).
              </span>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "40px" }}>
            <div className="col-md-12">
              <h2 className="air_heading" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "36pt" }}>
                  How <span style={{ color: "#8789ab" }}>loud</span> are your{" "}
                  <span style={{ color: "#8789ab" }}>home appliances?</span>
                </span>
              </h2>
            </div>
          </div>

          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/04/noise-from-home-appliances.jpg"
            alt="home appliances noise levels"
            width="100%"
            height="auto"
            style={{ paddingTop: "30px" }}
          />

          <div className="row" style={{ paddingTop: "35px" }}>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>32 to 80 (dB)</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Refrigerators and air conditioning units</span>
              </p>
              <div className="homeappliance" style={{ textAlign: "center" }}></div>
            </div>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>56 to 80 (dB)</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Vacuum Cleaners and blenders</span>
              </p>
              <div className="homeappliance"></div>
            </div>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>47 to 65 (dB)</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Washing machines and dishwashers</span>
              </p>
            </div>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}> 85 to 110 (dB)</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Smoke alarms in the building</span>
              </p>
            </div>
            <div className="col-md-2">
              <h4 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ fontSize: "14pt" }}>Up to 100 (dB)</span>
                </strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Home theatre and soundbars</span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "40px" }}>
            <div className="col-md-12">
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  It is important to keep in mind in the context of noise pollution that long term exposure to noise
                  levels exceeding 70 dB can induce hearing loss over time. Furthermore, noise levels exceeding 85
                  decibels (dB) can be hazardous after only a few hours of exposure, while levels above 100 decibels
                  (dB) can cause rapid hearing impairment. To safeguard your hearing and overall well-being, its
                  critical to monitor sound levels and take efforts to limit noise pollution in the home, such as
                  choosing quieter appliances or installing soundproofing materials.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acoustics Section */}
      <section className="acoustics" style={{ marginTop: "50px", paddingTop: "50px", backgroundColor: "#f7f7f8" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>
              What is <span style={{ color: "#8789ab" }}>Acoustics</span> and
            </span>
            <span style={{ fontSize: "36pt" }}>
              how is it related to <span style={{ color: "#8789ab" }}>Noise pollution?</span>
            </span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              Acoustics are critical for the efficient operation of a wide range of settings, including corporate
              offices, retail stores, restaurants, performance halls, home theatres, and even private spaces such as
              bathrooms and living rooms where noise control is critical. This enables comfortable working conditions, a
              good dining experience, improved audio quality for entertainment, and the creation of an engaging ambiance
              that attracts and retains people.
            </span>
          </p>

          <div style={{ paddingTop: "50px" }}>
            <h2 style={{ textAlign: "center" }}>
              <span style={{ fontSize: "36pt" }}>
                ACOUSTIC <span style={{ color: "#8789ab" }}>BUILDING COMFORT</span>
              </span>
            </h2>
            <p className="textbox" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                The degree of sound quality and comfort within a building is referred to as acoustic building comfort.
                It is frequently assessed in terms of noise levels, as excessive noise can cause residents discomfort,
                stress, and even health problems.
              </span>
            </p>
          </div>

          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/04/acoustic-building-comfort.png"
            alt="acoustic building comfort"
            width="100%"
            height="auto"
            style={{ paddingTop: "20px" }}
          />

          <div style={{ marginBottom: "50px", paddingTop: "30px" }}>
            <p className="textbox" style={{ textAlign: "center" }}>
              <span style={{ fontSize: "14pt" }}>
                To calculate acoustic building comfort with the help of monitored noise levels in decibels (dB), a
                number of factors need to consider. These include:
              </span>
            </p>
          </div>

          <div className="row flexicon" style={{ marginBottom: "50px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <p style={{ textAlign: "left" }}>
                <img
                  className="alignleft"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/frequency-of-noise.png"
                  alt="frequency of noise"
                  width="69"
                  height="auto"
                />
                <span style={{ fontSize: "14pt" }}>Frequency of noise</span>
              </p>
            </div>
            <div className="col-md-2">
              <p style={{ textAlign: "left" }}>
                <img
                  className="alignleft"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/duration-of-noise.png"
                  alt="duration of noise"
                  width="69"
                  height="auto"
                />
                <span style={{ fontSize: "14pt" }}>Duration of noise</span>
              </p>
            </div>
            <div className="col-md-2">
              <p style={{ textAlign: "left" }}>
                <img
                  className="alignleft"
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/background-noise.png"
                  alt="background noise levels"
                  width="69"
                  height="auto"
                />
                <span style={{ fontSize: "14pt" }}>Background noise levels</span>
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Acceptable Noise Levels Section */}
      <section
        className="acceptable-noise-levels"
        style={{ marginTop: "50px", marginBottom: "70px", paddingTop: "50px" }}
      >
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>
              Acceptable <span style={{ color: "#8789ab" }}>noise levels</span>
            </span>
            <span style={{ fontSize: "36pt" }}>for indoor environment:</span>
          </h2>

          <div className="row" style={{ paddingTop: "35px" }}>
            <div className="col-md-2"></div>
            <div className="col-md-8" style={{ paddingLeft: "30px" }}>
              <img
                className="alignleft"
                src="https://www.pranaair.com/wp-content/uploads/2023/04/green-300x44.png"
                alt="green"
                width="211"
                height="31"
              />
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontSize: "14pt" }}>Noise levels in sleeping areas should be kept below 35 dB(A).</span>
              </p>
              <img
                className="alignleft"
                src="https://www.pranaair.com/wp-content/uploads/2023/04/light-green-300x44.png"
                alt="light green"
                width="211"
                height="31"
              />
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontSize: "14pt" }}>
                  The Noise levels in living areas should be kept below 45 dB(A).
                </span>
              </p>
              <img
                className="alignleft"
                src="https://www.pranaair.com/wp-content/uploads/2023/04/yellow-300x44.png"
                alt="yellow"
                width="211"
                height="31"
              />
              <p style={{ textAlign: "justify" }}>
                <span style={{ fontSize: "14pt" }}>Noise levels in work areas should be kept below 55 dB(A).</span>
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Fun Fact Section */}
      <section
        className="fun-fact"
        style={{
          borderTopWidth: "70px",
          paddingBottom: "25px",
          backgroundImage: "url(https://www.pranaair.com/wp-content/uploads/2023/04/noise-bg-image.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <h4 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "18pt" }}>
              <strong>Fun Fact</strong>
            </span>
          </h4>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              Humans can typically hear sounds between 20 Hz and 20,000 Hz, but some animals can hear sounds at much
              higher or lower frequencies. For example, dogs can hear frequencies up to 65,000 Hz, while whales can
              communicate with sounds at frequencies as low as 10 Hz.
            </span>
          </p>
        </div>
      </section>

      {/* Excessive Noise Effects Section */}
      <section className="excessive-noise-effects" style={{ marginTop: "40px", paddingTop: "50px" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>
              What can <span style={{ color: "#8789ab" }}>excessive noise do?</span>
            </span>
          </h2>
          <p className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              High noise levels can cause various negative effects on humans, animals, wildlife, and the overall
              ecosystem. Noise in excessive levels can cause:
            </span>
          </p>

          <div className="row">
            <div className="col-md-4">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/stress-and-anxiety.png"
                alt="stress and anxiety due to noise"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Stress and anxiety</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Prolonged exposure to excessive noise can cause stress and anxiety, leading to physical and mental
                  health problems.
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/Interference-with-communication.png"
                alt="Interference with communication due to noise"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Interference with communication</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Excessive noise can make it difficult to communicate, leading to social and psychological problems.
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/Deafness.png"
                alt="Deafness due to noise"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Deafness</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Exposure to high levels of noise can damage the cells in the inner ear, which can lead to hearing loss
                  and deafness.
                </span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "20px", paddingBottom: "40px" }}>
            <div className="col-md-4">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/Troubled-sleep.png"
                alt="Troubled sleep due to noise"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Troubled Sleep</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Prolonged exposure to excessive noise can cause trouble in sleeping whichleads to insomnia and sleep
                  disturbances.
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/High-blood-pressure.png"
                alt="High blood pressure due to noise"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>High Blood Pressure</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Excessive noise can cause hypertension and various cardiovascular problems, especially in old people.
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/Wildlife.png"
                alt="Impact on Health of Wildlife due to noise"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Wildlife</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  High levels of noise can cause disturbances among wildlife. This includes disturbance in mating calls,
                  breeding patterns, etc.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Effects Section */}
      <section className="environmental-effects" style={{ marginTop: "80px", paddingTop: "30px" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>How does noise pollution</span>
          </h2>
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt", color: "#8789ab" }}>affects the environment?</span>
          </h2>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              Noise pollution can have negative effects on the environment, including wildlife and ecosystems.
            </span>
            <span className="air_heading" style={{ fontSize: "14pt" }}>
              Some of these negative effects include:
            </span>
          </p>

          <img
            src="https://www.pranaair.com/wp-content/uploads/2023/03/effects-of-noise-pollution-on-environment.jpg"
            alt="noise pollution effects on environment"
            width="100%"
            height="auto"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          />

          <div className="row" style={{ paddingTop: "30px", paddingBottom: "60px" }}>
            <div className="col-md-3">
              <h4 style={{ textAlign: "center" }}>
                <strong>Changes in community</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Noise pollution can alter the composition of animal communities. A
                </span>
                <span style={{ fontSize: "14pt" }}>s some species are more sensitive to noise than others.</span>
              </p>
            </div>
            <div className="col-md-3">
              <h4 style={{ textAlign: "center" }}>
                <strong>Habitat loss</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Noise pollution can cause animals to avoid certain areas. It </span>
                <span style={{ fontSize: "14pt" }}>can lead to habitat loss and fragmentation.</span>
              </p>
            </div>
            <div className="col-md-3">
              <h4 style={{ textAlign: "center" }}>
                <strong>Changes in plant growth</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Excessive noise can affect the growth and development of plants. It l
                </span>
                <span style={{ fontSize: "14pt" }}>eads to the changes in the structure of ecosystems.</span>
              </p>
            </div>
            <div className="col-md-3">
              <h4 style={{ textAlign: "center" }}>
                <strong>Ecosystem imbalance</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  The negative effects of noise pollution on animals and plants can{" "}
                </span>
                <span style={{ fontSize: "14pt" }}>lead to imbalances in ecosystems.</span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingBottom: "15px", backgroundColor: "#f9f9f9" }}>
            <div className="col-md-3">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/do-you-know-about-noise.png"
                alt="study icon"
                width="100%"
                height="auto"
              />
            </div>
            <div className="col-md-9">
              <span style={{ fontSize: "14pt" }}>
                According to a study conducted by experts at California Polytechnic State University, human noise
                pollution has an impact on the diversity of plant life in an environment even after the noise is
                eliminated.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Noise Levels Section */}
      <section className="noise-levels" style={{ marginTop: "90px", paddingTop: "20px", paddingBottom: "40px" }}>
        <div className="container">
          <h2 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt" }}>
              What do the <span style={{ color: "#8789ab" }}>noise levels</span> say?
            </span>
          </h2>

          <div style={{ paddingTop: "25px", paddingBottom: "30px" }}>
            <section className="health_effects_section">
              <div className="level_range_cntr health_effect_box">
                <div className="lavel_box">
                  <span>Noise levels</span>
                  <span className="mg_text">
                    <b>dB</b>
                  </span>
                </div>
                <div className="health_color">
                  <span>Health Effects</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>Peace</span>
                  <p>
                    <span>0-40 </span>
                    <span className="mobile_mg_text">dB</span>
                  </p>
                </div>
                <div className="health_color Good_color">
                  <span>No harmful effects</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>Silent</span>
                  <p>
                    <span>41-50</span>
                    <span className="mobile_mg_text">dB</span>
                  </p>
                </div>
                <div className="health_color Satisfactory_color">
                  <span>Minor disturbance, difficulty concentrating</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>Disturbing</span>
                  <p>
                    <span>51-60</span>
                    <span className="mobile_mg_text">(dB</span>
                  </p>
                </div>
                <div className="health_color Moderately_color">
                  <span>Annoyance, sleep disturbance, increased stress levels</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>Bustling</span>
                  <p>
                    <span>61-70</span>
                    <span className="mobile_mg_text">dB</span>
                  </p>
                </div>
                <div className="health_color poor_color">
                  <span>
                    Significant health effects, including hearing loss, high blood pressure, and cardiovascular diseases{" "}
                  </span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>Loud</span>
                  <p>
                    <span>71-80</span>
                    <span className="mobile_mg_text">dB</span>
                  </p>
                </div>
                <div className="health_color verypoor_color">
                  <span>Severe hearing damage, tinnitus (ringing in the ears), and speech interference</span>
                </div>
              </div>
              <div className="level_range_cntr">
                <div className="lavel_box">
                  <span>Extremely Loud</span>
                  <p>
                    <span>81-90(+)</span>
                    <span className="mobile_mg_text">dB</span>
                  </p>
                </div>
                <div className="health_color Severe_color">
                  <span>
                    Permanent hearing loss and other serious health problems, including stress, anxiety, and sleep
                    disturbance
                  </span>
                </div>
              </div>
            </section>
          </div>

          <p style={{ textAlign: "center", marginTop: "35px", paddingBottom: "60px" }}>
            <span style={{ fontSize: "14pt" }}>
              Its important to note that these effects can vary depending on factors such as duration of exposure,
              frequency of exposure, and individual susceptibility to noise. Therefore, its crucial to take steps to
              reduce noise pollution whenever possible, regardless of the noise level.
            </span>
          </p>

          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8" style={{ marginTop: "30px", paddingBottom: "20px" }}>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Some examples of different sound pressure levels measured in decibels (dB):
                </span>
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Noise Levels</th>
                    <th>Indoor</th>
                    <th>Outdoor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>50-60 dB</td>
                    <td>Normal conversation</td>
                    <td>Quiet suburb or light traffic on a highway</td>
                  </tr>
                  <tr>
                    <td>50-60 dB</td>
                    <td>Background music at a low volume</td>
                    <td>Normal conversation or a busy street</td>
                  </tr>
                  <tr>
                    <td>70-80 dB</td>
                    <td>Busy street noise heard from indoors</td>
                    <td>Traffic noise or a motorcycle passing by</td>
                  </tr>
                  <tr>
                    <td>70-75 dB</td>
                    <td>Vacuum cleaner</td>
                    <td>Noisy restaurant kitchen or a jackhammer </td>
                  </tr>
                  <tr>
                    <td>85-100 dB</td>
                    <td>Loud music from speakers</td>
                    <td>Concert music or a car horn</td>
                  </tr>
                  <tr>
                    <td>80-120 dB</td>
                    <td>Power tools</td>
                    <td>Thunder or a jet plane taking off</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      {/* Reducing Noise Pollution Section */}
      <section
        className="reducing-noise-pollution"
        style={{ marginTop: "80px", paddingTop: "60px", backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt", color: "#8789ab" }}>
              Reducing <span style={{ color: "#000000" }}>noise pollution</span>
            </span>
          </h2>
          <p className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              Noise pollution can have negative effects on the environment, including wildlife and ecosystems. Some of
              these negative effects include:
            </span>
          </p>

          <div className="row">
            <div className="col-md-6">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/use-noise-barriers.png"
                alt="use noise barriers"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Use noise barriers</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>Noise barriers can be used to reduce noise </span>
                <span style={{ fontSize: "14pt" }}>pollution from highways, railways, and other sources.</span>
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/plant-trees.png"
                alt="plant trees"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Plant trees</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Trees and vegetation can help absorb sound waves, reducing the amount of noise that reaches people.
                </span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "35px" }}>
            <div className="col-md-6">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/regulators.png"
                alt="government regulations to reduce noise"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Govt. Regulations</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Governments can enforce regulations and standards for noise levels, which can include limits on noise
                  emissions from various sources, and can require noise-reducing technologies to be used.
                </span>
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/insulate-buildings.png"
                alt="insulate buildings to reduce noise pollution"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Insulate buildings</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Insulating buildings can reduce the amount of noise that enters them. This can be done by using
                  double-glazed windows, soundproof curtains, and acoustic panels.
                </span>
              </p>
            </div>
          </div>

          <div className="row" style={{ paddingTop: "10px", paddingBottom: "40px" }}>
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                className="aligncenter"
                src="https://www.pranaair.com/wp-content/uploads/2023/03/educate-people-300x300.png"
                alt="educate people"
                width="300"
                height="300"
              />
              <h4 style={{ textAlign: "center" }}>
                <strong>Educate people</strong>
              </h4>
              <p style={{ textAlign: "center" }}>
                <span style={{ fontSize: "14pt" }}>
                  Educating people about the negative impacts of noise pollution and the ways to control it can be an
                  effective way to raise awareness and encourage action. Overall, controlling noise pollution requires a
                  combination of efforts from individuals, businesses, and governments.
                </span>
              </p>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>

      {/* Precautions Section */}
      <section className="precautions" style={{ marginTop: "60px", marginBottom: "30px" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>
            <span style={{ fontSize: "36pt", color: "#8789ab" }}>
              <span style={{ color: "#000000" }}>When to know</span> precautions are needed?
            </span>
          </h2>
          <p className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              In outdoor settings, the volume of noise can often reach excessive levels. As a result, it is important
              for authorities and other concerned parties to monitor sound levels, particularly in areas where there is
              a high degree of noise pollution, such as construction sites, industrial zones, and other similarly noisy
              environments. This enables them to keep the noise within acceptable limits.
            </span>
          </p>

          <img
            className="aligncenter"
            src="https://www.pranaair.com/wp-content/uploads/2023/03/air-quality-device-to-detect-noise.png"
            alt="air quality device to detect noise"
            width="458"
            height="503"
          />
        </div>
      </section>

      {/* Noise Measuring Devices Section */}
      <section className="noise-measuring-devices" style={{ marginTop: "80px" }}>
        <div className="container">
          <h3 className="air_heading" style={{ textAlign: "center" }}>
            <span style={{ fontSize: "24pt" }}>
              Use a device to measure <span style={{ color: "#8789ab" }}>Noise</span> level
            </span>
            <span style={{ fontSize: "24pt" }}>indoor &amp; outdoor</span>
          </h3>

          <div className="row">
            <div className="col-md-6">
              <a href="https://www.pranaair.com/air-quality-monitor/squair-air-monitor/">
                <img
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-squair-monitor-1024x807.png"
                  alt="prana air squair monitor"
                  width="500"
                  height="auto"
                />
                <h4 style={{ textAlign: "center" }}>
                  <strong>SQUAIR Air Monitor</strong>
                </h4>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    This is an ultimate indoor air quality monitoring device that is designed to keep you informed about
                    the air you breathe. The device is capable of measuring indoor noise level also.
                  </span>
                </p>
              </a>
            </div>
            <div className="col-md-6" style={{ borderTopWidth: "20px" }}>
              <a href="https://www.pranaair.com/air-quality-monitor/ambient-air-monitor/">
                <img
                  className="aligncenter"
                  src="https://www.pranaair.com/wp-content/uploads/2023/03/prana-air-noise-sensor-in-ambient-monitor-1024x1024.png"
                  alt="prana air noise sensor in ambient monitor"
                  width="350"
                  height="auto"
                  style={{ paddingTop: "10px" }}
                />
                <h4 style={{ textAlign: "center" }}>
                  <strong>Ambient Air Monitor</strong>
                </h4>
                <p style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "14pt" }}>
                    This ambient air monitor detects noise and air quality parameters outdoors. This is compact,
                    user-friendly and can be used for real-time data monitoring/alerts.
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

