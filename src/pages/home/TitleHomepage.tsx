import { Flex, Typography } from 'antd'
import React from 'react'
import { colors } from '../../styles/colors'
import { currentDateString } from '../../utils/currentDateString'
import CreateProjectButton from '../../features/projects/CreateProjectButton'
import { useMediaQuery } from 'react-responsive'
import { greetingString } from '../../utils/greetingString'

const TitleHomepage = () => {
    // get current date in specific format
    const date: string = currentDateString()
    // get a greeting message based on the time
    const greet: string = greetingString('Sachintha')

    // Media queries from react-responsive package
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

    return (
        <Flex vertical gap={8} align="center">
            <Typography.Title
                level={3}
                style={{ fontWeight: 500, marginBlock: 0 }}
            >
                {greet}
            </Typography.Title>
            <Typography.Title
                level={4}
                style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginBlock: 0,
                    color: colors.skyBlue,
                }}
            >
                {date}
            </Typography.Title>
            {isDesktop && (
                <div style={{ position: 'absolute', right: 0, top: 12 }}>
                    <CreateProjectButton />
                </div>
            )}
        </Flex>
    )
}

export default TitleHomepage
