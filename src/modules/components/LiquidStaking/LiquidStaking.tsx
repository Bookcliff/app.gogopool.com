import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  Hide,
  Show,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FunctionComponent, useEffect, useRef, useState } from "react";

import { Button } from "@/common/components/Button";
import { Card, Content, Footer, Title } from "@/common/components/Card";
import { SwapIcon } from "@/common/components/CustomIcon/SwapIcon";
import { Tooltip } from "@/common/components/Tooltip";
import useBalance from "@/hooks/balance";
import useDeposit from "@/hooks/deposit";
import useExchangeRate from "@/hooks/ggexchange";
import useWallet from "@/hooks/wallet";
import { roundedBigNumber } from "@/utils/numberFormatter";

import { DepositDrawer } from "../Drawer";
import { DepositModal } from "../Modal";
import { RewardForm } from "./RewardForm";
import { StakeForm } from "./StakeForm";
import { Statistics } from "./Statistics";

const statisticData = [
  {
    label: (
      <>
        Annual Percentage Rate
        <Tooltip placement="right" content="Explanation here">
          <span className="ml-1 h-3 w-3 rounded-full bg-red-500" />
        </Tooltip>
      </>
    ),
    value: "~7.20%",
  },
  {
    label: (
      <>
        Exchange Rate
        <Tooltip placement="right" content="Explanation here">
          <span className="ml-1 h-3 w-3 rounded-full bg-red-500" />
        </Tooltip>
      </>
    ),
    value: "1 AVAX = 0.0000 sAVAX",
  },
  {
    label: <># of Stakers</>,
    value: "0",
  },
  {
    label: <>Total AVAX Staked</>,
    value: "0 AVAX",
  },
  {
    label: <>sAVAX Market Cap</>,
    value: "$0",
  },
  {
    label: (
      <>
        Unstaking Cooldown Period
        <Tooltip placement="right" content="Explanation here">
          <span className="ml-1 h-3 w-3 rounded-full bg-red-500" />
        </Tooltip>
      </>
    ),
    value: "0 days",
  },
  {
    label: (
      <>
        Redemption Period
        <Tooltip placement="right" content="Explanation here">
          <span className="ml-1 h-3 w-3 rounded-full bg-red-500" />
        </Tooltip>
      </>
    ),
    value: "0 days",
  },
];

export const LiquidStaking: FunctionComponent = () => {
  const isMounted = useRef(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { account, activate, provider } = useWallet();
  const balance = useBalance(); // AVAX balance
  const { send, success, isLoading } = useDeposit(provider);
  const exchangeRate = useExchangeRate(provider);

  const [amount, setAmount] = useState<number>(); // stake value
  const [reward, setReward] = useState<number>(0); // reward value
  const [depositStatus, setDepositStatus] = useState<"success" | "failed">(
    "failed"
  );

  const handleDeposit = async () => {
    await send(amount);
  };

  const handleConnect = () => {
    activate();
  };

  const handleSwap = () => {
    const temporaryAmount = amount;
    const temporaryReward = reward;

    setAmount(temporaryReward);
    setReward(temporaryAmount);
  };

  useEffect(() => {
    if (isMounted.current) {
      if (success) setDepositStatus("success");
      else setDepositStatus("failed");
      (() => onOpen())();
    } else {
      isMounted.current = true;
    }
  }, [success]);

  return (
    <>
      <Show above="sm">
        <DepositModal
          status={depositStatus}
          isOpen={isOpen}
          onClose={onClose}
          successProps={{
            amount: amount,
            token: "AVAX",
          }}
        />
      </Show>
      <Hide above="sm">
        <DepositDrawer
          status={depositStatus}
          isOpen={isOpen}
          onClose={onClose}
          successProps={{
            amount: amount,
            token: "AVAX",
          }}
        />
      </Hide>
      <Card outer>
        <Title>Liquid Staking</Title>
        <Content>
          <FormControl>
            <Box position="relative">
              <Card backgroundColor="grey.100" mb="2">
                <Content>
                  <StakeForm
                    amount={amount}
                    setAmount={setAmount}
                    setReward={setReward}
                    balance={roundedBigNumber(balance) || 0}
                    exchangeRate={roundedBigNumber(exchangeRate) || 0}
                  />
                </Content>
              </Card>
              <Box
                position="absolute"
                bgColor="green.500"
                w="8"
                h="6"
                borderRadius="md"
                className="left-[calc(50%-16px)] bottom-[-16px] cursor-pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={handleSwap}
              >
                <SwapIcon size="16px" />
              </Box>
            </Box>
            <Card p="1rem 1.5rem" backgroundColor="grey.100" mb="4">
              <Content>
                <RewardForm reward={reward} balance={0} />
              </Content>
            </Card>
            <Card rounded="12px" p="0" backgroundColor="grey.100" mb="2">
              <Content>
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton
                      p="1rem 1.5rem"
                      data-testid="liquid-staking-accordion-action"
                    >
                      <Text
                        flex="1"
                        textAlign="left"
                        size="md"
                        fontWeight="bold"
                      >
                        Liquid Staking Statistics
                      </Text>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel p="0 1.5rem 1rem 1.5rem">
                      <Statistics data={statisticData} />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Content>
            </Card>
          </FormControl>
        </Content>
        <Footer>
          {account ? (
            <Button full disabled={!amount} onClick={handleDeposit}>
              {isLoading ? "Loading..." : "Deposit"}
            </Button>
          ) : (
            <Button full onClick={handleConnect}>
              Connect wallet
            </Button>
          )}
        </Footer>
      </Card>
    </>
  );
};
