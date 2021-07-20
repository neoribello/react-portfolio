import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import '../Skills/Skills.scss'
import Card from './Card'

export default function Skills(props) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    db
      .collection('skills')
      .orderBy('skillTitle', 'desc')
      .onSnapshot(snapshot => {
        setSkills(
        snapshot.docs.map(doc => (
          { 
            skillId: doc.id,
            skillTitle: doc.data().skillTitle,
            skillDescription: doc.data().skillDescription,
          }))
        )
      })
  }, []);


  return (
    <section className="skills-container">
      {
        skills.map(skill => (
          <Card
            className="no-underline"
            skillId={skill.skillId}
            skillTitle={skill.skillTitle}
            skillDescription={skill.skillDescription}
          />
        ))
      }
    </section>
  );
}