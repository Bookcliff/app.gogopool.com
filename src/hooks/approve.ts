import { BigNumber } from 'ethers'

import { useAddRecentTransaction } from '@rainbow-me/rainbowkit'
import { formatEther } from 'ethers/lib/utils'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import useStakingContract from './contracts/staking'
import useTokenGGPContract from './contracts/tokenGGP'

export const useApproveGGP = (amount: BigNumber) => {
  const { abi, address: ggpTokenAddress } = useTokenGGPContract()

  const { address: stakingAddr } = useStakingContract()
  const addRecentTransaction = useAddRecentTransaction()

  const { config } = usePrepareContractWrite({
    address: ggpTokenAddress,
    abi,
    functionName: 'approve',
    args: [stakingAddr, amount],
  })

  const resp = useContractWrite({
    ...config,
    onSuccess(data) {
      addRecentTransaction({
        hash: data.hash,
        description: `Approve ${formatEther(amount)} GGP`,
      })
    },
  })

  return {
    ...resp,
    ready: resp?.write !== undefined,
  }
}

export default useApproveGGP