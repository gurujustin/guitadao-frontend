import { useState, useEffect } from "react";
import { addresses, TOKEN_DECIMALS } from "../../constants";
import { Link, SvgIcon, Popper, Button, Paper, Typography, Divider, Box, Fade, Slide } from "@material-ui/core";
import { ReactComponent as InfoIcon } from "../../assets/icons/info-fill.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as sguitaTokenImg } from "../../assets/tokens/SGUITA.svg";
import { ReactComponent as guitaTokenImg } from "../../assets/tokens/GUITA.svg";

import "./guitamenu.scss";
import { dai } from "src/helpers/AllBonds";
import { useWeb3Context } from "../../hooks/web3Context";

import GuitaImg from "src/assets/tokens/GUITA.svg";
import SGuitaImg from "src/assets/tokens/SGUITA.svg";

const addTokenToWallet = (tokenSymbol, tokenAddress) => async () => {
  if (window.ethereum) {
    const host = window.location.origin;
    // NOTE (appleseed): 33T token defaults to sGUITA logo since we don't have a 33T logo yet
    let tokenPath;
    // if (tokenSymbol === "GUITA") {

    // } ? GuitaImg : SGuitaImg;
    switch (tokenSymbol) {
      case "GUITA":
        tokenPath = GuitaImg;
        break;
      default:
        tokenPath = SGuitaImg;
    }
    const imageURL = `${host}/${tokenPath}`;

    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: TOKEN_DECIMALS,
            image: imageURL,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

function GuitaMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isEthereumAPIAvailable = window.ethereum;
  const { chainID } = useWeb3Context();

  const networkID = chainID;

  const SGUITA_ADDRESS = addresses[networkID].SGUITA_ADDRESS;
  const GUITA_ADDRESS = addresses[networkID].GUITA_ADDRESS;
  const USDC_ADDRESS = addresses[networkID].USDC_ADDRESS;

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = "guita-popper";
  const daiAddress = dai.getAddressForReserve(networkID);
  return (
    <Box
      component="div"
      onMouseEnter={e => handleClick(e)}
      onMouseLeave={e => handleClick(e)}
      id="guita-menu-button-hover"
    >
      <Button id="guita-menu-button" size="large" variant="contained" color="secondary" title="GUITA" aria-describedby={id}>
        <SvgIcon component={InfoIcon} color="primary" />
        <Typography>GUITA</Typography>
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start" transition>
        {({ TransitionProps }) => {
          return (
            <Fade {...TransitionProps} timeout={100}>
              <Paper className="guita-menu" elevation={1}>
                <Box component="div" className="buy-tokens">
                  <Link
                    href={`https://quickswap.exchange/#/swap?inputCurrency=${daiAddress}&outputCurrency=${GUITA_ADDRESS}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="large" variant="contained" color="secondary" fullWidth>
                      <Typography align="left">
                        Buy on QuickSwap <SvgIcon component={ArrowUpIcon} htmlColor="#A3A3A3" />
                      </Typography>
                    </Button>
                  </Link>
                </Box>

                {isEthereumAPIAvailable ? (
                  <Box className="add-tokens">
                    <Divider color="secondary" />
                    <p>ADD TOKEN TO WALLET</p>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                      <Button variant="contained" color="secondary" onClick={addTokenToWallet("GUITA", GUITA_ADDRESS)}>
                        <SvgIcon
                          component={guitaTokenImg}
                          viewBox="0 0 32 32"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <Typography variant="body1">GUITA</Typography>
                      </Button>
                      <Button variant="contained" color="secondary" onClick={addTokenToWallet("sGUITA", SGUITA_ADDRESS)}>
                        <SvgIcon
                          component={sguitaTokenImg}
                          viewBox="0 0 32 32"
                          style={{ height: "25px", width: "25px" }}
                        />
                        <Typography variant="body1">sGUITA</Typography>
                      </Button>
                    </Box>
                  </Box>
                ) : null}
              </Paper>
            </Fade>
          );
        }}
      </Popper>
    </Box>
  );
}

export default GuitaMenu;
