"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { HttpTypes } from "@medusajs/types"
import { Locale } from "@lib/data/locales"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="inline-flex h-11 items-center rounded-full border border-[color:var(--outline)] bg-white/70 px-5 text-xs uppercase tracking-[0.3em] text-[color:var(--ink)] transition hover:bg-white"
                >
                  Menu
                </Popover.Button>
              </div>

              {open && (
                <div
                  className="fixed inset-0 z-[50] bg-black/0 pointer-events-auto"
                  onClick={close}
                  data-testid="side-menu-backdrop"
                />
              )}

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="flex flex-col absolute w-full pr-4 sm:pr-0 sm:w-[360px] 2xl:w-[420px] h-[calc(100vh-1rem)] z-[51] inset-x-0 text-sm text-[color:var(--ink)] m-2 backdrop-blur-2xl">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full glass-panel rounded-[28px] justify-between p-6"
                  >
                    <div className="flex items-center justify-between" id="xmark">
                      <span className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                        Navigation
                      </span>
                      <button
                        data-testid="close-menu-button"
                        onClick={close}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--outline)] bg-white/80 text-[color:var(--ink)]"
                      >
                        <XMark />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-4 items-start justify-start">
                      {Object.entries(SideMenuItems).map(([name, href]) => {
                        return (
                          <li key={name} className="w-full">
                            <LocalizedClientLink
                              href={href}
                              className="flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-2xl font-display text-[color:var(--ink)] transition hover:border-[color:var(--outline)] hover:bg-white/70"
                              onClick={close}
                              data-testid={`${name.toLowerCase()}-link`}
                            >
                              {name}
                              <ArrowRightMini className="text-[color:var(--muted)]" />
                            </LocalizedClientLink>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      {!!locales?.length && (
                        <div
                          className="flex justify-between rounded-2xl border border-[color:var(--outline)] bg-white/70 px-4 py-3"
                          onMouseEnter={languageToggleState.open}
                          onMouseLeave={languageToggleState.close}
                        >
                          <LanguageSelect
                            toggleState={languageToggleState}
                            locales={locales}
                            currentLocale={currentLocale}
                          />
                          <ArrowRightMini
                            className={clx(
                              "transition-transform duration-150 text-[color:var(--muted)]",
                              languageToggleState.state ? "-rotate-90" : ""
                            )}
                          />
                        </div>
                      )}
                      <div
                        className="flex justify-between rounded-2xl border border-[color:var(--outline)] bg-white/70 px-4 py-3"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={countryToggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150 text-[color:var(--muted)]",
                            countryToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                        © {new Date().getFullYear()} Atelier Supply.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
