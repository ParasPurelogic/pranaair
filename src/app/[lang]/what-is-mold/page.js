"use client"
import "./styles.css"
import "react-multi-carousel/lib/styles.css"

export default function MoldPage() {
  return (
    <main className="mold-page">
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content fadeInUp">
            <img
              className="mold-icon"
              src="https://www.pranaair.com/wp-content/uploads/2023/04/mold.png"
              alt="what is mold?"
            />
            <h1 className="whitetext">
              <span>What is Mold?</span>
            </h1>
            <p className="whitetext">
              <span>
                Mould or mold is a type of fungi that grows in damp, warm, and humid conditions. It can appear as fuzzy
                or slimy patches of black, brown, yellow, green, or white on surfaces such as walls, floors, ceilings,
                and even food items.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* How is mold formed section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              How is <span className="highlight">mold formed?</span>
            </h2>
            <p className="text-center">
              Mold is formed when airborne spores land on surfaces that are moist and warm and are left to grow and
              multiply. Its spores are present in the warm and humid air that can enter indoors through ventilation.
              Once inside, they can settle on surfaces like walls, floors, ceilings, and even household items like
              furniture or clothing. As its spores settle on damp surfaces, they begin to grow and form colonies. These
              colonies produce more spores, which can then spread to other areas of the home or building, leading to
              further its growth. They are generally found in the areas of water damage, such as from leaks or flooding,
              and can also lead to mold growth in walls, carpets, and insulation.
            </p>

            <div className="image-container">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/how-is-mold-formed.jpg"
                alt="how is mold formed?"
                className="content-image"
              />
            </div>
          </div>

          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              Where does <span className="highlight">mold come from?</span>
            </h2>
            <p className="text-center">
              Mold comes from tiny, airborne spores that are present in the environment around us. These spores are
              naturally occurring and can be found both indoors and outdoors. Its spores are microscopic and can carry
              by air currents or attached to objects such as clothing, shoes, or pets. When they land on a surface that
              is moist and warm, they can begin to grow and form colonies. Its growth can exacerbate by poor
              ventilation, which can trap moisture in a building and create conditions conducive to its growth. This is
              especially common in buildings that are tightly sealed for energy efficiency. In summary, it comes from
              naturally occurring spores that are present in the environment, which can settle on surfaces and grow into
              colonies when conditions are right.
            </p>

            <div className="image-container">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/indoor-sources-of-mold.jpg"
                alt="indoor sources of mold"
                className="content-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Health effects section */}
      <section className="health-effects-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              Does mold have <span className="highlight">negative effects</span> on health?
            </h2>
            <p className="text-center">
              Its important to be aware that exposure to it can have negative impacts on your health. There are various
              symptoms that mean you are exposed to it. some of these symptoms include:
            </p>
          </div>

          <div className="symptoms-grid">
            <div className="symptom-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/arrow-icon.png"
                alt="arrow icon"
                className="arrow-icon"
              />
              <p>Allergies triggered by mold cause runny noses, sneezing, nostril irritation</p>
            </div>
            <div className="symptom-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/arrow-icon.png"
                alt="arrow icon"
                className="arrow-icon"
              />
              <p>Breathing problems, coughing, wheezing, etc</p>
            </div>
            <div className="symptom-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/arrow-icon.png"
                alt="arrow icon"
                className="arrow-icon"
              />
              <p>Rashes on the skin and other forms of skin infections</p>
            </div>
            <div className="symptom-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/arrow-icon.png"
                alt="arrow icon"
                className="arrow-icon"
              />
              <p>Nausea, fatigue, and dizziness.</p>
            </div>
          </div>

          <div className="section-content fadeInUp">
            <p className="text-center">
              If a person (depending on their existing medical conditions) is exposed to its spores for a longer
              duration, they can develop serious health issues. Some of these include:
            </p>
          </div>

          <div className="health-conditions-grid">
            <div className="health-condition fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/Hypersensitivity-Pneumonitis-due-to-mold-300x300.png"
                alt="Hypersensitivity Pneumonitis due to mold"
                className="condition-image"
              />
              <h4>Hypersensitivity Pneumonitis</h4>
              <p>A rare but serious condition in which the lungs become inflamed and can cause difficulty breathing.</p>
            </div>
            <div className="health-condition fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/asthma-due-to-mold-300x300.png"
                alt="asthma due to mold"
                className="condition-image"
              />
              <h4>Asthma</h4>
              <p>
                Mold exposure can trigger underlying asthma symptoms and can exacerbate already existing asthma
                conditions.
              </p>
            </div>
          </div>

          <div className="section-content fadeInUp">
            <p className="text-center">
              It is important to take steps to prevent and remediate mold growth to reduce the risk of exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Humidity and mold growth section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              How <span className="highlight">humidity</span> affects <span className="highlight">mold growth</span> and
              how does it affect your health?
            </h2>
            <p className="text-center">
              Heres a table summarizing the levels of it with respect to humidity and their potential health effects:
            </p>
          </div>

          <div className="table-responsive fadeInUp">
            <table className="humidity-table">
              <thead>
                <tr>
                  <th>Humidity Level</th>
                  <th>Mold Level</th>
                  <th>Description</th>
                  <th>Health Effects</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>30-60%</td>
                  <td>Normal</td>
                  <td>Indoor mold levels that are typical and not a cause for concern.</td>
                  <td>No adverse health effects expected from mold</td>
                </tr>
                <tr>
                  <td>61-65%</td>
                  <td>Elevated</td>
                  <td>Indoor mold levels that are significantly elevated and require remediation.</td>
                  <td>May cause allergic reactions, and asthma symptoms in sensitive individuals</td>
                </tr>
                <tr>
                  <td>65-70%</td>
                  <td>High</td>
                  <td>Indoor mold levels that are dangerously high and require immediate action.</td>
                  <td>
                    Can cause severe allergic reactions, asthma attacks, and other respiratory problems, in people with
                    weakened immune systems
                  </td>
                </tr>
                <tr>
                  <td>&gt; 70%</td>
                  <td>Extreme</td>
                  <td>Indoor mold levels that are dangerously high and require immediate action</td>
                  <td>
                    Can cause serious health problems, including permanent lung damage and even death, in individuals
                    with preexisting health conditions.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-content fadeInUp">
            <p className="text-center">
              Its important to note that the above table shows general guidelines and the specific levels and health
              effects can vary depending on the type of mold, the individuals sensitivity to mold, and other factors
              such as temperature, ventilation, and duration of exposure. To prevent its growth and related health
              issues, its recommended to maintain indoor <a href="#">humidity levels</a> between 30-60%
              and promptly address any water damage or moisture issues.
            </p>
          </div>
        </div>
      </section>

      {/* Mold on walls section */}
      <section className="mold-walls-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              Can mold <span className="highlight">grow on walls?</span>
            </h2>
            <p className="text-center">
              Mold can grow on walls when the conditions are favorable for its growth. It needs moisture, warmth, and a
              source of food to grow, and walls can provide all three of these conditions under the right circumstances.
              This happens because:
            </p>

            <div className="image-container">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/mold-grown-on-wall.png"
                alt="mold grown on wall"
                className="wall-mold-image"
              />
            </div>
          </div>

          <div className="factors-grid">
            <div className="factor-item fadeInUp">
              <h4>
                <span className="highlight">Moisture</span>
              </h4>
              <p>
                If there is excess moisture on the wall, whether from a leak, high humidity, or condensation, it can
                provide the perfect environment for mold to grow.
              </p>
            </div>
            <div className="factor-item fadeInUp">
              <h4>
                <span className="highlight">Poor ventilation</span>
              </h4>
              <p>When there is poor ventilation in a room, moisture can accumulate, leading to mold growth.</p>
            </div>
            <div className="factor-item fadeInUp">
              <h4>
                <span className="highlight">Organic material</span>
              </h4>
              <p>
                If there is an organic material on the wall that has been exposed to moisture, it can provide a food
                source for mold.
              </p>
            </div>
            <div className="factor-item fadeInUp">
              <h4>
                <span className="highlight">Darkness</span>
              </h4>
              <p>
                It thrives in dark, damp environments, and if the wall is in an area that does not get much light, it
                can be more prone to mold growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How mold affects home section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              How does <span className="highlight">mold affect</span> my home?
            </h2>
            <p className="text-center">
              Mold and fungi can damage your house. Its growth can compromise the structural integrity of a building and
              cause damage to walls, ceilings, floors, and other surfaces. And it can affect your home in several ways:
            </p>
          </div>

          <div className="effects-list">
            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>Weakening of the structure</h3>
                <p>
                  Mold can weaken the structure of a house by breaking down organic materials such as wood, drywall, and
                  insulation. Over time, this can cause the structure to become unstable and compromise the safety of
                  the building.
                </p>
              </div>
              <div className="effect-icon">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/weakening-of-the-structure.png"
                  alt="weakening of the structure due to mold"
                />
              </div>
            </div>

            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>Staining and discoloration</h3>
                <p>
                  It can leave stains and discoloration which can be difficult to remove and may require extensive
                  restoration work.
                </p>
              </div>
              <div className="effect-icon">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/staining-and-discoloration.png"
                  alt="staining and discoloration due to mold"
                />
              </div>
            </div>

            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>Unpleasant smell</h3>
                <p>
                  The presence of it can create an uncomfortable living environment and negatively impact the
                  marketability of a house.
                </p>
              </div>
              <div className="effect-icon">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/unpleasant-smell.png"
                  alt="unpleasant smell due to mold"
                />
              </div>
            </div>

            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>Health issues</h3>
                <p>
                  Mold that grows within the houses and that comes indoors via ventilation can trigger allergies or
                  asthma for the residents, especially children and old age people.
                </p>
              </div>
              <div className="effect-icon">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/health-issues.png"
                  alt="health issues due to mold"
                />
              </div>
            </div>

            <div className="effect-item fadeInUp">
              <div className="effect-content">
                <h3>Decrease in property value</h3>
                <p>If a house has a mold problem, it may decrease the property value and make it difficult to sell.</p>
              </div>
              <div className="effect-icon">
                <img
                  src="https://www.pranaair.com/wp-content/uploads/2023/04/deacrease-in-property-value.png"
                  alt="decrease in property value due to mold"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mold and fungi comparison section */}
      <section className="content-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              Are <span className="highlight">mold</span> and <span className="highlight">Fungi</span> the same?
            </h2>
            <p className="text-center">
              Mold and fungi are related but not exactly the same thing. Fungi is a broad term that includes a variety
              of organisms, including mushrooms, yeasts, and molds. While all molds are fungi, not all fungi are molds.
              For example, yeasts are a type of fungi that typically grow as single-celled organisms and reproduce
              through cell division. Mushrooms are also a type of fungi, but they grow in specific conditions and are
              often harvested for food. So, while these are a type of fungi, the term fungi encompasses a much broader
              group of organisms.
            </p>
          </div>

          <div className="section-content fadeInUp">
            <h4 className="fungi-heading">THE FUNGI</h4>
            <p className="text-center">Type of fungi includes:</p>
          </div>

          <div className="fungi-types-grid">
            <div className="fungi-type fadeInUp">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/04/73068.jpg" alt="Fungi Type 1" />
            </div>
            <div className="fungi-type fadeInUp">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/04/73077.jpg" alt="Fungi Type 2" />
            </div>
            <div className="fungi-type fadeInUp">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/04/73059.jpg" alt="Fungi Type 3" />
            </div>
          </div>

          <div className="section-content fadeInUp">
            <h2 className="air_heading">How to prevent mold growth?</h2>
          </div>

          <div className="prevention-grid">
            <div className="prevention-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/ventilation.png"
                alt="ventilation to reduce mold"
              />
              <h4>Improvements Needed</h4>
              <p>
                Fixing leaks, improving ventilation, and controlling humidity levels to keep indoor air quality healthy.
              </p>
            </div>
            <div className="prevention-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/dehumidifier.png"
                alt="dehumidifier to reduce mold"
              />
              <h4>Moisture Control</h4>
              <p>
                Addressing any moisture issues in the home or building, improving ventilation, and using air filters or
                dehumidifiers.
              </p>
            </div>
            <div className="prevention-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/control-humidity.png"
                alt="control humidity to redue mold"
              />
              <h4>Controlling Humidity</h4>
              <p>
                Its also important to keep the humidity level in your home below 60 percent and to clean and dry any
                areas affected by water damage within 24-48 hours.
              </p>
            </div>
            <div className="prevention-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/eliminating-moiture.png"
                alt="eliminating moisture to reduce mold"
              />
              <h4>Eliminating Moisture</h4>
              <p>It needs moisture to grow and thrive, so if you remove the moisture source, it will eventually die.</p>
            </div>
            <div className="prevention-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/prevent-long-term-mold.png"
                alt="prevent long term mold"
              />
              <h4>Long-Term Mold Prevention</h4>
              <p>
                Some types of it can remain dormant for a long time and reactivate when conditions are favorable again,
                so its important to completely eliminate the moisture source and address any underlying issues that may
                have caused the its growth in the first place.
              </p>
            </div>
            <div className="prevention-item fadeInUp">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/04/mold-removal.png" alt="mold removal" />
              <h4>Mold Removal: Proper Procedures</h4>
              <p>
                Simply drying out the affected area may not be enough to eliminate the mold, especially if it has spread
                to porous materials such as carpet, insulation, or drywall. In these cases, the affected materials may
                need to be removed and replaced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to know if house has mold section */}
      <section className="detection-section">
        <div className="container">
          <div className="section-content fadeInUp">
            <h2 className="air_heading">
              <span className="highlight">How to know</span> if my house has mold?
            </h2>
            <p className="text-center">
              There are many ways in which we can find out if it is present in a house. These are:
            </p>
          </div>

          <div className="detection-grid">
            <div className="detection-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/musty-smell-due-to-mold.png"
                alt="musty smell due to mold"
              />
              <h4>Musty smell</h4>
              <p>
                There is a certain musty and unpleasant smell when there is potential mold growth. If your house
                develops this kind of smell suddenly, it could be a sign of its growth.
              </p>
            </div>
            <div className="detection-item fadeInUp">
              <img src="https://www.pranaair.com/wp-content/uploads/2023/04/visible-mold.png" alt="visible mold" />
              <h4>Look for any visible mold</h4>
              <p>
                Any black or green spots on the wall, ceilings, floors, or other surfaces are visible signs of its
                growth. It may also have a fuzzy or slimy texture.
              </p>
            </div>
            <div className="detection-item fadeInUp">
              <img
                src="https://www.pranaair.com/wp-content/uploads/2023/04/temperature-humidity-level.png"
                alt="temperature & humidity level"
              />
              <h4>Humidity & Temperature</h4>
              <p>
                Mold grows in humidity over 60% and temperatures between 20°C to 30°C. When these levels are within this
                range, mold spores can begin to grow and spread.
              </p>
            </div>
          </div>

          <div className="section-content fadeInUp">
            <p className="text-center">
              Timely detection of mold growth is crucial because it not only causes structural damage to the house and
              produces unpleasant odors, but also poses a risk to the health of those living in the affected
              environment.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

