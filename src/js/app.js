export default function showSpecialAttack(obj) {
  const specialAttackArr = [];

  for (const value of obj.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = value;

    specialAttackArr.push({
      id, name, icon, description,
    });
  }

  return specialAttackArr;
}
