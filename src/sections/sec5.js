import { useState, Fragment, useEffect } from "react";
// import "./style.css";
import "./sec5.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import FAQ from "./FAQ";

function Sec5() {
  return (
    <div className="sec5">
      <div className="texts5">
        <div className="key5">MORE INFO</div>
        <div className="teachers">Common questions</div>
      </div>
      <div className="section5">
        <div className="component5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How can I know my level of knowlwdge?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="component5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Can I do it individually or only in a group?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pharetra
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="component5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Are you adjusting to the student's schedule?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                jbachabjvb,anv jh
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="component5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How can I know my level of knowlwdge?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex
                dui. Integer id venenatis quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="component5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What is the maximum group size?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pharetra lorem eu dolor rhoncus, at scelerisque ligula
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="component5">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How can I know my level of knowlwdge?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Sec5;
