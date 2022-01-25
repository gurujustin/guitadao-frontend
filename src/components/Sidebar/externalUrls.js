import { ReactComponent as ForumIcon } from "../../assets/icons/forum.svg";
import { ReactComponent as GovIcon } from "../../assets/icons/governance.svg";
import { ReactComponent as DocsIcon } from "../../assets/icons/docs.svg";
import { ReactComponent as QuickSwapIcon } from "../../assets/icons/quickswap.svg";
import { ReactComponent as SpiritSwapIcon } from "../../assets/icons/spiritswap.svg";
import { ReactComponent as FeedbackIcon } from "../../assets/icons/feedback.svg";
import { SvgIcon } from "@material-ui/core";
import { AccountBalanceOutlined, MonetizationOnOutlined } from "@material-ui/icons";

const externalUrls = [
  {
    title: "Buy on QuickSwap",
    url: "https://quickswap.exchange/#/swap?inputCurrency=0x8f3cf7ad23cd3cadbd9735aff958023239c6a063&outputCurrency=0x788dC7079971257d985dCce302CE061cd67291f8",
    icon: <SvgIcon viewBox="0 0 64 64" color="primary" component={QuickSwapIcon} />,
  },
  // {
  //   title: "Buy on SpiritSwap",
  //   url: "https://swap.spiritswap.finance/#/exchange/swap/0x450aeb4231c8d939ea509fe3b314d1c045f7605e",
  //   icon: <SvgIcon viewBox="0 0 155 172" color="primary" component={SpiritSwapIcon} />,
  // },
  // {
  //   title: "Guita Lend",
  //   label: "(Coming soon)",
  //   icon: <MonetizationOnOutlined viewBox="0 0 20 24" />,
  // },
  // {
  //   title: "Guita Borrow",
  //   label: "(Coming soon)",
  //   icon: <MonetizationOnOutlined viewBox="0 0 20 24" />,
  // },
  // {
  //   title: "Guita PRO",
  //   label: "(Coming soon)",
  //   icon: <AccountBalanceOutlined viewBox="0 0 20 24" />,
  // },
  // {
  //   title: "Governance",
  //   url: "https://snapshot.org/#/guitadao.eth",
  //   icon: <SvgIcon color="primary" component={GovIcon} />,
  // },
  {
    title: "Docs",
    url: "http://docs.guitadao.com/",
    icon: <SvgIcon color="primary" component={DocsIcon} />,
  },
];

export default externalUrls;
