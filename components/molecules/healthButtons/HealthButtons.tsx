import { HeroButtonAction } from "@/components";
import {
  useHeroBuffHp,
  useHeroDamage,
  useHeroHealing,
  useHeroTempHp,
} from "@/lib";
import { Button, Collapse, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { FC } from "react";

interface HeroButtonsProps {
  heroId: number;
  damageOneDto?: { damage: number };
  damageFiveDto?: { damage: number };
  damageTenDto?: { damage: number };
  healingOneDto?: { healing: number };
  healingFiveDto?: { healing: number };
  healingTenDto?: { healing: number };
  tempOneHpDto?: { tempHp: number };
  tempFiveHpDto?: { tempHp: number };
  tempTenHpDto?: { tempHp: number };
  buffOneHpDto?: { buffHp: number };
  buffFiveHpDto?: { buffHp: number };
  buffTenHpDto?: { buffHp: number };
}

export const HealthButtons: FC<HeroButtonsProps> = ({
  heroId,
  damageOneDto = { damage: 1 },
  damageFiveDto = { damage: 5 },
  damageTenDto = { damage: 10 },
  healingOneDto = { healing: 1 },
  healingFiveDto = { healing: 5 },
  healingTenDto = { healing: 10 },
  tempOneHpDto = { tempHp: 1 },
  tempFiveHpDto = { tempHp: 5 },
  tempTenHpDto = { tempHp: 10 },
  buffOneHpDto = { buffHp: 1 },
  buffFiveHpDto = { buffHp: 5 },
  buffTenHpDto = { buffHp: 10 },
}) => {
  const { applyHeroDamage: applyDamageOne, isLoading: isDamageOneLoading } =
    useHeroDamage({
      heroId,
      damageDto: damageOneDto,
    });

  const { applyHeroDamage: applyDamageFive, isLoading: isDamageFiveLoading } =
    useHeroDamage({
      heroId,
      damageDto: damageFiveDto,
    });

  const { applyHeroDamage: applyDamageTen, isLoading: isDamageTenLoading } =
    useHeroDamage({
      heroId,
      damageDto: damageTenDto,
    });

  const { applyHeroHealing: applyHealingOne, isLoading: isHealingOneLoading } =
    useHeroHealing({
      heroId,
      healingDto: healingOneDto,
    });

  const {
    applyHeroHealing: applyHealingFive,
    isLoading: isHealingFiveLoading,
  } = useHeroHealing({
    heroId,
    healingDto: healingFiveDto,
  });

  const { applyHeroHealing: applyHealingTen, isLoading: isHealingTenLoading } =
    useHeroHealing({
      heroId,
      healingDto: healingTenDto,
    });

  const { applyTempHp: applyTempHpOne, isLoading: isTempHpOneLoading } =
    useHeroTempHp({
      heroId,
      tempHpDto: tempOneHpDto,
    });

  const { applyTempHp: applyTempHpFive, isLoading: isTempHpFiveLoading } =
    useHeroTempHp({
      heroId,
      tempHpDto: tempFiveHpDto,
    });

  const { applyTempHp: applyTempHpTen, isLoading: isTempHpTenLoading } =
    useHeroTempHp({
      heroId,
      tempHpDto: tempTenHpDto,
    });

  const { applyBuffHp: applyBuffHpOne, isLoading: isBuffHpOneLoading } =
    useHeroBuffHp({
      heroId,
      buffHpDto: buffOneHpDto,
    });

  const { applyBuffHp: applyBuffHpFive, isLoading: isBuffHpFiveLoading } =
    useHeroBuffHp({
      heroId,
      buffHpDto: buffFiveHpDto,
    });

  const { applyBuffHp: applyBuffHpTen, isLoading: isBuffHpTenLoading } =
    useHeroBuffHp({
      heroId,
      buffHpDto: buffTenHpDto,
    });

  const [openedDamage, { toggle: toggleDamage }] = useDisclosure(false);
  const [openedHeal, { toggle: toggleHeal }] = useDisclosure(false);
  const [openedBuff, { toggle: toggleBuff }] = useDisclosure(false);
  const [openedTemp, { toggle: toggleTemp }] = useDisclosure(false);

  return (
    <div>
      <Group justify="center" mb={5}>
        <Button onClick={toggleDamage}>Урон</Button>
        <Button onClick={toggleHeal}>Хил</Button>
        <Button onClick={toggleBuff}>Бафф</Button>
        <Button onClick={toggleTemp}>Временное</Button>
      </Group>
      <Collapse in={openedDamage}>
        <HeroButtonAction
          isLoading={isDamageOneLoading}
          text="-1"
          onClick={() => applyDamageOne()}
        />
        <HeroButtonAction
          isLoading={isDamageFiveLoading}
          text="-5"
          onClick={() => applyDamageFive()}
        />
        <HeroButtonAction
          isLoading={isDamageTenLoading}
          text="-10"
          onClick={() => applyDamageTen()}
        />
      </Collapse>
      <Collapse in={openedHeal}>
        <HeroButtonAction
          isLoading={isHealingOneLoading}
          text="+1"
          onClick={() => applyHealingOne()}
        />
        <HeroButtonAction
          isLoading={isHealingFiveLoading}
          text="+5"
          onClick={() => applyHealingFive()}
        />
        <HeroButtonAction
          isLoading={isHealingTenLoading}
          text="+10"
          onClick={() => applyHealingTen()}
        />
      </Collapse>

      <Collapse in={openedBuff}>
        <HeroButtonAction
          isLoading={isTempHpOneLoading}
          text="+1T"
          onClick={() => applyTempHpOne()}
        />
        <HeroButtonAction
          isLoading={isTempHpFiveLoading}
          text="+5T"
          onClick={() => applyTempHpFive()}
        />
        <HeroButtonAction
          isLoading={isTempHpTenLoading}
          text="+10T"
          onClick={() => applyTempHpTen()}
        />
      </Collapse>

      <Collapse in={openedTemp}>
        <HeroButtonAction
          isLoading={isBuffHpOneLoading}
          text="+1B"
          onClick={() => applyBuffHpOne()}
        />
        <HeroButtonAction
          isLoading={isBuffHpFiveLoading}
          text="+5B"
          onClick={() => applyBuffHpFive()}
        />
        <HeroButtonAction
          isLoading={isBuffHpTenLoading}
          text="+10B"
          onClick={() => applyBuffHpTen()}
        />
      </Collapse>
    </div>
  );
};
