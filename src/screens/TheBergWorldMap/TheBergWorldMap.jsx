import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const TheBergWorldMap = () => {
  // Local state for form inputs.  Users can enter their job title,
  // name and location.  When the Add me in! button is clicked the
  // entered values are stored in localStorage and the user is
  // returned to the map screen.
  const [jobTitle, setJobTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const navigate = useNavigate();

  // Handler to store the new entry in localStorage and navigate back
  // to the map display.  This uses a simple array stored under
  // "bergLocations" to persist entries between sessions.  Only
  // non-empty locations are stored.
  const handleAddMeIn = () => {
    const entry = {
      jobTitle: jobTitle.trim(),
      name: userName.trim(),
      location: userLocation.trim(),
    };
    if (entry.location) {
      try {
        const existing = JSON.parse(
          localStorage.getItem("bergLocations") || "[]",
        );
        if (Array.isArray(existing)) {
          existing.push(entry);
          localStorage.setItem(
            "bergLocations",
            JSON.stringify(existing),
          );
        } else {
          localStorage.setItem(
            "bergLocations",
            JSON.stringify([entry]),
          );
        }
      } catch (e) {
        localStorage.setItem("bergLocations", JSON.stringify([entry]));
      }
    }
    // Navigate back to the world map screen to see the new pin
    navigate("/the-berg-world-map");
  };

  return (
    <div className="the-berg-world-map">
      {/*
        Replace the top-level Link with a div so the entire page is not
        clickable. The form should not automatically navigate to the asset
        upload page when the user interacts with it. Instead, navigation
        happens explicitly via the Add me in button or other links. */}
      <div className="overlap-wrapper-2">
        <div className="overlap-51">
          <div className="rectangle-35" />

          <div className="mask-group">
            <div className="map">
              <div className="overlap-52">
                <img className="pe" alt="Pe" src="/img/pe-2.png" />

                <img className="gf" alt="Gf" src="/img/gf-1.png" />

                <img className="bf" alt="Bf" src="/img/bf-1.png" />

                <div className="fr">
                  <div className="overlap-group-36">
                    <img
                      className="path-34"
                      alt="Path"
                      src="/img/path2166-1.png"
                    />

                    <img
                      className="path-35"
                      alt="Path"
                      src="/img/path2168-1.png"
                    />

                    <img
                      className="path-36"
                      alt="Path"
                      src="/img/path2172-1.png"
                    />

                    <img
                      className="path-37"
                      alt="Path"
                      src="/img/path2174-1.png"
                    />

                    <img
                      className="path-38"
                      alt="Path"
                      src="/img/path2182-1.png"
                    />
                  </div>

                  <img
                    className="path-39"
                    alt="Path"
                    src="/img/path2184-1.png"
                  />
                </div>

                <img className="ly" alt="Ly" src="/img/ly-1.png" />

                <img className="by" alt="By" src="/img/by-1.png" />

                <img className="pk" alt="Pk" src="/img/pk-1.png" />

                <img className="id" alt="Id" src="/img/id.png" />

                <div className="ye">
                  <div className="overlap-53">
                    <img
                      className="path-40"
                      alt="Path"
                      src="/img/path2190-1.png"
                    />

                    <img
                      className="path-41"
                      alt="Path"
                      src="/img/path-2592.png"
                    />
                  </div>

                  <img
                    className="path-42"
                    alt="Path"
                    src="/img/path4560-1.png"
                  />

                  <img
                    className="path-43"
                    alt="Path"
                    src="/img/path2194-1.png"
                  />
                </div>

                <div className="mg">
                  <img
                    className="path-44"
                    alt="Path"
                    src="/img/path2624-1.png"
                  />

                  <img
                    className="path-45"
                    alt="Path"
                    src="/img/path2628-1.png"
                  />
                </div>

                <img className="bo" alt="Bo" src="/img/bo-1.png" />

                <img className="ci" alt="Ci" src="/img/ci-1.png" />

                <img className="dz" alt="Dz" src="/img/dz-1.png" />

                <img className="ch" alt="Ch" src="/img/ch-1.png" />

                <img className="cm" alt="Cm" src="/img/cm-1.png" />

                <img className="mk" alt="Mk" src="/img/mk-1.png" />

                <img className="bw" alt="Bw" src="/img/bw-1.png" />

                <img className="ua" alt="Ua" src="/img/ua-1.png" />

                <img className="ke" alt="Ke" src="/img/ke-1.png" />

                <div className="tw">
                  <img
                    className="path-46"
                    alt="Path"
                    src="/img/path2738-1.png"
                  />

                  <img
                    className="path-47"
                    alt="Path"
                    src="/img/path2746-1.png"
                  />
                </div>

                <img className="jo" alt="Jo" src="/img/jo-1.png" />

                <div className="mx" />

                <div className="ae">
                  <div className="div-3">
                    <img
                      className="path-48"
                      alt="Path"
                      src="/img/path2704-1.png"
                    />

                    <img
                      className="path-49"
                      alt="Path"
                      src="/img/path-2784.png"
                    />
                  </div>
                </div>

                <div className="bz">
                  <img
                    className="path-50"
                    alt="Path"
                    src="/img/path2808-1.png"
                  />

                  <img
                    className="path-51"
                    alt="Path"
                    src="/img/path-2810.png"
                  />
                </div>

                <img className="br" alt="Br" src="/img/br-1.png" />

                <div className="sl">
                  <div className="div-4">
                    <img
                      className="path-52"
                      alt="Path"
                      src="/img/path2896-1.png"
                    />

                    <img
                      className="path-53"
                      alt="Path"
                      src="/img/path2902-1.png"
                    />
                  </div>
                </div>

                <img className="ml" alt="Ml" src="/img/ml-1.png" />

                <img className="cd" alt="Cd" src="/img/cd-1.png" />

                <div className="it">
                  <img
                    className="path-54"
                    alt="Path"
                    src="/img/path-320-1.png"
                  />

                  <div className="overlap-54">
                    <img
                      className="path-55"
                      alt="Path"
                      src="/img/path2906-1.png"
                    />

                    <img
                      className="path-56"
                      alt="Path"
                      src="/img/path2910-1.png"
                    />

                    <img
                      className="path-57"
                      alt="Path"
                      src="/img/path2912-1.png"
                    />

                    <img
                      className="path-58"
                      alt="Path"
                      src="/img/path2920-1.png"
                    />
                  </div>
                </div>

                <img className="so" alt="So" src="/img/so-1.png" />

                <img className="af" alt="Af" src="/img/af-1.png" />

                <img className="bd" alt="Bd" src="/img/bd-1.png" />

                <div className="do">
                  <img
                    className="path-59"
                    alt="Path"
                    src="/img/path3374-1.png"
                  />
                </div>

                <div className="gw">
                  <div className="overlap-55">
                    <img
                      className="path-60"
                      alt="Path"
                      src="/img/path5532-1.png"
                    />

                    <img
                      className="path-61"
                      alt="Path"
                      src="/img/path-249-1.png"
                    />

                    <img
                      className="path-62"
                      alt="Path"
                      src="/img/path3434-1.png"
                    />

                    <img
                      className="path-63"
                      alt="Path"
                      src="/img/path-3436.png"
                    />

                    <img
                      className="path-64"
                      alt="Path"
                      src="/img/path3438-1.png"
                    />

                    <img
                      className="path-65"
                      alt="Path"
                      src="/img/path-240-1.png"
                    />

                    <img
                      className="path-66"
                      alt="Path"
                      src="/img/path-320-1.png"
                    />

                    <img
                      className="path-67"
                      alt="Path"
                      src="/img/path-3444.png"
                    />
                  </div>
                </div>

                <img className="gh" alt="Gh" src="/img/gh-1.png" />

                <img className="at" alt="At" src="/img/at-1.png" />

                <img className="se" alt="Se" src="/img/se.png" />

                <div className="tr">
                  <div className="overlap-56">
                    <img
                      className="path-68"
                      alt="Path"
                      src="/img/path3456-1.png"
                    />

                    <img
                      className="path-69"
                      alt="Path"
                      src="/img/path3458-1.png"
                    />
                  </div>
                </div>

                <img className="ug" alt="Ug" src="/img/ug-1.png" />

                <div className="mz">
                  <div className="overlap-57">
                    <img
                      className="path-70"
                      alt="Path"
                      src="/img/path3382-1.png"
                    />

                    <img
                      className="path-71"
                      alt="Path"
                      src="/img/path-320-1.png"
                    />

                    <img
                      className="path-72"
                      alt="Path"
                      src="/img/path-3462.png"
                    />

                    <img
                      className="path-73"
                      alt="Path"
                      src="/img/path3466-1.png"
                    />
                  </div>
                </div>

                <img className="jp" alt="Jp" src="/img/jp-1.png" />

                <div className="cu">
                  <img
                    className="path-74"
                    alt="Path"
                    src="/img/path3582-1.png"
                  />

                  <img
                    className="path-75"
                    alt="Path"
                    src="/img/path4200-1.png"
                  />

                  <img
                    className="path-76"
                    alt="Path"
                    src="/img/path5534-1.png"
                  />

                  <img
                    className="path-77"
                    alt="Path"
                    src="/img/path3590-1.png"
                  />

                  <img
                    className="path-78"
                    alt="Path"
                    src="/img/path3592-1.png"
                  />

                  <img
                    className="path-79"
                    alt="Path"
                    src="/img/path3594-1.png"
                  />

                  <img
                    className="path-80"
                    alt="Path"
                    src="/img/path3596-1.png"
                  />
                </div>

                <img className="ve" alt="Ve" src="/img/ve.png" />

                <div className="pt">
                  <img
                    className="path-81"
                    alt="Path"
                    src="/img/path3446-1.png"
                  />

                  <img
                    className="path-82"
                    alt="Path"
                    src="/img/path3614-1.png"
                  />

                  <img
                    className="path-83"
                    alt="Path"
                    src="/img/path3616-1.png"
                  />

                  <img
                    className="path-84"
                    alt="Path"
                    src="/img/path3620-1.png"
                  />

                  <img
                    className="path-85"
                    alt="Path"
                    src="/img/path3622-1.png"
                  />

                  <img
                    className="path-86"
                    alt="Path"
                    src="/img/path3624-1.png"
                  />

                  <img
                    className="path-87"
                    alt="Path"
                    src="/img/path3626-1.png"
                  />

                  <img
                    className="path-88"
                    alt="Path"
                    src="/img/path3628-1.png"
                  />
                </div>

                <img className="co" alt="Co" src="/img/co.png" />

                <div className="mr">
                  <div className="overlap-58">
                    <img
                      className="path-89"
                      alt="Path"
                      src="/img/path3878-1.png"
                    />

                    <img
                      className="path-90"
                      alt="Path"
                      src="/img/path-3882.png"
                    />
                  </div>
                </div>

                <div className="ao">
                  <img
                    className="path-91"
                    alt="Path"
                    src="/img/path3888-1.png"
                  />

                  <img
                    className="path-92"
                    alt="Path"
                    src="/img/path3890-1.png"
                  />
                </div>

                <div className="de">
                  <div className="overlap-59">
                    <img
                      className="path-93"
                      alt="Path"
                      src="/img/path3832-1.png"
                    />

                    <img
                      className="path-94"
                      alt="Path"
                      src="/img/path3834-1.png"
                    />

                    <img
                      className="path-95"
                      alt="Path"
                      src="/img/path3884-1.png"
                    />

                    <img
                      className="path-96"
                      alt="Path"
                      src="/img/path3892-1.png"
                    />

                    <img
                      className="path-97"
                      alt="Path"
                      src="/img/path-3894.png"
                    />
                  </div>
                </div>

                <img className="sd" alt="Sd" src="/img/sd.png" />

                <div className="th">
                  <div className="overlap-60">
                    <img
                      className="path-98"
                      alt="Path"
                      src="/img/path3902-1.png"
                    />

                    <img
                      className="path-99"
                      alt="Path"
                      src="/img/path3904-1.png"
                    />

                    <img
                      className="path-100"
                      alt="Path"
                      src="/img/path3370-1.png"
                    />

                    <img
                      className="path-101"
                      alt="Path"
                      src="/img/path3908-1.png"
                    />

                    <img
                      className="path-102"
                      alt="Path"
                      src="/img/path3910-1.png"
                    />

                    <img
                      className="path-103"
                      alt="Path"
                      src="/img/path3912-1.png"
                    />

                    <img
                      className="path-104"
                      alt="Path"
                      src="/img/path3914-1.png"
                    />

                    <img
                      className="path-105"
                      alt="Path"
                      src="/img/path3916-1.png"
                    />

                    <img
                      className="path-106"
                      alt="Path"
                      src="/img/path3918-1.png"
                    />
                  </div>
                </div>

                <div className="au">
                  <img
                    className="path-107"
                    alt="Path"
                    src="/img/path3294-1.png"
                  />

                  <img
                    className="path-108"
                    alt="Path"
                    src="/img/path3318-1.png"
                  />

                  <img
                    className="path-109"
                    alt="Path"
                    src="/img/path3956-1.png"
                  />

                  <div className="overlap-61">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path3958-1.png"
                    />

                    <img
                      className="path-111"
                      alt="Path"
                      src="/img/path3960-1.png"
                    />
                  </div>
                </div>

                <img className="pg" alt="Pg" src="/img/pg.png" />

                <img className="iq" alt="Iq" src="/img/iq-1.png" />

                <img className="hr" alt="Hr" src="/img/hr-1.png" />

                <div className="gl">
                  <div className="overlap-62">
                    <img
                      className="path-112"
                      alt="Path"
                      src="/img/path4242-1.png"
                    />

                    <img
                      className="path-113"
                      alt="Path"
                      src="/img/path4252-1.png"
                    />

                    <img
                      className="path-114"
                      alt="Path"
                      src="/img/path4262-1.png"
                    />

                    <img
                      className="path-115"
                      alt="Path"
                      src="/img/path4322-1.png"
                    />

                    <img
                      className="path-116"
                      alt="Path"
                      src="/img/path4330-1.png"
                    />

                    <img
                      className="path-117"
                      alt="Path"
                      src="/img/path4332-1.png"
                    />

                    <img
                      className="path-118"
                      alt="Path"
                      src="/img/path4336-1.png"
                    />

                    <img
                      className="path-119"
                      alt="Path"
                      src="/img/path4342-1.png"
                    />

                    <img
                      className="path-120"
                      alt="Path"
                      src="/img/path4344-1.png"
                    />

                    <img
                      className="path-121"
                      alt="Path"
                      src="/img/path6100-1.png"
                    />

                    <img
                      className="path-122"
                      alt="Path"
                      src="/img/path4348-1.png"
                    />

                    <img className="g" alt="G" src="/img/g-27049.png" />
                  </div>
                </div>

                <img className="ne" alt="Ne" src="/img/ne-3.png" />

                <img className="dk" alt="Dk" src="/img/dk.png" />

                <img className="lv" alt="Lv" src="/img/lv-1.png" />

                <img className="ro" alt="Ro" src="/img/ro-1.png" />

                <img className="zm" alt="Zm" src="/img/zm.png" />

                <div className="ir">
                  <div className="overlap-60">
                    <img
                      className="path-123"
                      alt="Path"
                      src="/img/path4560-1.png"
                    />

                    <img
                      className="path-124"
                      alt="Path"
                      src="/img/path-268-1.png"
                    />

                    <img
                      className="path-125"
                      alt="Path"
                      src="/img/path4564-1.png"
                    />

                    <img
                      className="path-126"
                      alt="Path"
                      src="/img/path4606-1.png"
                    />
                  </div>
                </div>

                <img className="mm" alt="Mm" src="/img/mm-1.png" />

                <img className="et" alt="Et" src="/img/et-1.png" />

                <img className="gt" alt="Gt" src="/img/gt.png" />

                <img className="sr" alt="Sr" src="/img/sr-1.png" />

                <img className="eh" alt="Eh" src="/img/eh-2.png" />

                <img className="cz" alt="Cz" src="/img/cz-1.png" />

                <img className="td" alt="Td" src="/img/td-1.png" />

                <img className="al" alt="Al" src="/img/al-3.png" />

                <img className="fi" alt="Fi" src="/img/fi-1.png" />

                <img className="sy" alt="Sy" src="/img/sy-1.png" />

                <img className="kg" alt="Kg" src="/img/kg.png" />

                <div className="om">
                  <div className="overlap-63">
                    <img
                      className="path-127"
                      alt="Path"
                      src="/img/path4692-1.png"
                    />

                    <img
                      className="path-128"
                      alt="Path"
                      src="/img/path4786-1.png"
                    />
                  </div>

                  <img
                    className="path-129"
                    alt="Path"
                    src="/img/path4696-1.png"
                  />
                </div>

                <div className="pa">
                  <img
                    className="path-130"
                    alt="Path"
                    src="/img/path-308-1.png"
                  />

                  <img
                    className="path-131"
                    alt="Path"
                    src="/img/path4794-1.png"
                  />

                  <img
                    className="path-132"
                    alt="Path"
                    src="/img/path-4796.png"
                  />

                  <img
                    className="path-133"
                    alt="Path"
                    src="/img/path4802-1.png"
                  />
                </div>

                <img className="gb" alt="Gb" src="/img/gb.png" />

                <img className="cr" alt="Cr" src="/img/cr-1.png" />

                <img className="py" alt="Py" src="/img/py.png" />

                <div className="gn">
                  <div className="overlap-64">
                    <img
                      className="path-134"
                      alt="Path"
                      src="/img/path5380-1.png"
                    />

                    <img
                      className="path-135"
                      alt="Path"
                      src="/img/path5400-1.png"
                    />
                  </div>
                </div>

                <div className="ie">
                  <div className="overlap-65">
                    <img
                      className="path-136"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-137"
                      alt="Path"
                      src="/img/path5348-1.png"
                    />

                    <img
                      className="path-138"
                      alt="Path"
                      src="/img/path5402-1.png"
                    />
                  </div>
                </div>

                <div className="ng">
                  <div className="overlap-66">
                    <img
                      className="path-139"
                      alt="Path"
                      src="/img/path-5382.png"
                    />

                    <img
                      className="path-140"
                      alt="Path"
                      src="/img/path5386-1.png"
                    />

                    <img
                      className="path-141"
                      alt="Path"
                      src="/img/path5406-1.png"
                    />
                  </div>
                </div>

                <div className="tn">
                  <img
                    className="path-142"
                    alt="Path"
                    src="/img/path5412-1.png"
                  />
                </div>

                <img className="pl" alt="Pl" src="/img/pl-1.png" />

                <img className="na" alt="Na" src="/img/na-1.png" />

                <img className="za" alt="Za" src="/img/za.png" />

                <img className="eg" alt="Eg" src="/img/eg-1.png" />

                <div className="tz">
                  <div className="overlap-67">
                    <img
                      className="path-143"
                      alt="Path"
                      src="/img/path4894-1.png"
                    />

                    <img
                      className="path-144"
                      alt="Path"
                      src="/img/path4896-1.png"
                    />

                    <img
                      className="path-145"
                      alt="Path"
                      src="/img/path4898-1.png"
                    />

                    <img
                      className="path-146"
                      alt="Path"
                      src="/img/path-5432.png"
                    />
                  </div>
                </div>

                <img className="ge" alt="Ge" src="/img/ge-1.png" />

                <div className="sa">
                  <div className="overlap-68">
                    <img
                      className="path-147"
                      alt="Path"
                      src="/img/path3234-1.png"
                    />

                    <img
                      className="path-148"
                      alt="Path"
                      src="/img/path3380-1.png"
                    />

                    <img
                      className="path-149"
                      alt="Path"
                      src="/img/path-310-1.png"
                    />

                    <img
                      className="path-149"
                      alt="Path"
                      src="/img/path5482-1.png"
                    />

                    <img
                      className="path-150"
                      alt="Path"
                      src="/img/path5488-1.png"
                    />
                  </div>
                </div>

                <img className="vn" alt="Vn" src="/img/vn.png" />

                <img className="ru" alt="Ru" src="/img/ru.png" />

                <div className="ht">
                  <div className="overlap-69">
                    <img
                      className="path-151"
                      alt="Path"
                      src="/img/path5512-1.png"
                    />

                    <img
                      className="path-152"
                      alt="Path"
                      src="/img/path5514-1.png"
                    />

                    <img
                      className="path-153"
                      alt="Path"
                      src="/img/path5516-1.png"
                    />

                    <img
                      className="path-154"
                      alt="Path"
                      src="/img/path5518-1.png"
                    />
                  </div>
                </div>

                <img className="ba" alt="Ba" src="/img/ba-1.png" />

                <img className="in" alt="In" src="/img/in.png" />

                <img className="cn" alt="Cn" src="/img/cn.png" />

                <img className="sv" alt="Sv" src="/img/sv-1.png" />

                <img className="gy" alt="Gy" src="/img/gy-1.png" />

                <img className="be" alt="Be" src="/img/be-1.png" />

                <div className="gq">
                  <img
                    className="path-155"
                    alt="Path"
                    src="/img/path5778-1.png"
                  />

                  <img
                    className="path-156"
                    alt="Path"
                    src="/img/path5784-1.png"
                  />
                </div>

                <img className="ls" alt="Ls" src="/img/ls-1.png" />

                <img className="bg" alt="Bg" src="/img/bg-1.png" />

                <img className="bi" alt="Bi" src="/img/bi-1.png" />

                <img className="dj" alt="Dj" src="/img/dj-1.png" />

                <div className="az">
                  <div className="div-3">
                    <img
                      className="path-157"
                      alt="Path"
                      src="/img/path5796-1.png"
                    />

                    <img
                      className="path-158"
                      alt="Path"
                      src="/img/path5798-1.png"
                    />
                  </div>
                </div>

                <img className="my" alt="My" src="/img/my.png" />

                <img className="ph" alt="Ph" src="/img/ph.png" />

                <img className="uy" alt="Uy" src="/img/uy.png" />

                <img className="cg" alt="Cg" src="/img/cg.png" />

                <div className="rs" />

                <div className="me" />

                <div className="ee">
                  <div className="overlap-70">
                    <img
                      className="path-159"
                      alt="Path"
                      src="/img/path5948-1.png"
                    />
                  </div>

                  <img
                    className="path-160"
                    alt="Path"
                    src="/img/path5946-1.png"
                  />

                  <img
                    className="path-161"
                    alt="Path"
                    src="/img/path5950-1.png"
                  />

                  <img
                    className="path-162"
                    alt="Path"
                    src="/img/path5970-1.png"
                  />
                </div>

                <img className="rw" alt="Rw" src="/img/rw-1.png" />

                <img className="am" alt="Am" src="/img/am-1.png" />

                <img className="sn" alt="Sn" src="/img/sn-1.png" />

                <img className="tg" alt="Tg" src="/img/tg-1.png" />

                <img className="es" alt="Es" src="/img/es.png" />

                <div className="ga">
                  <div className="overlap-56">
                    <img className="path-163" alt="Path" src="/img/mp-1.png" />

                    <img
                      className="path-164"
                      alt="Path"
                      src="/img/path-6014.png"
                    />
                  </div>
                </div>

                <img className="hu" alt="Hu" src="/img/hu-1.png" />

                <img className="mw" alt="Mw" src="/img/mw.png" />

                <img className="tj" alt="Tj" src="/img/tj.png" />

                <div className="kh">
                  <img
                    className="path-165"
                    alt="Path"
                    src="/img/path3472-1.png"
                  />

                  <div className="overlap-71">
                    <img
                      className="path-166"
                      alt="Path"
                      src="/img/path-249-1.png"
                    />

                    <img
                      className="path-167"
                      alt="Path"
                      src="/img/path-320-1.png"
                    />

                    <img
                      className="path-168"
                      alt="Path"
                      src="/img/path6044-1.png"
                    />
                  </div>
                </div>

                <div className="kr">
                  <div className="overlap-72">
                    <img
                      className="path-169"
                      alt="Path"
                      src="/img/path6028-1.png"
                    />

                    <img
                      className="path-170"
                      alt="Path"
                      src="/img/path6030-1.png"
                    />

                    <img
                      className="path-171"
                      alt="Path"
                      src="/img/path-249-1.png"
                    />

                    <img
                      className="path-172"
                      alt="Path"
                      src="/img/path6034-1.png"
                    />

                    <img
                      className="path-173"
                      alt="Path"
                      src="/img/path5532-1.png"
                    />

                    <img
                      className="path-34"
                      alt="Path"
                      src="/img/path6040-1.png"
                    />

                    <img
                      className="path-174"
                      alt="Path"
                      src="/img/path6042-1.png"
                    />

                    <img
                      className="path-175"
                      alt="Path"
                      src="/img/path6046-1.png"
                    />
                  </div>

                  <img
                    className="path-176"
                    alt="Path"
                    src="/img/path6036-1.png"
                  />
                </div>

                <div className="hn">
                  <img
                    className="path-177"
                    alt="Path"
                    src="/img/path5978-1.png"
                  />

                  <img
                    className="path-178"
                    alt="Path"
                    src="/img/path6082-1.png"
                  />
                </div>

                <img className="is" alt="Is" src="/img/is-1.png" />

                <img className="ni" alt="Ni" src="/img/ni.png" />

                <img className="ma" alt="Ma" src="/img/ma-3.png" />

                <img className="lr" alt="Lr" src="/img/lr-1.png" />

                <div className="nl">
                  <div className="overlap-73">
                    <img
                      className="path-179"
                      alt="Path"
                      src="/img/path6448-1.png"
                    />

                    <img
                      className="path-179"
                      alt="Path"
                      src="/img/path6450-1.png"
                    />

                    <img
                      className="path-180"
                      alt="Path"
                      src="/img/path6452-1.png"
                    />

                    <img
                      className="path-181"
                      alt="Path"
                      src="/img/path6454-1.png"
                    />

                    <img
                      className="path-182"
                      alt="Path"
                      src="/img/path6456-1.png"
                    />

                    <img
                      className="path-183"
                      alt="Path"
                      src="/img/path6458-1.png"
                    />

                    <img
                      className="path-184"
                      alt="Path"
                      src="/img/path6482-1.png"
                    />

                    <img
                      className="path-185"
                      alt="Path"
                      src="/img/path6484-1.png"
                    />
                  </div>
                </div>

                <img className="cf" alt="Cf" src="/img/cf-1.png" />

                <img className="sk" alt="Sk" src="/img/sk-3.png" />

                <img className="lt" alt="Lt" src="/img/lt-1.png" />

                <img className="zw" alt="Zw" src="/img/zw-1.png" />

                <div className="lk">
                  <div className="overlap-74">
                    <img
                      className="path-186"
                      alt="Path"
                      src="/img/path6496-1.png"
                    />

                    <img
                      className="path-187"
                      alt="Path"
                      src="/img/path6498-1.png"
                    />

                    <img
                      className="path-188"
                      alt="Path"
                      src="/img/path-276-1.png"
                    />
                  </div>
                </div>

                <img className="il" alt="Il" src="/img/il-3.png" />

                <img className="la" alt="La" src="/img/la.png" />

                <img className="kp" alt="Kp" src="/img/kp-1.png" />

                <img className="gr" alt="Gr" src="/img/gr.png" />

                <img className="tm" alt="Tm" src="/img/tm.png" />

                <img className="ec" alt="Ec" src="/img/ec.png" />

                <img className="bj" alt="Bj" src="/img/bj-1.png" />

                <img className="si" alt="Si" src="/img/si-1.png" />

                <img className="no" alt="No" src="/img/no.png" />

                <img className="md" alt="Md" src="/img/md-3.png" />

                <div className="lb" />

                <img className="np" alt="Np" src="/img/np-1.png" />

                <div className="er">
                  <div className="overlap-75">
                    <img
                      className="path-189"
                      alt="Path"
                      src="/img/path6816-1.png"
                    />

                    <img
                      className="path-190"
                      alt="Path"
                      src="/img/path6830-1.png"
                    />
                  </div>
                </div>

                <img className="us" alt="Us" src="/img/us-1.png" />

                <div className="kz">
                  <img
                    className="path-191"
                    alt="Path"
                    src="/img/path7142-1.png"
                  />
                </div>

                <img className="sz" alt="Sz" src="/img/sz-1.png" />

                <div className="uz">
                  <img
                    className="path-192"
                    alt="Path"
                    src="/img/path7148-1.png"
                  />
                </div>

                <img className="mn" alt="Mn" src="/img/mn-3.png" />

                <img className="bt" alt="Bt" src="/img/bt-1.png" />

                <div className="kw">
                  <div className="kw-2">
                    <div className="overlap-group-37">
                      <img
                        className="path-193"
                        alt="Path"
                        src="/img/path5440-1.png"
                      />

                      <img
                        className="path-194"
                        alt="Path"
                        src="/img/path5486-1.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="tl">
                  <div className="tl-2">
                    <img
                      className="path-195"
                      alt="Path"
                      src="/img/path2786-1.png"
                    />

                    <img
                      className="path-196"
                      alt="Path"
                      src="/img/path2788-1.png"
                    />
                  </div>
                </div>

                <div className="bs">
                  <div className="bs-2">
                    <div className="overlap-group-38">
                      <img
                        className="path-197"
                        alt="Path"
                        src="/img/path6100-1.png"
                      />

                      <img className="g-2" alt="G" src="/img/g20657-1.png" />
                    </div>
                  </div>
                </div>

                <div className="fk">
                  <div className="overlap-group-wrapper-2">
                    <div className="overlap-group-39">
                      <img
                        className="path-198"
                        alt="Path"
                        src="/img/path4876-1.png"
                      />

                      <img
                        className="path-199"
                        alt="Path"
                        src="/img/path4878-1.png"
                      />

                      <img
                        className="path-200"
                        alt="Path"
                        src="/img/path4880-1.png"
                      />

                      <img
                        className="path-201"
                        alt="Path"
                        src="/img/path-316-1.png"
                      />

                      <img
                        className="path-202"
                        alt="Path"
                        src="/img/path4884-1.png"
                      />

                      <img
                        className="path-203"
                        alt="Path"
                        src="/img/path-320-1.png"
                      />

                      <img
                        className="path-204"
                        alt="Path"
                        src="/img/path4888-1.png"
                      />

                      <img
                        className="path-205"
                        alt="Path"
                        src="/img/path-315-1.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="gm" />

                <div className="qa" />

                <div className="jm" />

                <div className="cy" />

                <div className="pr" />

                <div className="ps">
                  <div className="div-5">
                    <img
                      className="path-107"
                      alt="Path"
                      src="/img/path5472-1.png"
                    />

                    <img
                      className="path-206"
                      alt="Path"
                      src="/img/path-5474.png"
                    />
                  </div>
                </div>

                <div className="bn">
                  <div className="overlap-group-wrapper-2">
                    <div className="overlap-group-40">
                      <img
                        className="path-207"
                        alt="Path"
                        src="/img/path-6824.png"
                      />

                      <img
                        className="path-208"
                        alt="Path"
                        src="/img/path6826-1.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="tt">
                  <div className="div-5">
                    <img
                      className="path-209"
                      alt="Path"
                      src="/img/path6114-1.png"
                    />

                    <img
                      className="path-201"
                      alt="Path"
                      src="/img/path6120-1.png"
                    />
                  </div>
                </div>

                <div className="cv">
                  <div className="cv-2">
                    <img
                      className="path-210"
                      alt="Path"
                      src="/img/path5762-1.png"
                    />

                    <img
                      className="path-211"
                      alt="Path"
                      src="/img/path5764-1.png"
                    />

                    <img
                      className="path-212"
                      alt="Path"
                      src="/img/path5766-1.png"
                    />

                    <img
                      className="path-213"
                      alt="Path"
                      src="/img/path5768-1.png"
                    />

                    <img
                      className="path-214"
                      alt="Path"
                      src="/img/path5770-1.png"
                    />

                    <img
                      className="path-215"
                      alt="Path"
                      src="/img/path5772-1.png"
                    />

                    <img
                      className="path-216"
                      alt="Path"
                      src="/img/path5774-1.png"
                    />

                    <img
                      className="path-217"
                      alt="Path"
                      src="/img/path5776-1.png"
                    />
                  </div>
                </div>

                <div className="lu" />

                <div className="re" />

                <div className="km">
                  <div className="km-2">
                    <img
                      className="path-218"
                      alt="Path"
                      src="/img/path5750-1.png"
                    />

                    <img
                      className="path-61"
                      alt="Path"
                      src="/img/path5752-1.png"
                    />

                    <img
                      className="path-219"
                      alt="Path"
                      src="/img/path5754-1.png"
                    />
                  </div>
                </div>

                <div className="mu" />

                <div className="fo">
                  <div className="div-6">
                    <div className="overlap-group-41">
                      <img
                        className="path-220"
                        alt="Path"
                        src="/img/path4614-1.png"
                      />

                      <img
                        className="path-221"
                        alt="Path"
                        src="/img/path4616-1.png"
                      />

                      <img
                        className="path-222"
                        alt="Path"
                        src="/img/path4624-1.png"
                      />
                    </div>

                    <img
                      className="path-223"
                      alt="Path"
                      src="/img/path4618-1.png"
                    />

                    <img
                      className="path-224"
                      alt="Path"
                      src="/img/path4620-1.png"
                    />

                    <img
                      className="path-200"
                      alt="Path"
                      src="/img/path4622-1.png"
                    />
                  </div>
                </div>

                <div className="mq" />

                <div className="st">
                  <div className="st-2">
                    <img
                      className="path-225"
                      alt="Path"
                      src="/img/path2898-1.png"
                    />

                    <img
                      className="path-200"
                      alt="Path"
                      src="/img/path5384-1.png"
                    />
                  </div>
                </div>

                <div className="an">
                  <div className="an-2">
                    <img
                      className="path-226"
                      alt="Path"
                      src="/img/path2580-1.png"
                    />

                    <img
                      className="path-227"
                      alt="Path"
                      src="/img/path6512-1.png"
                    />

                    <img
                      className="path-228"
                      alt="Path"
                      src="/img/path6514-1.png"
                    />
                  </div>
                </div>

                <div className="dm" />

                <div className="gp">
                  <div className="div-7">
                    <img
                      className="path-229"
                      alt="Path"
                      src="/img/path2582-1.png"
                    />

                    <img
                      className="path-230"
                      alt="Path"
                      src="/img/path2584-1.png"
                    />

                    <img
                      className="path-231"
                      alt="Path"
                      src="/img/path2586-1.png"
                    />
                  </div>
                </div>

                <div className="ki">
                  <div className="div-8">
                    <img
                      className="path-210"
                      alt="Path"
                      src="/img/path4790-1.png"
                    />

                    <img
                      className="path-232"
                      alt="Path"
                      src="/img/path35688-1.png"
                    />
                  </div>
                </div>

                <div className="bh" />

                <div className="ad" />

                <div className="pw" />

                <div className="sc" />

                <div className="ag">
                  <div className="div-7">
                    <img
                      className="path-198"
                      alt="Path"
                      src="/img/path6116-1.png"
                    />

                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path6118-1.png"
                    />
                  </div>
                </div>

                <div className="bb" />

                <div className="tc">
                  <div className="tc-2">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path5528-1.png"
                    />

                    <img
                      className="path-233"
                      alt="Path"
                      src="/img/path5532-1.png"
                    />

                    <img
                      className="path-200"
                      alt="Path"
                      src="/img/path5534-1.png"
                    />
                  </div>
                </div>

                <div className="vc" />

                <div className="lc" />

                <div className="yt" />

                <div className="vi">
                  <div className="div-9">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path4052-1.png"
                    />

                    <img
                      className="path-234"
                      alt="Path"
                      src="/img/path5520-1.png"
                    />
                  </div>
                </div>

                <div className="gd" />

                <div className="mt" />

                <div className="mv" />

                <div className="ky" />

                <div className="kn">
                  <div className="div-8">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path5926-1.png"
                    />

                    <img
                      className="path-188"
                      alt="Path"
                      src="/img/path-169-1.png"
                    />
                  </div>
                </div>

                <div className="ms" />

                <div className="aw" />

                <div className="li" />

                <div className="vg">
                  <div className="div-9">
                    <img
                      className="path-235"
                      alt="Path"
                      src="/img/path4200-1.png"
                    />

                    <img
                      className="path-233"
                      alt="Path"
                      src="/img/path-318-1.png"
                    />
                  </div>
                </div>

                <div className="sh" />

                <div className="je" />

                <div className="ai" />

                <div className="gg" />

                <div className="sm" />

                <div className="nr" />

                <div className="gi" />

                <div className="mc" />

                <div className="va" />

                <div className="im" />

                <div className="sg">
                  <img className="sg-2" alt="Sg" src="/img/sg-1.png" />

                  <img className="ge-2" alt="Ge" src="/img/ge2-1.png" />
                </div>

                <img className="ge-3" alt="Ge" src="/img/ge1-1.png" />

                <img className="kosovo" alt="Kosovo" src="/img/kosovo-1.png" />

                <img className="cl" alt="Cl" src="/img/cl.png" />

                <div className="ar">
                  <div className="overlap-76">
                    <img
                      className="path-236"
                      alt="Path"
                      src="/img/path4200-1.png"
                    />

                    <img
                      className="path-236"
                      alt="Path"
                      src="/img/path4202-1.png"
                    />

                    <img
                      className="path-237"
                      alt="Path"
                      src="/img/path-4518.png"
                    />
                  </div>

                  <img
                    className="path-238"
                    alt="Path"
                    src="/img/path-4520.png"
                  />

                  <img
                    className="path-239"
                    alt="Path"
                    src="/img/path4874-1.png"
                  />
                </div>

                <img className="borders" alt="Borders" src="/img/borders.png" />

                <div className="special-borders">
                  <img className="eh-2" alt="Eh" src="/img/eh-3.png" />
                </div>

                <div className="states">
                  <img
                    className="path-240"
                    alt="Path"
                    src="/img/path-156-1.png"
                  />

                  <img
                    className="path-241"
                    alt="Path"
                    src="/img/path-157-1.png"
                  />

                  <div className="overlap-77">
                    <img
                      className="path-242"
                      alt="Path"
                      src="/img/path-158-1.png"
                    />

                    <img
                      className="path-243"
                      alt="Path"
                      src="/img/path-318-1.png"
                    />

                    <img
                      className="path-244"
                      alt="Path"
                      src="/img/path-160-1.png"
                    />

                    <img
                      className="path-244"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-245"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-246"
                      alt="Path"
                      src="/img/path-318-1.png"
                    />

                    <img
                      className="path-247"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-248"
                      alt="Path"
                      src="/img/path-308-1.png"
                    />

                    <img
                      className="path-249"
                      alt="Path"
                      src="/img/path-166-1.png"
                    />

                    <img
                      className="path-250"
                      alt="Path"
                      src="/img/path-167-1.png"
                    />

                    <img
                      className="path-251"
                      alt="Path"
                      src="/img/path-168-1.png"
                    />

                    <img
                      className="path-252"
                      alt="Path"
                      src="/img/path-169-1.png"
                    />

                    <img
                      className="path-253"
                      alt="Path"
                      src="/img/path-170-1.png"
                    />

                    <img
                      className="path-254"
                      alt="Path"
                      src="/img/path-171-1.png"
                    />

                    <img
                      className="path-255"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-256"
                      alt="Path"
                      src="/img/path-183-1.png"
                    />

                    <img
                      className="path-257"
                      alt="Path"
                      src="/img/path-184-1.png"
                    />

                    <img
                      className="path-258"
                      alt="Path"
                      src="/img/path-185-1.png"
                    />

                    <img
                      className="path-259"
                      alt="Path"
                      src="/img/path-186-1.png"
                    />

                    <img
                      className="path-260"
                      alt="Path"
                      src="/img/path-187-1.png"
                    />

                    <img
                      className="path-261"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-261"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-262"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-263"
                      alt="Path"
                      src="/img/path-226-1.png"
                    />

                    <img
                      className="path-251"
                      alt="Path"
                      src="/img/path-229-1.png"
                    />

                    <img
                      className="path-264"
                      alt="Path"
                      src="/img/path-230-1.png"
                    />

                    <img
                      className="path-265"
                      alt="Path"
                      src="/img/path-231-1.png"
                    />

                    <img
                      className="path-266"
                      alt="Path"
                      src="/img/path-232-1.png"
                    />

                    <img
                      className="path-267"
                      alt="Path"
                      src="/img/path-233-1.png"
                    />

                    <img
                      className="path-268"
                      alt="Path"
                      src="/img/path-234-1.png"
                    />

                    <img
                      className="path-269"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-270"
                      alt="Path"
                      src="/img/path-236-1.png"
                    />

                    <img
                      className="path-271"
                      alt="Path"
                      src="/img/path-237-1.png"
                    />

                    <img
                      className="path-272"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-273"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-274"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-275"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-276"
                      alt="Path"
                      src="/img/path-255-1.png"
                    />

                    <img
                      className="path-277"
                      alt="Path"
                      src="/img/path-268-1.png"
                    />

                    <img
                      className="path-278"
                      alt="Path"
                      src="/img/path-269-1.png"
                    />

                    <img
                      className="path-279"
                      alt="Path"
                      src="/img/path-270-1.png"
                    />
                  </div>

                  <div className="overlap-78">
                    <img
                      className="path-280"
                      alt="Path"
                      src="/img/path-173-1.png"
                    />

                    <img
                      className="path-281"
                      alt="Path"
                      src="/img/path-310-1.png"
                    />

                    <img
                      className="path-282"
                      alt="Path"
                      src="/img/path-176-1.png"
                    />

                    <img
                      className="path-283"
                      alt="Path"
                      src="/img/path-177-1.png"
                    />

                    <img
                      className="path-284"
                      alt="Path"
                      src="/img/path-178-1.png"
                    />

                    <img
                      className="path-285"
                      alt="Path"
                      src="/img/path-179-1.png"
                    />

                    <img
                      className="path-286"
                      alt="Path"
                      src="/img/path-182-1.png"
                    />

                    <img
                      className="path-287"
                      alt="Path"
                      src="/img/path-188.png"
                    />

                    <img
                      className="path-211"
                      alt="Path"
                      src="/img/path-189-1.png"
                    />
                  </div>

                  <img
                    className="path-288"
                    alt="Path"
                    src="/img/path-175-1.png"
                  />

                  <div className="overlap-79">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />
                  </div>

                  <div className="overlap-80">
                    <img
                      className="path-111"
                      alt="Path"
                      src="/img/path-190-1.png"
                    />

                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-191-1.png"
                    />
                  </div>

                  <div className="overlap-81">
                    <img
                      className="path-111"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />
                  </div>

                  <div className="overlap-82">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />
                  </div>

                  <img
                    className="path-289"
                    alt="Path"
                    src="/img/path-196-1.png"
                  />

                  <img
                    className="path-290"
                    alt="Path"
                    src="/img/path-327-1.png"
                  />

                  <img
                    className="path-291"
                    alt="Path"
                    src="/img/path-327-1.png"
                  />

                  <img
                    className="path-292"
                    alt="Path"
                    src="/img/path-327-1.png"
                  />

                  <div className="overlap-83">
                    <img
                      className="path-188"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />
                  </div>

                  <div className="overlap-84">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />
                  </div>

                  <div className="overlap-85">
                    <img
                      className="path-188"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-211"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-188"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-220"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />
                  </div>

                  <div className="overlap-86">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-220"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />
                  </div>

                  <img
                    className="path-293"
                    alt="Path"
                    src="/img/path-327-1.png"
                  />

                  <img
                    className="path-294"
                    alt="Path"
                    src="/img/path-315-1.png"
                  />

                  <div className="overlap-87">
                    <img
                      className="path-111"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-111"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-188"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-211"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-221-1.png"
                    />

                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />
                  </div>

                  <div className="overlap-88">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-223-1.png"
                    />
                  </div>

                  <div className="overlap-89">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />
                  </div>

                  <div className="overlap-90">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-220"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />
                  </div>

                  <div className="overlap-91">
                    <img
                      className="path-295"
                      alt="Path"
                      src="/img/path-239-1.png"
                    />

                    <img
                      className="path-296"
                      alt="Path"
                      src="/img/path-240-1.png"
                    />

                    <img
                      className="path-297"
                      alt="Path"
                      src="/img/path-318-1.png"
                    />

                    <img
                      className="path-296"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-298"
                      alt="Path"
                      src="/img/path-243-1.png"
                    />

                    <img
                      className="path-298"
                      alt="Path"
                      src="/img/path-244-1.png"
                    />

                    <img
                      className="path-299"
                      alt="Path"
                      src="/img/path-309-1.png"
                    />

                    <img
                      className="path-300"
                      alt="Path"
                      src="/img/path-246-1.png"
                    />

                    <img
                      className="path-301"
                      alt="Path"
                      src="/img/path-247-1.png"
                    />

                    <img
                      className="path-302"
                      alt="Path"
                      src="/img/path-248-1.png"
                    />

                    <img
                      className="path-303"
                      alt="Path"
                      src="/img/path-249-1.png"
                    />

                    <img
                      className="path-299"
                      alt="Path"
                      src="/img/path-250-1.png"
                    />

                    <img
                      className="path-299"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-304"
                      alt="Path"
                      src="/img/path-256-1.png"
                    />

                    <img
                      className="path-305"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-306"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-307"
                      alt="Path"
                      src="/img/path-259-1.png"
                    />

                    <img
                      className="path-308"
                      alt="Path"
                      src="/img/path-260-1.png"
                    />

                    <img
                      className="path-309"
                      alt="Path"
                      src="/img/path-261-1.png"
                    />

                    <img
                      className="path-310"
                      alt="Path"
                      src="/img/path-268-1.png"
                    />

                    <img
                      className="path-311"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-312"
                      alt="Path"
                      src="/img/path-268-1.png"
                    />

                    <img
                      className="path-313"
                      alt="Path"
                      src="/img/path-310-1.png"
                    />

                    <img
                      className="path-314"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-315"
                      alt="Path"
                      src="/img/path-276-1.png"
                    />

                    <img
                      className="path-316"
                      alt="Path"
                      src="/img/path-310-1.png"
                    />

                    <img
                      className="path-317"
                      alt="Path"
                      src="/img/path-272-1.png"
                    />

                    <img
                      className="path-318"
                      alt="Path"
                      src="/img/path-274-1.png"
                    />

                    <img
                      className="path-319"
                      alt="Path"
                      src="/img/path-275-1.png"
                    />

                    <img
                      className="path-320"
                      alt="Path"
                      src="/img/path-276-1.png"
                    />

                    <img
                      className="path-321"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-322"
                      alt="Path"
                      src="/img/path-308-1.png"
                    />

                    <div className="group-237">
                      <div className="div-6">
                        <img
                          className="path-323"
                          alt="Path"
                          src="/img/path-279-1.png"
                        />

                        <img
                          className="path-324"
                          alt="Path"
                          src="/img/path-280-1.png"
                        />
                      </div>
                    </div>

                    <img
                      className="path-325"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-326"
                      alt="Path"
                      src="/img/path-282-1.png"
                    />

                    <img
                      className="path-327"
                      alt="Path"
                      src="/img/path-283-1.png"
                    />
                  </div>

                  <img
                    className="path-328"
                    alt="Path"
                    src="/img/path-315-1.png"
                  />

                  <div className="overlap-92">
                    <img
                      className="path-329"
                      alt="Path"
                      src="/img/path-284-1.png"
                    />

                    <img
                      className="path-330"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-331"
                      alt="Path"
                      src="/img/path-286-1.png"
                    />

                    <img
                      className="path-332"
                      alt="Path"
                      src="/img/path-308-1.png"
                    />

                    <img
                      className="path-333"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-334"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-335"
                      alt="Path"
                      src="/img/path-293-1.png"
                    />

                    <img
                      className="path-336"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-337"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-337"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-338"
                      alt="Path"
                      src="/img/path-297-1.png"
                    />

                    <img
                      className="path-339"
                      alt="Path"
                      src="/img/path-308-1.png"
                    />

                    <img
                      className="path-340"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-341"
                      alt="Path"
                      src="/img/path-300-1.png"
                    />

                    <img
                      className="path-342"
                      alt="Path"
                      src="/img/path-301-1.png"
                    />

                    <img
                      className="path-343"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-342"
                      alt="Path"
                      src="/img/path-308-1.png"
                    />

                    <img
                      className="path-344"
                      alt="Path"
                      src="/img/path-310-1.png"
                    />

                    <img
                      className="path-345"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-346"
                      alt="Path"
                      src="/img/path-306-1.png"
                    />

                    <img
                      className="path-347"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-348"
                      alt="Path"
                      src="/img/path-308-1.png"
                    />

                    <img
                      className="path-349"
                      alt="Path"
                      src="/img/path-309-1.png"
                    />

                    <img
                      className="path-350"
                      alt="Path"
                      src="/img/path-310-1.png"
                    />

                    <img
                      className="path-351"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-352"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-353"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-351"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-353"
                      alt="Path"
                      src="/img/path-315-1.png"
                    />

                    <img
                      className="path-353"
                      alt="Path"
                      src="/img/path-316-1.png"
                    />

                    <img
                      className="path-354"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />

                    <img
                      className="path-355"
                      alt="Path"
                      src="/img/path-318-1.png"
                    />

                    <img
                      className="path-356"
                      alt="Path"
                      src="/img/path-319-1.png"
                    />

                    <img
                      className="path-357"
                      alt="Path"
                      src="/img/path-320-1.png"
                    />

                    <img
                      className="path-358"
                      alt="Path"
                      src="/img/path-321-1.png"
                    />

                    <img
                      className="path-359"
                      alt="Path"
                      src="/img/path-322-1.png"
                    />

                    <img
                      className="path-360"
                      alt="Path"
                      src="/img/path-323-1.png"
                    />

                    <img
                      className="path-361"
                      alt="Path"
                      src="/img/path-324-1.png"
                    />

                    <img
                      className="path-362"
                      alt="Path"
                      src="/img/path-328-1.png"
                    />
                  </div>

                  <img
                    className="path-363"
                    alt="Path"
                    src="/img/path-309-1.png"
                  />

                  <img
                    className="path-364"
                    alt="Path"
                    src="/img/path-289-1.png"
                  />

                  <img
                    className="path-365"
                    alt="Path"
                    src="/img/path-291-1.png"
                  />

                  <img
                    className="path-366"
                    alt="Path"
                    src="/img/path-325-1.png"
                  />

                  <div className="overlap-93">
                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path-327-1.png"
                    />
                  </div>
                </div>

                <div className="div-10">
                  <div className="div-10">
                    <div className="AK" />

                    <img className="MB" alt="Mb" src="/img/mb-2.png" />

                    <img className="SK" alt="Sk" src="/img/sk-4.png" />

                    <img className="AB" alt="Ab" src="/img/ab.png" />

                    <img className="BC" alt="Bc" src="/img/bc.png" />

                    <img className="NU" alt="Nu" src="/img/nu-2.png" />

                    <img className="NT" alt="Nt" src="/img/nt-2.png" />

                    <img className="YT" alt="Yt" src="/img/yt-2.png" />

                    <img className="ON" alt="On" src="/img/on.png" />

                    <img className="QC" alt="Qc" src="/img/qc-2.png" />

                    <img className="NB" alt="Nb" src="/img/nb-2.png" />

                    <img className="NS" alt="Ns" src="/img/ns-1.png" />

                    <img className="NL" alt="Nl" src="/img/nl.png" />

                    <img className="PE" alt="Pe" src="/img/pe-3.png" />

                    <img className="MA" alt="Ma" src="/img/ma-4.png" />

                    <img className="MN" alt="Mn" src="/img/mn-4.png" />

                    <img className="MT" alt="Mt" src="/img/mt-2.png" />

                    <img className="ND" alt="Nd" src="/img/nd-2.png" />

                    <img className="ID" alt="Id" src="/img/id-4.png" />

                    <img className="WA" alt="Wa" src="/img/wa.png" />

                    <img className="AZ" alt="Az" src="/img/az-2.png" />

                    <img className="CA" alt="Ca" src="/img/ca-2.png" />

                    <img className="CO" alt="Co" src="/img/co-1.png" />

                    <img className="NV" alt="Nv" src="/img/nv.png" />

                    <img className="NM" alt="Nm" src="/img/nm-2.png" />

                    <img className="OR" alt="Or" src="/img/or-2.png" />

                    <img className="UT" alt="Ut" src="/img/ut.png" />

                    <img className="WY" alt="Wy" src="/img/wy-2.png" />

                    <img className="AR" alt="Ar" src="/img/ar-2.png" />

                    <img className="IA" alt="Ia" src="/img/ia-2.png" />

                    <img className="KS" alt="Ks" src="/img/ks.png" />

                    <img className="MO" alt="Mo" src="/img/mo-2.png" />

                    <img className="NE" alt="Ne" src="/img/ne-1.png" />

                    <img className="OK" alt="Ok" src="/img/ok-2.png" />

                    <img className="SD" alt="Sd" src="/img/sd-1.png" />

                    <img className="LA" alt="La" src="/img/la-4.png" />

                    <img className="TX" alt="Tx" src="/img/tx-2.png" />

                    <img className="CT" alt="Ct" src="/img/ct-2.png" />

                    <img className="NH" alt="Nh" src="/img/nh-2.png" />

                    <img className="RI" alt="Ri" src="/img/ri-2.png" />

                    <img className="VT" alt="Vt" src="/img/vt.png" />

                    <img className="AL" alt="Al" src="/img/al-1.png" />

                    <img className="FL" alt="Fl" src="/img/fl.png" />

                    <img className="GA" alt="Ga" src="/img/ga-2.png" />

                    <img className="MS" alt="Ms" src="/img/ms-2.png" />

                    <img className="SC" alt="Sc" src="/img/sc-2.png" />

                    <img className="IL" alt="Il" src="/img/il-4.png" />

                    <img className="IN" alt="In" src="/img/in-4.png" />

                    <img className="KY" alt="Ky" src="/img/ky-2.png" />

                    <img className="NC" alt="Nc" src="/img/nc-2.png" />

                    <img className="OH" alt="Oh" src="/img/oh.png" />

                    <img className="TN" alt="Tn" src="/img/tn.png" />

                    <img className="VA" alt="Va" src="/img/va-2.png" />

                    <img className="WI" alt="Wi" src="/img/wi-2.png" />

                    <img className="WV" alt="Wv" src="/img/wv-2.png" />

                    <img className="DE" alt="De" src="/img/de-2.png" />

                    <img className="DC" alt="Dc" src="/img/dc-2.png" />

                    <img className="MD" alt="Md" src="/img/md-4.png" />

                    <img className="NJ" alt="Nj" src="/img/nj-2.png" />

                    <img className="NY" alt="Ny" src="/img/ny-2.png" />

                    <img className="PA" alt="Pa" src="/img/pa-2.png" />

                    <img className="ME" alt="Me" src="/img/me-2.png" />

                    <img className="MI" alt="Mi" src="/img/mi-2.png" />

                    <img className="AK-2" alt="Ak" src="/img/ak-2.png" />

                    <img className="MX" alt="Mx" src="/img/mx.png" />

                    <div className="x" />

                    <div className="x-2" />

                    <div className="x-3" />

                    <div className="layer">
                      <div className="MB-2" />

                      <div className="SK-2" />

                      <div className="AB-2" />

                      <div className="BC-2" />

                      <div className="NU-2" />

                      <div className="NT-2" />

                      <div className="YT-2" />

                      <div className="ON-2" />

                      <div className="QC-2" />

                      <div className="NB-2" />

                      <div className="NS-2" />

                      <div className="NL-2" />

                      <div className="PE-2" />

                      <div className="MA-2" />

                      <div className="MN-2" />

                      <div className="MT-2" />

                      <div className="ND-2" />

                      <div className="ID-2" />

                      <div className="WA-2" />

                      <div className="AZ-2" />

                      <div className="CA-2" />

                      <div className="CO-2" />

                      <div className="NV-2" />

                      <div className="NM-2" />

                      <div className="OR-2" />

                      <div className="UT-2" />

                      <div className="WY-2" />

                      <div className="AR-2" />

                      <div className="IA-2" />

                      <div className="KS-2" />

                      <div className="MO-2" />

                      <div className="NE-2" />

                      <div className="OK-2" />

                      <div className="SD-2" />

                      <div className="LA-2" />

                      <div className="TX-2" />

                      <div className="CT-2" />

                      <div className="NH-2" />

                      <div className="RI-2" />

                      <div className="VT-2" />

                      <div className="AL-2" />

                      <div className="FL-2" />

                      <div className="GA-2" />

                      <div className="MS-2" />

                      <div className="SC-2" />

                      <div className="IL-2" />

                      <div className="IN-2" />

                      <div className="KY-2" />

                      <div className="NC-2" />

                      <div className="OH-2" />

                      <div className="TN-2" />

                      <div className="VA-2" />

                      <div className="WI-2" />

                      <div className="WV-2" />

                      <div className="DE-2" />

                      <div className="DC-2" />

                      <div className="MD-2" />

                      <div className="NJ-2" />

                      <div className="NY-2" />

                      <div className="PA-2" />

                      <div className="ME-2" />

                      <div className="MI-2" />

                      <div className="AK-3" />

                      <div className="MX-2" />
                    </div>
                  </div>

                  <div className="overlap-94">
                    <img className="HI" alt="Hi" src="/img/hi-3.png" />

                    <div className="x-4" />

                    <div className="x-5" />

                    <div className="x-6" />
                  </div>
                </div>

                <div className="group-238">
                  <div className="overlap-95">
                    <div className="AK-4" />

                    <img className="MB-3" alt="Mb" src="/img/mb-3.png" />

                    <img className="SK-3" alt="Sk" src="/img/sk-5.png" />

                    <img className="AB-3" alt="Ab" src="/img/ab-1.png" />

                    <img className="BC-3" alt="Bc" src="/img/bc-3.png" />

                    <img className="NU-3" alt="Nu" src="/img/nu-1-1x.png" />

                    <img className="NT-3" alt="Nt" src="/img/nt-3.png" />

                    <img className="YT-3" alt="Yt" src="/img/yt-3.png" />

                    <img className="ON-3" alt="On" src="/img/on-3.png" />

                    <img className="QC-3" alt="Qc" src="/img/qc-3.png" />

                    <img className="NB-3" alt="Nb" src="/img/nb-3.png" />

                    <img className="NL-3" alt="Nl" src="/img/nl-3.png" />

                    <img className="MA-3" alt="Ma" src="/img/ma-5.png" />

                    <img className="MN-3" alt="Mn" src="/img/mn-5.png" />

                    <img className="MT-3" alt="Mt" src="/img/mt-1-1x.png" />

                    <img className="ND-3" alt="Nd" src="/img/nd-3.png" />

                    <img className="ID-3" alt="Id" src="/img/id-5.png" />

                    <img className="WA-3" alt="Wa" src="/img/wa-3.png" />

                    <img className="AZ-3" alt="Az" src="/img/az-3.png" />

                    <img className="CA-3" alt="Ca" src="/img/ca-1.png" />

                    <img className="CO-3" alt="Co" src="/img/co-5.png" />

                    <img className="NV-3" alt="Nv" src="/img/nv-1.png" />

                    <img className="NM-3" alt="Nm" src="/img/nm-3.png" />

                    <img className="OR-3" alt="Or" src="/img/or-3.png" />

                    <img className="UT-3" alt="Ut" src="/img/ut-1.png" />

                    <img className="WY-3" alt="Wy" src="/img/wy-3.png" />

                    <img className="AR-3" alt="Ar" src="/img/ar-3.png" />

                    <img className="IA-3" alt="Ia" src="/img/ia-3.png" />

                    <img className="KS-3" alt="Ks" src="/img/ks-3.png" />

                    <img className="MO-3" alt="Mo" src="/img/mo-3.png" />

                    <img className="NE-3" alt="Ne" src="/img/ne-5.png" />

                    <img className="OK-3" alt="Ok" src="/img/ok-1.png" />

                    <img className="SD-3" alt="Sd" src="/img/sd-5.png" />

                    <img className="LA-3" alt="La" src="/img/la-5.png" />

                    <img className="TX-3" alt="Tx" src="/img/tx-1.png" />

                    <img className="CT-3" alt="Ct" src="/img/ct-3.png" />

                    <img className="NH-3" alt="Nh" src="/img/nh-3.png" />

                    <img className="RI-3" alt="Ri" src="/img/ri-3.png" />

                    <img className="VT-3" alt="Vt" src="/img/vt-3.png" />

                    <img className="AL-3" alt="Al" src="/img/al-2.png" />

                    <img className="FL-3" alt="Fl" src="/img/fl-3.png" />

                    <img className="GA-3" alt="Ga" src="/img/ga-1.png" />

                    <img className="MS-3" alt="Ms" src="/img/ms-3.png" />

                    <img className="SC-3" alt="Sc" src="/img/sc-3.png" />

                    <img className="IL-3" alt="Il" src="/img/il-5.png" />

                    <img className="IN-3" alt="In" src="/img/in-5.png" />

                    <img className="KY-3" alt="Ky" src="/img/ky-3.png" />

                    <img className="NC-3" alt="Nc" src="/img/nc-3.png" />

                    <img className="OH-3" alt="Oh" src="/img/oh-1.png" />

                    <img className="TN-3" alt="Tn" src="/img/tn-1.png" />

                    <img className="VA-3" alt="Va" src="/img/va-3.png" />

                    <img className="WI-3" alt="Wi" src="/img/wi-3.png" />

                    <img className="WV-3" alt="Wv" src="/img/wv-3.png" />

                    <img className="DE-3" alt="De" src="/img/de-3.png" />

                    <img className="DC-3" alt="Dc" src="/img/dc-3.png" />

                    <img className="MD-3" alt="Md" src="/img/md-5.png" />

                    <img className="NJ-3" alt="Nj" src="/img/nj-3.png" />

                    <img className="NY-3" alt="Ny" src="/img/ny-3.png" />

                    <img className="PA-3" alt="Pa" src="/img/pa-3.png" />

                    <img className="ME-3" alt="Me" src="/img/me-3.png" />

                    <img className="MI-3" alt="Mi" src="/img/mi-1.png" />

                    <img className="AK-5" alt="Ak" src="/img/ak-3.png" />

                    <img className="MX-3" alt="Mx" src="/img/mx-1.png" />

                    <div className="x-7" />

                    <div className="x-8" />

                    <div className="x-9" />

                    <div className="layer-2">
                      <div className="MB-4" />

                      <div className="SK-4" />

                      <div className="AB-4" />

                      <div className="BC-4" />

                      <div className="NU-4" />

                      <div className="NT-4" />

                      <div className="YT-4" />

                      <div className="ON-4" />

                      <div className="QC-4" />

                      <div className="NB-4" />

                      <div className="NS-3" />

                      <div className="NL-4" />

                      <div className="PE-3" />

                      <div className="MA-4" />

                      <div className="MN-4" />

                      <div className="MT-4" />

                      <div className="ND-4" />

                      <div className="ID-4" />

                      <div className="WA-4" />

                      <div className="AZ-4" />

                      <div className="CA-4" />

                      <div className="CO-4" />

                      <div className="NV-4" />

                      <div className="NM-4" />

                      <div className="OR-4" />

                      <div className="UT-4" />

                      <div className="WY-4" />

                      <div className="AR-4" />

                      <div className="IA-4" />

                      <div className="KS-4" />

                      <div className="MO-4" />

                      <div className="NE-4" />

                      <div className="OK-4" />

                      <div className="SD-4" />

                      <div className="LA-4" />

                      <div className="TX-4" />

                      <div className="CT-4" />

                      <div className="NH-4" />

                      <div className="RI-4" />

                      <div className="VT-4" />

                      <div className="AL-4" />

                      <div className="FL-4" />

                      <div className="GA-4" />

                      <div className="MS-4" />

                      <div className="SC-4" />

                      <div className="IL-4" />

                      <div className="IN-4" />

                      <div className="KY-4" />

                      <div className="NC-4" />

                      <div className="OH-4" />

                      <div className="TN-4" />

                      <div className="VA-4" />

                      <div className="WI-4" />

                      <div className="WV-4" />

                      <div className="DE-4" />

                      <div className="DC-4" />

                      <div className="MD-4" />

                      <div className="NJ-4" />

                      <div className="NY-4" />

                      <div className="PA-4" />

                      <div className="ME-4" />

                      <div className="MI-4" />

                      <div className="AK-6" />

                      <div className="MX-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="nz">
                <img
                  className="path-367"
                  alt="Path"
                  src="/img/path3560-1.png"
                />

                <div className="overlap-96">
                  <img
                    className="path-368"
                    alt="Path"
                    src="/img/path3564-1.png"
                  />

                  <img
                    className="path-369"
                    alt="Path"
                    src="/img/path3566-1.png"
                  />

                  <img
                    className="path-370"
                    alt="Path"
                    src="/img/path3568-1.png"
                  />

                  <img
                    className="path-371"
                    alt="Path"
                    src="/img/path3570-1.png"
                  />

                  <img
                    className="path-372"
                    alt="Path"
                    src="/img/path3572-1.png"
                  />

                  <img
                    className="path-373"
                    alt="Path"
                    src="/img/path3574-1.png"
                  />
                </div>

                <img
                  className="path-374"
                  alt="Path"
                  src="/img/path3576-1.png"
                />

                <img className="path-375" alt="Path" src="/img/path-3578.png" />
              </div>

              <img className="sb" alt="Sb" src="/img/sb-1.png" />

              <div className="overlap-97">
                <div className="nc">
                  <div className="div-3">
                    <div className="overlap-group-42">
                      <img
                        className="path-376"
                        alt="Path"
                        src="/img/path2570-1.png"
                      />
                    </div>

                    <img
                      className="path-377"
                      alt="Path"
                      src="/img/path-2572.png"
                    />

                    <img
                      className="path-378"
                      alt="Path"
                      src="/img/path2574-1.png"
                    />

                    <img
                      className="path-379"
                      alt="Path"
                      src="/img/path-2576.png"
                    />

                    <img
                      className="path-110"
                      alt="Path"
                      src="/img/path3370-1.png"
                    />
                  </div>
                </div>

                <div className="vu" />
              </div>

              <div className="fj">
                <div className="div-4">
                  <img
                    className="path-380"
                    alt="Path"
                    src="/img/path-308-1.png"
                  />

                  <img
                    className="path-381"
                    alt="Path"
                    src="/img/path5544-1.png"
                  />

                  <img
                    className="path-382"
                    alt="Path"
                    src="/img/path5536-1.png"
                  />

                  <img
                    className="path-383"
                    alt="Path"
                    src="/img/path5542-1.png"
                  />

                  <img
                    className="path-384"
                    alt="Path"
                    src="/img/path5546-1.png"
                  />

                  <img
                    className="path-385"
                    alt="Path"
                    src="/img/path5548-1.png"
                  />

                  <img
                    className="path-48"
                    alt="Path"
                    src="/img/path5550-1.png"
                  />

                  <img
                    className="path-386"
                    alt="Path"
                    src="/img/path-249-1.png"
                  />
                </div>
              </div>

              <div className="ws">
                <div className="div-7">
                  <img
                    className="path-221"
                    alt="Path"
                    src="/img/path4782-1.png"
                  />

                  <img
                    className="path-387"
                    alt="Path"
                    src="/img/path4784-1.png"
                  />
                </div>
              </div>

              <div className="to">
                <div className="div-8">
                  <img
                    className="path-110"
                    alt="Path"
                    src="/img/path5930-1.png"
                  />

                  <img
                    className="path-388"
                    alt="Path"
                    src="/img/path5932-1.png"
                  />
                </div>
              </div>

              <div className="fm" />

              <div className="mp" />

              <div className="nu" />

              <div className="wf" />

              <div className="as" />

              <div className="mh" />

              <div className="tv" />

              <div className="pn" />

              <div className="gu" />
            </div>
          </div>

          <img
            className="rectangle-36"
            alt="Rectangle"
            src="/img/rectangle-1-12.png"
          />

          <div className="rectangle-37" />

          <header className="header-7">
            <div className="overlap-98">
              <div className="search-6">
                <div className="icon-16">
                  <img
                    className="vector-30"
                    alt="Vector"
                    src="/img/vector-174.png"
                  />
                </div>
              </div>

              <div className="header-8" />

              <div className="menu-28">
                <div className="destination-7">Archive</div>

                <div className="tours-7">FQA</div>
              </div>

              <div className="content-13">
                <button className="button-23">
                  <div className="sign-up-7">Sign Out</div>
                </button>
              </div>

              <div className="VENTURE-13">FRTIO LAY ROSENBERG NEWSLETTER</div>
            </div>
          </header>

          <div className="group-239">
            <div className="group-240">
              <div className="overlap-group-43">
                <div className="group-241" />

                <div className="group-242" />
              </div>
            </div>
          </div>

          <div className="light-field-default-28">
            <div className="placeholder-18">Search</div>
          </div>

          <div className="group-243">
            <div className="we-craft-digital-7">From Everywhere to Here</div>
          </div>

          <div className="footer-7">
            <div className="footer-8">
              <div className="cel-19">
                <div className="logo-text-7">
                  <div className="VENTURE-14">ROSENBURG</div>

                  <p className="text-wrapper-99">
                    Feel and enjoy the beauty of the amazing islands out there
                    with venture
                  </p>
                </div>

                <div className="menu-29">
                  <div className="content-14">
                    <div className="supports-7">Support</div>

                    <div className="cel-20">
                      <div className="help-7">Archive</div>

                      <div className="location-7">Location Info</div>

                      <div className="employees-7">Resources</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cel-21">
                <div className="overlap-group-44">
                  <div className="cel-22" />

                  <div className="frame-7">
                    <div className="terms-condditions-7">
                      Terms &amp; Condditions
                    </div>

                    <div className="ellipse-10" />

                    <div className="text-wrapper-100">Privacy Policy</div>
                  </div>

                  <div className="element-venture-all-7">
                    ©2025 All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-244">
            <div className="his-dolorem-habemus-12">Back</div>

            <div className="icon-17">
              <img
                className="vector-31"
                alt="Vector"
                src="/img/vector-159.png"
              />
            </div>
          </div>

          <p className="ainara-vergara-4">
            Each dot tells part of our story. Click a pin to meet the people who
            make us great.
          </p>

          <div className="group-245">
            <div className="overlap-99">
              <div className="we-craft-digital-8">
                COUNTRIES
                <br />
                REPRESENTED
              </div>

              <div className="we-craft-digital-9">37</div>

              <div className="his-dolorem-habemus-wrapper">
                <p className="his-dolorem-habemus-13">
                  From Australia to Zimbabwe, our team truly spans the globe.
                </p>
              </div>
            </div>
          </div>

          <div className="group-246">
            <div className="overlap-99">
              <div className="we-craft-digital-10">
                STATES &amp;
                <br />
                PROVINCES
              </div>

              <div className="we-craft-digital-11">128</div>

              <div className="his-dolorem-habemus-wrapper">
                <p className="his-dolorem-habemus-13">
                  Zoom in to see how far and wide our people call home.
                </p>
              </div>
            </div>
          </div>

          <div className="group-247">
            <div className="overlap-99">
              <div className="we-craft-digital-8">
                UNIQUE
                <br />
                HOMETOWNS
              </div>

              <div className="we-craft-digital-11">512</div>

              <div className="his-dolorem-habemus-wrapper">
                <p className="his-dolorem-habemus-13">
                  Every pin is a story. Every dot, <br />a journey.
                </p>
              </div>
            </div>
          </div>

          <div className="group-248">
            <img className="path-389" alt="Path" src="/img/path-329-1.png" />

            <img className="path-390" alt="Path" src="/img/path-330-1.png" />

            <img className="path-391" alt="Path" src="/img/path-331-1.png" />
          </div>

          <p className="the-map-you-see">
            <span className="text-wrapper-101">
              The map you see above is more than a snapshot of where we’re
              from—it’s a reflection of what we believe:
              <br />
            </span>

            <span className="text-wrapper-102">
              That great ideas come from everywhere.
              <br />
              That different perspectives make us stronger.
              <br />
              And that when we honor what makes each of us unique, we build
              something that belongs to all of us.
              <br />
              <br />
            </span>
          </p>

          <img className="path-392" alt="Path" src="/img/path-549-1.png" />

          <img className="path-393" alt="Path" src="/img/path-549-1.png" />

          <img className="path-394" alt="Path" src="/img/path-549-1.png" />

          <img className="path-395" alt="Path" src="/img/path-549-1.png" />

          <img className="path-396" alt="Path" src="/img/path-549-1.png" />

          <img className="path-397" alt="Path" src="/img/path-549-1.png" />

          <img className="path-398" alt="Path" src="/img/path-549-1.png" />

          <img className="path-399" alt="Path" src="/img/path-549-1.png" />

          <img className="path-400" alt="Path" src="/img/path-549-1.png" />

          <img className="path-401" alt="Path" src="/img/path-549-1.png" />

          <img className="path-402" alt="Path" src="/img/path-549-1.png" />

          <img className="path-403" alt="Path" src="/img/path-549-1.png" />

          <img className="path-404" alt="Path" src="/img/path-549-1.png" />

          <img className="path-405" alt="Path" src="/img/path-549-1.png" />

          <img className="path-406" alt="Path" src="/img/path-549-1.png" />

          <img className="path-407" alt="Path" src="/img/path-549-1.png" />

          <img className="path-408" alt="Path" src="/img/path-549-1.png" />

          <img className="path-409" alt="Path" src="/img/path-549-1.png" />

          <img className="path-410" alt="Path" src="/img/path-549-1.png" />

          <img className="group-249" alt="Group" src="/img/group-147-1.png" />

          <div className="rectangle-38" />

          <div className="group-250">
            <Link className="group-251" to="/the-berg-world-map">
              <img className="path-411" alt="Path" src="/img/path-155-11.png" />
            </Link>

            <div className="overlap-100">
              <img className="path-412" alt="Path" src="/img/path-565.png" />
            </div>

            {/* Input for job title */}
            <div className="light-field-default-29">
              <input
                type="text"
                className="placeholder-18"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  color: "inherit",
                }}
              />
            </div>

            {/* Input for user name */}
            <div className="light-field-default-30">
              <input
                type="text"
                className="placeholder-18"
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  color: "inherit",
                }}
              />
            </div>

            {/* Input for location */}
            <div className="light-field-default-31">
              <input
                type="text"
                className="placeholder-19"
                placeholder="Where are you from?"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  color: "inherit",
                }}
              />
              {/* decorative path image */}
              <img className="path-413" alt="Path" src="/img/path-564.png" />
            </div>

            {/* Replace link with clickable button to handle submission */}
            <div
              className="light-button-primary-17"
              onClick={handleAddMeIn}
              style={{ cursor: "pointer" }}
            >
              <button className="button-24" type="button">
                Add me in!
              </button>
            </div>
          </div>
        </div>
      {/* Closing tag for the top-level wrapper (replaced Link with div) */}
      </div>
    </div>
  );
};
