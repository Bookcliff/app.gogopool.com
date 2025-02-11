import { Box, useDisclosure } from '@chakra-ui/react'
import { useAccount } from 'wagmi'

import { DashboardContainer } from '@/common/components/Container'
import { PageHead } from '@/common/components/PageHead'
import useCeres from '@/hooks/useCeres'
import Rewards from '@/modules/components/Dashboard/Cards/Rewards/Rewards'
import TotalStaked from '@/modules/components/Dashboard/Cards/TotalStaked'
import DashboardHeader from '@/modules/components/Dashboard/DashboardHeader'
import MinipoolTable from '@/modules/components/MinipoolTable'
import { ClaimAndRestakeModal } from '@/modules/components/Modal/ClaimAndRestake/ClaimAndRestakeModal'
import SurveyV2 from '@/modules/components/Modal/Survey/SurveyV2'
import { SidebarNavbar } from '@/modules/components/SidebarNavbar/SidebarNavbar'

const Dashboard = () => {
  const { address } = useAccount()
  const { data: ceresData, isLoading: ceresLoading } = useCeres()

  const {
    isOpen: isClaimAndRestakeOpen,
    onClose: onCloseClaimAndRestake,
    onOpen: onOpenClaimAndRestake,
  } = useDisclosure()
  const { isOpen: surveyIsOpen, onClose: onCloseSurvey, onOpen: onOpenSurvey } = useDisclosure()

  const closeAndShowSurvey = () => {
    onCloseClaimAndRestake()
    const hasShownSurvey = localStorage.getItem('hasShownSurvey')
    if (!hasShownSurvey || hasShownSurvey === 'false') {
      onOpenSurvey()
      localStorage.setItem('hasShownSurvey', 'true')
    }
  }

  if (ceresLoading) {
    return null
  }

  return (
    <Box className="bg-[#F7F9FF]" minH="full">
      <SurveyV2 surveyClose={onCloseSurvey} surveyIsOpen={surveyIsOpen} />
      <PageHead append={false} description="Node Operator Dashboard" name="Dashboard" />
      <DashboardContainer>
        {isClaimAndRestakeOpen && <ClaimAndRestakeModal onClose={closeAndShowSurvey} />}
        <DashboardHeader ceresData={ceresData} />
        <Box className="space-y-6 bg-[#F7F9FF] py-8" minH="full">
          <div className="flex shrink flex-wrap justify-around gap-4">
            <TotalStaked />
            <Rewards
              address={address}
              ceresData={ceresData}
              openClaimModal={onOpenClaimAndRestake}
            />
          </div>
          <MinipoolTable ownerAddress={address} />
        </Box>
      </DashboardContainer>
    </Box>
  )
}

Dashboard.getLayout = function getLayout(page) {
  return <SidebarNavbar>{page}</SidebarNavbar>
}

export default Dashboard
