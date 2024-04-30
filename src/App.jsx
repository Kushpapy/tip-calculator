import { useState } from "react";
import styled from "styled-components";

const Bill = styled.div`
  width: 70rem;
  background-color: var(--color-white);
  padding: 2.4rem;
  border-radius: 9px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
`;

const H1 = styled.h1`
  font-size: 2.4rem;
  color: var(--dark-grayish-cyan);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-weight: 800;
  margin-bottom: 2.4rem;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const SvgBox = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 0;
  left: 1rem;
  height: 100%;
  font: inherit;
`;

const Input = styled.input`
  text-align: right;
  width: 100%;
  border-radius: 9px;
  padding: 0.75rem 1rem;
  border: none;
  background-color: var(--very-light-grayish-cyan);
  color: var(--very-dark-cyan);
  display: block;
  font-size: 2rem;
  font-family: inherit;
  cursor: pointer;
  font-weight: inherit;

  &:focus {
    outline: 1px solid var(--strong-cyan);
  }
`;

const TipBox = styled.div`
  background-color: var(--very-dark-cyan);
  padding: 3.2rem 1.6rem 2rem 1.6rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
`;

const P = styled.p`
  color: var(--dark-grayish-cyan);
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const TipPercentages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1.6rem;
  column-gap: 1.6rem;
`;

const tip = ["5%", " 10%", "15%", "25%", "50%"];

const Tips = styled.button`
  background-color: var(--very-dark-cyan);
  color: var(--color-white);
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: inherit;
  border-radius: 0.5rem;
  height: 3rem;
  border: none;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-color: var(--light-grayish-cyan);
    color: var(--very-dark-cyan);
  }

  &.selected {
    background-color: var(--strong-cyan);
    color: var(--very-dark-cyan);
  }
`;

const CustomTip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--very-light-grayish-cyan);
  color: var(--grayish-cyan);
  border: 0.125rem solid transparent;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  height: 3rem;
  cursor: pointer;

  & input {
    width: 100%;
    text-align: center;
    font-weight: inherit;
    font-size: 1.6rem;
    font-family: inherit;
    border: none;
    background-color: inherit;

    outline: 0;
  }
`;

const OutPutBox = styled.div``;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

const TotallP = styled.p`
  color: var(--color-white);

  & span {
    color: var(--grayish-cyan);
  }
`;

const TotalSpan = styled.span`
  color: var(--strong-cyan);
  font-size: 2.4rem;
  font-weight: 700;
`;

const Reset = styled.button`
  width: 100%;
  background-color: var(--strong-cyan);
  color: var(--very-dark-cyan);
  font-size: 1.8rem;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  transition: 0.3s all ease-in;

  &:hover {
    background-color: var(--light-grayish-cyan);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;

  & span {
    display: block;
  }
`;
const ErrorMessage = styled.p`
  color: var(--red);
  font-size: 1rem;
`;

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [clicked, setClicked] = useState(null);
  const [tipValue, setTipValue] = useState(0);
  const [customTip, setCustomTip] = useState(0);

  const tipAmount =
    bill >= 0 && tipValue >= 0 && people > 0
      ? ((tipValue / 100) * bill) / people
      : 0;
  const totalBillValue =
    bill >= 0 && people > 0 ? (tipAmount + bill) / people : 0;

  const regex = new RegExp(/^(\d+)((\.|,)?\d{2})?$/);

  function handleReset() {
    setBill("");
    setPeople("");
    setCustomTip(0);
    setTipValue(0);
  }

  return (
    <div>
      <H1>
        Spli<br></br>tter
      </H1>
      <Bill>
        <BillBox>
          <div>
            <P>Bill</P>
            <Container>
              <Input
                placeholder="0"
                value={bill}
                onChange={(e) => setBill(+e.target.value)}
              ></Input>
              <SvgBox>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
                  <path
                    fill="#9EBBBD"
                    d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                  />
                </svg>
              </SvgBox>
            </Container>
          </div>
          <div>
            <P>Select Tip %</P>
            <TipPercentages>
              {tip.map((s, i) => (
                <Tips
                  key={i}
                  className={i === clicked ? "selected" : ""}
                  onClick={function () {
                    setTipValue(Number(s.replace("%", "")));
                    setClicked(i === clicked ? null : i);
                  }}
                >
                  {s}
                </Tips>
              ))}
              <CustomTip>
                <input
                  type="text"
                  placeholder="Custom"
                  value={customTip}
                  onChange={function (e) {
                    setCustomTip(e.target.value);
                    setClicked(null);
                    setTipValue(0);
                  }}
                  onBlur={function () {
                    setTipValue(Number(customTip));
                  }}
                />
              </CustomTip>
            </TipPercentages>
          </div>
          <div>
            <StyledDiv>
              {" "}
              <span> Number of People</span>{" "}
              {people === 0 && <ErrorMessage>Cannot be zero!</ErrorMessage>}
            </StyledDiv>
            <Container>
              <Input
                placeholder="0"
                value={people}
                onChange={(e) => setPeople(+e.target.value)}
              ></Input>
              <SvgBox>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16">
                  <path
                    fill="#9EBBBD"
                    d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                  />
                </svg>
              </SvgBox>
            </Container>
          </div>
        </BillBox>
        <TipBox>
          <OutPutBox>
            <TotalContainer>
              <TotallP>
                Tip Amount <br />
                <span>/ person</span>
              </TotallP>
              <TotalSpan>${tipAmount.toFixed(2)}</TotalSpan>
            </TotalContainer>

            <TotalContainer>
              <TotallP>
                Total <br />
                <span>/ person</span>
              </TotallP>
              <TotalSpan>${totalBillValue.toFixed(2)}</TotalSpan>
            </TotalContainer>
          </OutPutBox>

          <Reset onClick={handleReset}>Reset</Reset>
        </TipBox>
      </Bill>
    </div>
  );
}

export default App;
