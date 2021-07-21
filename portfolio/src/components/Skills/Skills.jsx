import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import '../Skills/Skills.scss'
import Card from './Card'

export default function Skills(props) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    db
      .collection('skills')
      .orderBy('skillID', 'asc')
      .onSnapshot(snapshot => {
        setSkills(
        snapshot.docs.map(doc => (
          { 
            skillId: doc.id,
            skillTitle: doc.data().skillTitle,
            skillIcon: doc.data().skillIcon,
            skillDescription: doc.data().skillDescription,
          }))
        )
      })
  }, []);


  return (
    <section className="skill-container">
      {
        skills.map(skill => (
          <Card
            className="no-underline"
            skillId={skill.skillId}
            skillIcon={skill.skillIcon}
            skillTitle={skill.skillTitle}
            skillDescription={skill.skillDescription}
          />
        ))
      }
    </section>
  );
}