import { AbilityBuilder, Ability } from '@casl/ability'
import UserInterface from '@/ts/interfaces/User.interface'
import { useAuth } from '@/hooks/useAuth'
import { createContextualCan, useAbility } from '@casl/react'
import React from 'react'

function defineAbilityFor() {
    const { user }: { user: UserInterface } = useAuth()
    console.log('here is our user... ', user)

    const { can, cannot, build } = new AbilityBuilder(Ability)

    if (user && user.permissions && user.permissions.length) {
        console.log('yes, we got the user!')

        user.permissions.forEach((permission) => {
            // e.g. read-Post to ['read', 'Post']
            const flat = permission[0].split('-')

            can(flat[0], flat[1])
        })
    }

    return build()
}

// const ability = useAbility()

// export const Can = createContextualCan(ability)
