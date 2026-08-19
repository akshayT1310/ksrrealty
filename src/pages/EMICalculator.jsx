import React, { useMemo, useState } from "react";
import "./EMICalculator.css";

export default function EMICalculator() {
  const [propertyPrice, setPropertyPrice] = useState(50);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  const calculations = useMemo(() => {
    const propertyAmount = propertyPrice * 100000;

    const downPaymentAmount =
      (propertyAmount * downPayment) / 100;

    const loanAmount =
      propertyAmount - downPaymentAmount;

    const monthlyRate =
      interestRate / 12 / 100;

    const numberOfMonths =
      loanTenure * 12;

    let emi = 0;

    if (monthlyRate === 0) {
      emi = loanAmount / numberOfMonths;
    } else {
      emi =
        (loanAmount *
          monthlyRate *
          Math.pow(
            1 + monthlyRate,
            numberOfMonths
          )) /
        (Math.pow(
          1 + monthlyRate,
          numberOfMonths
        ) - 1);
    }

    const totalPayment =
      emi * numberOfMonths;

    const totalInterest =
      totalPayment - loanAmount;

    return {
      loanAmount,
      emi,
      totalInterest,
      downPaymentAmount,
    };
  }, [
    propertyPrice,
    downPayment,
    interestRate,
    loanTenure,
  ]);

  const formatNumber = (value) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0,
    }).format(Math.round(value));
  };

  const formatLakhs = (value) => {
    return `₹${(value / 100000).toFixed(2)} L`;
  };

  const getProgress = (value, min, max) => {
    return ((value - min) / (max - min)) * 100;
  };

  const handleCustomisePlan = () => {
    const subject =
      "EMI Calculator - Customise My Loan Plan";

    const body = `
Hello KSR Realty Ventures,

I would like to customise my loan plan.

Property Price: ₹${propertyPrice} L
Down Payment: ${downPayment}%
Interest Rate: ${interestRate}%
Loan Tenure: ${loanTenure} Years

Estimated Monthly EMI:
₹${formatNumber(calculations.emi)}

Loan Amount:
${formatLakhs(calculations.loanAmount)}

Estimated Interest:
${formatLakhs(calculations.totalInterest)}
    `;

    window.location.href =
      `mailto:connect@ksrrealtyventures.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="emi-page">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="emi-hero">

        <div className="emi-hero-inner">

          <div className="emi-eyebrow">
            <span />
            KSR REALTY VENTURES
            <span />
          </div>

          <h1>
            Plan your property.
            <br />
            <em>Know your EMI.</em>
          </h1>

          <p>
            Estimate your monthly home loan EMI and
            understand your borrowing plan before
            taking the next step.
          </p>

        </div>

      </section>


      {/* =====================================================
          CALCULATOR
      ===================================================== */}

      <section className="emi-section">

        <div className="emi-container">

          <div className="emi-layout">

            {/* =================================================
                LEFT INFORMATION
            ================================================= */}

            <div className="emi-intro">

              <span className="emi-section-number">
                01
              </span>

              <span className="emi-section-label">
                FINANCIAL PLANNING
              </span>

              <h2>
                Calculate your
                <br />
                <em>EMI with clarity.</em>
              </h2>

              <p>
                Adjust the property value, down payment,
                interest rate and loan tenure to get an
                estimated monthly EMI instantly.
              </p>

              <div className="emi-info-list">

                <div className="emi-info-item">
                  <span>01</span>

                  <div>
                    <strong>
                      Flexible calculations
                    </strong>

                    <small>
                      Change any value instantly.
                    </small>
                  </div>
                </div>

                <div className="emi-info-item">
                  <span>02</span>

                  <div>
                    <strong>
                      Transparent estimate
                    </strong>

                    <small>
                      See your loan and interest
                      breakdown.
                    </small>
                  </div>
                </div>

                <div className="emi-info-item">
                  <span>03</span>

                  <div>
                    <strong>
                      Plan with confidence
                    </strong>

                    <small>
                      Understand your monthly
                      commitment.
                    </small>
                  </div>
                </div>

              </div>

            </div>


            {/* =================================================
                CALCULATOR CARD
            ================================================= */}

            <div className="emi-card">

              <div className="emi-card-header">

                <h3>
                  Calculate your EMI
                </h3>

                <span>
                  Home Loan
                </span>

              </div>


              {/* PROPERTY PRICE */}

              <div className="emi-control">

                <div className="emi-control-top">

                  <label>
                    Property price
                  </label>

                  <strong>
                    ₹{propertyPrice.toFixed(2)} L
                  </strong>

                </div>

                <input
                  type="range"
                  min="20"
                  max="200"
                  step="0.5"
                  value={propertyPrice}
                  onChange={(e) =>
                    setPropertyPrice(
                      Number(e.target.value)
                    )
                  }
                  className="emi-range"
                  style={{
                    "--progress":
                      `${getProgress(
                        propertyPrice,
                        20,
                        200
                      )}%`,
                  }}
                />

                <div className="emi-range-values">
                  <span>₹20 L</span>
                  <span>₹200 L</span>
                </div>

              </div>


              {/* DOWN PAYMENT */}

              <div className="emi-control">

                <div className="emi-control-top">

                  <label>
                    Down payment
                  </label>

                  <strong>
                    {downPayment}%
                  </strong>

                </div>

                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={downPayment}
                  onChange={(e) =>
                    setDownPayment(
                      Number(e.target.value)
                    )
                  }
                  className="emi-range"
                  style={{
                    "--progress":
                      `${getProgress(
                        downPayment,
                        0,
                        50
                      )}%`,
                  }}
                />

                <div className="emi-range-values">
                  <span>0%</span>
                  <span>50%</span>
                </div>

              </div>


              {/* INTEREST RATE */}

              <div className="emi-control">

                <div className="emi-control-top">

                  <label>
                    Interest rate
                  </label>

                  <strong>
                    {interestRate.toFixed(1)}%
                  </strong>

                </div>

                <input
                  type="range"
                  min="5"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(
                      Number(e.target.value)
                    )
                  }
                  className="emi-range"
                  style={{
                    "--progress":
                      `${getProgress(
                        interestRate,
                        5,
                        15
                      )}%`,
                  }}
                />

                <div className="emi-range-values">
                  <span>5%</span>
                  <span>15%</span>
                </div>

              </div>


              {/* LOAN TENURE */}

              <div className="emi-control">

                <div className="emi-control-top">

                  <label>
                    Loan tenure
                  </label>

                  <strong>
                    {loanTenure} yrs
                  </strong>

                </div>

                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanTenure}
                  onChange={(e) =>
                    setLoanTenure(
                      Number(e.target.value)
                    )
                  }
                  className="emi-range"
                  style={{
                    "--progress":
                      `${getProgress(
                        loanTenure,
                        1,
                        30
                      )}%`,
                  }}
                />

                <div className="emi-range-values">
                  <span>1 yr</span>
                  <span>30 yrs</span>
                </div>

              </div>


              {/* =================================================
                  RESULT
              ================================================= */}

              <div className="emi-result">

                <span className="emi-result-label">
                  Estimated monthly EMI
                </span>

                <div className="emi-amount">
                  ₹{formatNumber(
                    calculations.emi
                  )}
                </div>

                <div className="emi-result-details">

                  <div>
                    <span>
                      Loan
                    </span>

                    <strong>
                      {formatLakhs(
                        calculations.loanAmount
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Interest
                    </span>

                    <strong>
                      {formatLakhs(
                        calculations.totalInterest
                      )}
                    </strong>
                  </div>

                  <div>
                    <span>
                      Down payment
                    </span>

                    <strong>
                      {formatLakhs(
                        calculations.downPaymentAmount
                      )}
                    </strong>
                  </div>

                </div>

              </div>


              {/* BUTTON */}

              <button
                type="button"
                className="emi-button"
                onClick={handleCustomisePlan}
              >
                <span>
                  Customise my loan plan
                </span>

                <b>↗</b>
              </button>

              <p className="emi-disclaimer">
                This calculator provides an estimated
                EMI for planning purposes only. Actual
                loan terms may vary by lender.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="emi-bottom">

        <div className="emi-bottom-inner">

          <span>
            READY TO TAKE THE NEXT STEP?
          </span>

          <h2>
            Let's find the right
            <br />
            <em>property for you.</em>
          </h2>

          <a
            href="mailto:connect@ksrrealtyventures.com"
          >
            Talk to KSR Realty
            <b>↗</b>
          </a>

        </div>

      </section>

    </main>
  );
}